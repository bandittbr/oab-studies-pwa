function normalizeToken(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

// Detecta se a query e uma busca por artigo (ex: "art 5", "art. 422", "art 1015")
function detectArticleQuery(normalizedQuery) {
  const patterns = [
    /^art\.?\s*(\d+[o°]?(?:[,\s]\w+)*)/i,
    /^artigo\s+(\d+)/i,
    /(\d+[o°]?),?\s*(i{1,3}|iv|v|vi{0,3}|ix|x{0,3}|xi{0,3}|xiv|xv|xi{0,3}|xl|l)?\s*,?\s*(paragrafo|par\.?|§)/i
  ];
  return patterns.some((p) => p.test(normalizedQuery));
}

// Detecta busca por fundamento legal (ex: "cf art 5", "cpc 300", "cc 422")
function detectLegalBasisQuery(normalizedQuery) {
  const codes = ["cf", "cc", "cp", "cpc", "clt", "ctn", "cdc", "cpp", "eoab", "ced"];
  const firstToken = normalizedQuery.split(/\s+/)[0];
  return codes.includes(firstToken);
}

// Busca especifica por numero de questao na prova (ex: "questao 5 oab 40")
function detectExamQuestionQuery(normalizedQuery) {
  return /quest[aã]o\s+\d+/.test(normalizedQuery) || /\boab\s+\d+\b/.test(normalizedQuery);
}

export function runGlobalSearch(repository, query) {
  const normalizedQuery = normalizeToken(query).trim();
  if (!normalizedQuery || normalizedQuery.length < 2) {
    return [];
  }

  const tokens = normalizedQuery.split(/[^a-z0-9]+/).filter((t) => t.length >= 2);
  const scoreMap = new Map();
  const queryParts = normalizedQuery.split(/\s+/).filter(Boolean);

  const isArticleQuery = detectArticleQuery(normalizedQuery);
  const isLegalBasisQuery = detectLegalBasisQuery(normalizedQuery);
  const isExamQuery = detectExamQuestionQuery(normalizedQuery);

  // Busca por token no indice invertido
  tokens.forEach((token) => {
    const hits = repository.searchIndex.tokenMap.get(token) ?? [];
    hits.forEach((hit) => {
      const key = `${hit.type}:${hit.id}`;
      scoreMap.set(key, (scoreMap.get(key) ?? 0) + hit.weight);
    });
  });

  // Boost para buscas especificas por questoes
  repository.questions.forEach((question) => {
    const normalizedStatement = normalizeToken(question.statement);
    const normalizedSupport = normalizeToken(question.support ?? "");
    const normalizedTheme = normalizeToken(question.theme?.label ?? "");
    const normalizedExam = normalizeToken(question.exam?.label ?? "");
    const normalizedTags = normalizeToken((question.tags ?? []).join(" "));
    const normalizedOfficialExams = normalizeToken(
      (question.officialExams ?? []).map((e) => `oab ${e.year} ${e.label}`).join(" ")
    );

    let phraseBoost = 0;

    // Boost por correspondencia de frase completa no enunciado
    if (normalizedStatement.includes(normalizedQuery)) phraseBoost += 10;

    // Boost especifico por fundamento legal
    if (isLegalBasisQuery || isArticleQuery) {
      if (normalizedSupport.includes(normalizedQuery)) phraseBoost += 20;
      const articleTokens = queryParts.filter((t) => /^\d+/.test(t) || t === "art");
      if (articleTokens.every((t) => normalizedSupport.includes(t))) phraseBoost += 12;
    }

    // Boost por correspondencia em tema ou materia
    if (normalizedTheme.includes(normalizedQuery) || normalizedExam.includes(normalizedQuery)) phraseBoost += 6;

    // Boost por correspondencia em tags
    if (normalizedTags.includes(normalizedQuery)) phraseBoost += 5;

    // Boost por correspondencia em prova oficial
    if (isExamQuery && normalizedOfficialExams.includes(normalizedQuery)) phraseBoost += 15;

    // Boost por todos os tokens presentes no texto de busca
    if (queryParts.every((part) => question.searchText.includes(part))) phraseBoost += 4;

    // Boost por numero de questao
    if (question.questionNumber && normalizedQuery.includes(String(question.questionNumber))) phraseBoost += 3;

    if (phraseBoost > 0) {
      const key = `question:${question.id}`;
      scoreMap.set(key, (scoreMap.get(key) ?? 0) + phraseBoost);
    }
  });

  // Busca em artigos de lei com boost especial por numero de artigo
  repository.lawArticles.forEach((article) => {
    const normalizedArticleNumber = normalizeToken(article.articleNumber);
    const normalizedTitle = normalizeToken(article.title ?? "");
    const normalizedText = normalizeToken(article.text ?? "");
    const normalizedKeywords = normalizeToken((article.keywords ?? []).join(" "));

    let articleBoost = 0;

    // Correspondencia exata no numero do artigo (maxima prioridade)
    if (normalizedArticleNumber.includes(normalizedQuery) || normalizedQuery.includes(normalizedArticleNumber)) {
      articleBoost += 30;
    }

    // Correspondencia por tokens no artigo
    if (queryParts.every((part) => normalizedArticleNumber.includes(part))) articleBoost += 20;

    // Correspondencia em titulo ou texto
    if (normalizedTitle.includes(normalizedQuery)) articleBoost += 8;
    if (normalizedKeywords.includes(normalizedQuery)) articleBoost += 10;
    if (normalizedText.includes(normalizedQuery)) articleBoost += 5;
    if (queryParts.every((part) => (normalizedTitle + " " + normalizedText + " " + normalizedKeywords).includes(part))) {
      articleBoost += 4;
    }

    if (articleBoost > 0) {
      const key = `article:${article.id}`;
      scoreMap.set(key, (scoreMap.get(key) ?? 0) + articleBoost);
    }
  });

  return Array.from(scoreMap.entries())
    .map(([key, score]) => {
      const [type, id] = key.split(":");
      if (type === "question") {
        const item = repository.indexes.questionsById[id];
        if (!item) return null;
        return {
          id,
          type,
          score,
          item,
          subtitle: [
            item.exam?.shortLabel ?? item.exam?.label ?? "",
            item.subject?.label ?? "",
            item.theme?.label ?? ""
          ]
            .filter(Boolean)
            .join(" • ")
        };
      }

      if (type === "article") {
        const item = repository.indexes.lawArticleById[id];
        if (!item) return null;
        return {
          id,
          type,
          score,
          item,
          subtitle: item.articleNumber
        };
      }

      return null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 60);
}

// Busca facetada: retorna questoes filtradas por multiplos criterios simultaneos
export function runFacetedSearch(repository, { subjectId, themeId, examId, officialExamId, difficulty, support, tags, text }) {
  let results = repository.questions;

  if (subjectId && subjectId !== "all") {
    results = results.filter((q) => q.subjectId === subjectId);
  }
  if (themeId && themeId !== "all") {
    results = results.filter((q) => q.themeId === themeId);
  }
  if (examId && examId !== "all") {
    results = results.filter((q) => q.examId === examId);
  }
  if (officialExamId && officialExamId !== "all") {
    results = results.filter((q) => (q.officialExams ?? []).some((e) => e.id === officialExamId));
  }
  if (difficulty && difficulty !== "all") {
    results = results.filter((q) => q.difficulty === difficulty);
  }
  if (support) {
    const normalized = normalizeToken(support);
    results = results.filter((q) => normalizeToken(q.support ?? "").includes(normalized));
  }
  if (tags && tags.length > 0) {
    const normalizedTags = tags.map(normalizeToken);
    results = results.filter((q) =>
      normalizedTags.some((tag) => (q.tags ?? []).some((t) => normalizeToken(t).includes(tag)))
    );
  }
  if (text) {
    const normalized = normalizeToken(text);
    results = results.filter((q) => q.searchText.includes(normalized));
  }

  return results;
}

// Sugestoes de busca baseadas no historico e conteudo do repositorio
export function buildSearchSuggestions(repository, partialQuery) {
  if (!partialQuery || partialQuery.length < 2) return [];
  const normalized = normalizeToken(partialQuery);
  const suggestions = new Set();

  // Sugestoes de temas
  repository.themes?.forEach((theme) => {
    if (normalizeToken(theme.label).includes(normalized)) {
      suggestions.add(theme.label);
    }
  });

  // Sugestoes de materias
  repository.subjects?.forEach((subject) => {
    if (normalizeToken(subject.label).includes(normalized)) {
      suggestions.add(subject.label);
    }
  });

  // Sugestoes de provas
  repository.exams?.forEach((exam) => {
    if (normalizeToken(exam.label).includes(normalized)) {
      suggestions.add(exam.shortLabel ?? exam.label);
    }
  });

  return Array.from(suggestions).slice(0, 8);
}
