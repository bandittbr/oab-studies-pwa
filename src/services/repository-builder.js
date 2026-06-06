import { difficultyScale, exams as seedExams, personalDifficultyScale, subjects as seedSubjects, themes as seedThemes } from "../domain/content/catalog-metadata";
import { officialExams as seedOfficialExams } from "../domain/content/official-exams";
import { lawArticles as seedLawArticles, lawChapters as seedLawChapters, lawCodes as seedLawCodes } from "../domain/content/law-content";
import { questionSeed } from "../domain/content/questions-seed";

function keyBy(items) {
  return Object.fromEntries(items.map((item) => [item.id, item]));
}

function uniqueMerge(baseItems, extraItems) {
  return Array.from(new Map([...baseItems, ...extraItems].map((item) => [item.id, item])).values());
}

function normalizeQuestionRecord(question, indexes, officialExamsByQuestionId) {
  const subject = indexes.subjectById[question.subjectId];
  const theme = indexes.themeById[question.themeId];
  const exam = indexes.examById[question.examId];
  const officialExamRefs = officialExamsByQuestionId[question.id] ?? [];
  const relatedArticles = (question.relatedArticleIds ?? [])
    .map((id) => indexes.lawArticleById[id])
    .filter(Boolean);

  const searchSource = [
    question.statement,
    question.explanation,
    question.support,
    question.lawText,
    ...(question.tags ?? []),
    subject?.label,
    theme?.label,
    exam?.label,
    ...officialExamRefs.map(
      (officialExam) =>
        `${officialExam.label} ${officialExam.year} ${officialExam.phase ?? ""} questao ${question.questionNumber ?? ""}`
    ),
    ...question.alternatives.map((alternative) => alternative.text),
    ...relatedArticles.map((article) => `${article.articleNumber} ${article.title} ${article.text}`)
  ];

  return {
    ...question,
    tags: question.tags ?? [],
    subject,
    theme,
    exam,
    officialExams: officialExamRefs,
    difficultyMeta: indexes.difficultyById[question.difficulty],
    relatedArticles,
    lawText:
      question.lawText ||
      relatedArticles.map((article) => `${article.articleNumber}: ${article.text}`).join("\n\n"),
    searchText: searchSource.join(" ").toLowerCase()
  };
}

function buildSearchIndex(questions, lawArticles) {
  const tokenMap = new Map();

  function indexItem(id, type, text, field, weight = 1) {
    const tokens = String(text)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(/[^a-z0-9]+/)
      .filter((token) => token.length >= 2);

    tokens.forEach((token) => {
      if (!tokenMap.has(token)) {
        tokenMap.set(token, []);
      }
      tokenMap.get(token).push({ id, type, field, weight });
    });
  }

  questions.forEach((question) => {
    indexItem(question.id, "question", question.statement, "statement", 5);
    indexItem(question.id, "question", question.explanation, "explanation", 2);
    indexItem(question.id, "question", question.support, "support", 4);
    indexItem(question.id, "question", question.lawText, "lawText", 3);
    indexItem(question.id, "question", question.subject?.label ?? "", "subject", 3);
    indexItem(question.id, "question", question.theme?.label ?? "", "theme", 3);
    indexItem(question.id, "question", question.exam?.label ?? "", "exam", 3);
    indexItem(
      question.id,
      "question",
      question.officialExams.map((officialExam) => officialExam.label).join(" "),
      "officialExam",
      3
    );
    indexItem(question.id, "question", question.alternatives.map((alternative) => alternative.text).join(" "), "alternatives", 1);
    indexItem(question.id, "question", (question.tags ?? []).join(" "), "tags", 2);
    indexItem(question.id, "question", `questao ${question.questionNumber ?? ""}`, "questionNumber", 2);
  });

  lawArticles.forEach((article) => {
    indexItem(article.id, "article", article.articleNumber, "articleNumber", 6);
    indexItem(article.id, "article", article.title, "title", 4);
    indexItem(article.id, "article", article.text, "text", 3);
    indexItem(article.id, "article", article.keywords.join(" "), "keywords", 4);
  });

  return {
    tokenMap,
    tokenCount: tokenMap.size
  };
}

export function buildRepository(contentPacks = []) {
  const importedQuestionPacks = contentPacks.filter((pack) => pack.type === "questions");
  const importedLawPacks = contentPacks.filter((pack) => pack.type === "laws");

  const subjects = uniqueMerge(seedSubjects, importedQuestionPacks.flatMap((pack) => pack.content.subjects ?? []));
  const themes = uniqueMerge(seedThemes, importedQuestionPacks.flatMap((pack) => pack.content.themes ?? []));
  const exams = uniqueMerge(seedExams, importedQuestionPacks.flatMap((pack) => pack.content.exams ?? []));
  const officialExams = uniqueMerge(
    seedOfficialExams,
    importedQuestionPacks.flatMap((pack) => pack.content.officialExams ?? [])
  );
  const lawCodes = uniqueMerge(seedLawCodes, importedLawPacks.flatMap((pack) => pack.content.lawCodes ?? []));
  const lawChapters = uniqueMerge(seedLawChapters, importedLawPacks.flatMap((pack) => pack.content.lawChapters ?? []));
  const lawArticles = uniqueMerge(seedLawArticles, importedLawPacks.flatMap((pack) => pack.content.lawArticles ?? []));

  const officialExamsByQuestionId = officialExams.reduce((accumulator, officialExam) => {
    officialExam.questionOrder.forEach((item) => {
      if (!accumulator[item.questionId]) {
        accumulator[item.questionId] = [];
      }
      accumulator[item.questionId].push(officialExam);
    });
    return accumulator;
  }, {});

  const indexes = {
    subjectById: keyBy(subjects),
    themeById: keyBy(themes),
    examById: keyBy(exams),
    lawCodeById: keyBy(lawCodes),
    lawArticleById: keyBy(lawArticles),
    difficultyById: keyBy(difficultyScale)
  };

  const questions = [...questionSeed, ...importedQuestionPacks.flatMap((pack) => pack.content.questions ?? [])].map((question) =>
    normalizeQuestionRecord(question, indexes, officialExamsByQuestionId)
  );

  indexes.questionsById = keyBy(questions);
  indexes.questionsByExamId = exams.reduce((accumulator, exam) => {
    accumulator[exam.id] = questions.filter((question) => question.examId === exam.id);
    return accumulator;
  }, {});
  indexes.questionsBySubjectId = subjects.reduce((accumulator, subject) => {
    accumulator[subject.id] = questions.filter((question) => question.subjectId === subject.id);
    return accumulator;
  }, {});
  indexes.questionsByOfficialExamId = officialExams.reduce((accumulator, officialExam) => {
    accumulator[officialExam.id] = officialExam.questionOrder
      .map((item) => indexes.questionsById[item.questionId])
      .filter(Boolean);
    return accumulator;
  }, {});
  indexes.officialExamById = keyBy(
    officialExams.map((officialExam) => ({
      ...officialExam,
      exam: indexes.examById[officialExam.examId],
      questions: officialExam.questionOrder
        .map((item) => ({
          ...item,
          question: indexes.questionsById[item.questionId]
        }))
        .filter((item) => item.question)
    }))
  );

  const searchIndex = buildSearchIndex(questions, lawArticles);

  return {
    subjects,
    themes,
    exams,
    officialExams: Object.values(indexes.officialExamById).sort((left, right) => right.year - left.year),
    difficultyScale,
    personalDifficultyScale,
    lawCodes,
    lawChapters,
    lawArticles,
    questions,
    contentPacks,
    searchIndex,
    indexes
  };
}
