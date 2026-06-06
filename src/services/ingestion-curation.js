function hasUniqueAlternativeTexts(alternatives) {
  const normalized = alternatives.map((alternative) => alternative.text.trim().toLowerCase());
  return new Set(normalized).size === normalized.length;
}

function normalizeStatement(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Jaccard similarity entre dois conjuntos de tokens
function jaccardSimilarity(textA, textB) {
  const tokensA = new Set(normalizeStatement(textA).split(/\s+/).filter((t) => t.length >= 3));
  const tokensB = new Set(normalizeStatement(textB).split(/\s+/).filter((t) => t.length >= 3));
  if (tokensA.size === 0 && tokensB.size === 0) return 1;
  if (tokensA.size === 0 || tokensB.size === 0) return 0;
  const intersection = new Set([...tokensA].filter((token) => tokensB.has(token)));
  const union = new Set([...tokensA, ...tokensB]);
  return intersection.size / union.size;
}

// Pontuacao de completude de uma questao (0-100)
export function scoreQuestionCompleteness(question) {
  let score = 0;
  const weights = {
    statement: 25,
    explanation: 15,
    support: 15,
    alternatives: 20,
    subject: 10,
    theme: 5,
    relatedArticleIds: 5,
    tags: 5
  };

  if (question.statement?.trim().length > 20) score += weights.statement;
  else if (question.statement?.trim().length > 5) score += Math.round(weights.statement * 0.5);

  if (question.explanation?.trim().length > 30) score += weights.explanation;
  else if (question.explanation?.trim().length > 5) score += Math.round(weights.explanation * 0.5);

  if (question.support?.trim().length > 5) score += weights.support;

  const correctCount = (question.alternatives ?? []).filter((alt) => alt.correct).length;
  const hasMinAlternatives = (question.alternatives ?? []).length >= 4;
  if (hasMinAlternatives && correctCount === 1) score += weights.alternatives;
  else if (hasMinAlternatives) score += Math.round(weights.alternatives * 0.5);

  if (question.subject?.trim()) score += weights.subject;
  if (question.theme?.trim()) score += weights.theme;
  if ((question.relatedArticleIds ?? []).length > 0) score += weights.relatedArticleIds;
  if ((question.tags ?? []).length > 0) score += weights.tags;

  return Math.min(score, 100);
}

// Validacao de campos obrigatorios de alternativas
function validateAlternatives(question) {
  const issues = [];
  const alternatives = question.alternatives ?? [];

  alternatives.forEach((alt, index) => {
    if (!alt.id) {
      issues.push({
        type: "alternative-missing-id",
        questionId: question.id,
        altIndex: index,
        message: `Questao ${question.id}: alternativa ${index + 1} sem ID.`
      });
    }
    if (!alt.text?.trim()) {
      issues.push({
        type: "alternative-missing-text",
        questionId: question.id,
        altIndex: index,
        message: `Questao ${question.id}: alternativa ${index + 1} sem texto.`
      });
    }
  });

  return issues;
}

export function buildIngestionReport({ pack, existingRepository }) {
  const questions = pack.content.questions ?? [];
  const officialExams = pack.content.officialExams ?? [];
  const issues = [];
  const warnings = [];
  const duplicates = [];
  const nearDuplicates = [];
  const conflicts = [];
  const completenessScores = [];

  const existingStatementMap = new Map(
    existingRepository.questions.map((question) => [normalizeStatement(question.statement), question.id])
  );
  const localStatementMap = new Map();
  const localQuestionIds = new Set();
  const questionById = new Map(questions.map((question) => [question.id, question]));

  // Indice de statements existentes para similaridade fuzzy
  const existingStatements = existingRepository.questions.map((q) => ({
    id: q.id,
    normalized: normalizeStatement(q.statement)
  }));

  questions.forEach((question) => {
    // ID duplicado no lote
    if (localQuestionIds.has(question.id)) {
      issues.push({
        type: "duplicated-question-id",
        questionId: question.id,
        message: `Questao ${question.id} possui id repetido no mesmo pacote.`
      });
    }
    localQuestionIds.add(question.id);

    // Enunciado ausente
    if (!question.statement?.trim()) {
      issues.push({
        type: "missing-statement",
        questionId: question.id,
        message: `Questao ${question.id} esta sem enunciado.`
      });
    }

    // Minimo de 4 alternativas
    if ((question.alternatives ?? []).length < 4) {
      issues.push({
        type: "missing-alternatives",
        questionId: question.id,
        message: `Questao ${question.id} possui menos de 4 alternativas.`
      });
    }

    // Validacao interna das alternativas
    issues.push(...validateAlternatives(question));

    // Exatamente uma alternativa correta
    const correctAlternatives = (question.alternatives ?? []).filter((alt) => alt.correct);
    if (correctAlternatives.length !== 1) {
      issues.push({
        type: "invalid-correct-answer",
        questionId: question.id,
        message: `Questao ${question.id} deve ter exatamente uma alternativa correta (encontradas: ${correctAlternatives.length}).`
      });
    }

    // Textos de alternativas unicos
    if (!hasUniqueAlternativeTexts(question.alternatives ?? [])) {
      warnings.push({
        type: "duplicated-alternative-text",
        questionId: question.id,
        message: `Questao ${question.id} possui alternativas com texto repetido.`
      });
    }

    // Numero oficial invalido
    if (question.questionNumber !== null && question.questionNumber !== undefined && question.questionNumber < 1) {
      issues.push({
        type: "invalid-question-number",
        questionId: question.id,
        message: `Questao ${question.id} possui numero oficial invalido.`
      });
    }

    // Materia e tema ausentes
    if (!question.subjectId && !question.subject) {
      warnings.push({
        type: "missing-subject",
        questionId: question.id,
        message: `Questao ${question.id} sem materia definida.`
      });
    }
    if (!question.themeId && !question.theme) {
      warnings.push({
        type: "missing-theme",
        questionId: question.id,
        message: `Questao ${question.id} sem tema definido.`
      });
    }

    // Explicacao ausente
    if (!question.explanation?.trim()) {
      warnings.push({
        type: "missing-explanation",
        questionId: question.id,
        message: `Questao ${question.id} sem explicacao cadastrada.`
      });
    }

    // Fundamento legal ausente
    if (!question.support?.trim()) {
      warnings.push({
        type: "missing-support",
        questionId: question.id,
        message: `Questao ${question.id} sem fundamento legal cadastrado.`
      });
    }

    // Pontuacao de completude
    const completeness = scoreQuestionCompleteness(question);
    completenessScores.push({ questionId: question.id, score: completeness });
    if (completeness < 60) {
      warnings.push({
        type: "low-completeness",
        questionId: question.id,
        score: completeness,
        message: `Questao ${question.id} com completude baixa (${completeness}/100).`
      });
    }

    // Duplicata exata
    const key = normalizeStatement(question.statement);
    if (existingStatementMap.has(key)) {
      duplicates.push({
        questionId: question.id,
        duplicateOf: existingStatementMap.get(key),
        similarity: 1.0,
        type: "exact",
        message: `Questao ${question.id} e duplicata exata de ${existingStatementMap.get(key)}.`
      });
    } else if (localStatementMap.has(key)) {
      duplicates.push({
        questionId: question.id,
        duplicateOf: localStatementMap.get(key),
        similarity: 1.0,
        type: "exact",
        message: `Questao ${question.id} e duplicata exata de ${localStatementMap.get(key)} no mesmo lote.`
      });
    } else {
      localStatementMap.set(key, question.id);

      // Similaridade fuzzy com questoes existentes (Jaccard > 0.75)
      for (const existing of existingStatements) {
        const sim = jaccardSimilarity(question.statement, existing.normalized);
        if (sim >= 0.75 && sim < 1.0) {
          nearDuplicates.push({
            questionId: question.id,
            similarTo: existing.id,
            similarity: Math.round(sim * 100) / 100,
            type: "near-duplicate",
            message: `Questao ${question.id} e muito similar a ${existing.id} (Jaccard=${(sim * 100).toFixed(0)}%).`
          });
          break;
        }
      }
    }
  });

  // Validacao das provas oficiais
  officialExams.forEach((officialExam) => {
    const numberMap = new Map();
    const numbers = officialExam.questionOrder.map((item) => item.number).sort((a, b) => a - b);

    officialExam.questionOrder.forEach((item) => {
      if (!questionById.has(item.questionId)) {
        issues.push({
          type: "unknown-question-reference",
          examId: officialExam.id,
          message: `Prova ${officialExam.label} referencia questao ausente: ${item.questionId}.`
        });
      }

      if (numberMap.has(item.number)) {
        issues.push({
          type: "duplicated-question-number",
          examId: officialExam.id,
          message: `Prova ${officialExam.label} possui numero oficial repetido: ${item.number}.`
        });
      }
      numberMap.set(item.number, item.questionId);

      const question = questionById.get(item.questionId);
      if (question?.questionNumber && question.questionNumber !== item.number) {
        conflicts.push({
          type: "question-number-conflict",
          examId: officialExam.id,
          questionId: item.questionId,
          message: `Questao ${item.questionId} possui numero ${question.questionNumber}, mas a prova ${officialExam.label} a posiciona como ${item.number}.`
        });
      }
    });

    numbers.forEach((number, index) => {
      if (number !== index + 1) {
        issues.push({
          type: "invalid-official-order",
          examId: officialExam.id,
          message: `Prova ${officialExam.label} possui quebra de ordem na questao ${number}.`
        });
      }
    });

    if (officialExam.questionOrder.length < 80) {
      warnings.push({
        type: "partial-official-exam",
        examId: officialExam.id,
        message: `Prova ${officialExam.label} possui apenas ${officialExam.questionOrder.length} questoes vinculadas (esperado: 80).`
      });
    }
  });

  const avgCompleteness =
    completenessScores.length > 0
      ? Math.round(completenessScores.reduce((sum, s) => sum + s.score, 0) / completenessScores.length)
      : 0;

  return {
    packId: pack.packId,
    packName: pack.packName,
    importedAt: new Date().toISOString(),
    summary: {
      questions: questions.length,
      officialExams: officialExams.length,
      issues: issues.length,
      warnings: warnings.length,
      duplicates: duplicates.length,
      nearDuplicates: nearDuplicates.length,
      conflicts: conflicts.length,
      avgCompleteness,
      canImport: issues.length === 0
    },
    issues,
    warnings,
    duplicates,
    nearDuplicates,
    conflicts,
    completenessScores
  };
}
