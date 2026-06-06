import { z } from "zod";
import { slugify, uniqueBy, ensureArray, normalizeText } from "./shared";
import { validateOfficialPackageEnvelope } from "./official-package-schema";

const alternativeSchema = z.object({
  id: z.string().optional(),
  text: z.string().min(1),
  correct: z.boolean().optional()
});

const rawQuestionSchema = z.object({
  id: z.string().optional(),
  statement: z.string().min(1),
  explanation: z.string().default(""),
  support: z.string().default(""),
  lawText: z.string().optional(),
  subject: z.string().min(1),
  theme: z.string().min(1),
  exam: z.string().min(1),
  year: z.coerce.number().int().min(1990).max(2100),
  phase: z.string().default("1a fase"),
  questionNumber: z.coerce.number().int().min(1).optional(),
  difficulty: z.enum(["easy", "medium", "hard"]).default("medium"),
  tags: z.array(z.string()).default([]),
  relatedArticleIds: z.array(z.string()).default([]),
  alternatives: z.array(alternativeSchema).min(2),
  correctAlternativeId: z.string().optional()
});

const questionImportSchema = z.object({
  packId: z.string().optional(),
  packName: z.string().default("Pacote de questoes"),
  version: z.string().default("1.0.0"),
  metadata: z.record(z.any()).optional(),
  officialExams: z
    .array(
      z.object({
        id: z.string().optional(),
        exam: z.string().min(1),
        label: z.string().min(1),
        year: z.coerce.number().int().min(1990).max(2100),
        phase: z.string().default("1a fase"),
        durationMinutes: z.coerce.number().int().min(60).max(600).default(300),
        questions: z
          .array(
            z.object({
              questionId: z.string().min(1),
              number: z.coerce.number().int().min(1)
            })
          )
          .min(1)
      })
    )
    .default([]),
  questions: z.array(rawQuestionSchema).min(1)
});

function normalizeSubjectMeta(questions) {
  return uniqueBy(
    questions.map((question) => ({
      id: slugify(question.subject),
      name: question.subject,
      label: question.subject,
      description: `Conteudo importado para ${question.subject}.`,
      accent: "from-sky-300/25 via-cyan-300/10 to-transparent"
    })),
    (subject) => subject.id
  );
}

function normalizeThemeMeta(questions, subjectsByLabel) {
  return uniqueBy(
    questions.map((question) => ({
      id: `${subjectsByLabel[question.subject]}-${slugify(question.theme)}`,
      subjectId: subjectsByLabel[question.subject],
      label: question.theme
    })),
    (theme) => theme.id
  );
}

function normalizeExamMeta(questions) {
  return uniqueBy(
    questions.map((question) => ({
      id: slugify(question.exam),
      label: question.exam,
      shortLabel: question.exam,
      year: question.year
    })),
    (exam) => exam.id
  );
}

function normalizeQuestion(question, index, dictionaries) {
  const normalizedAlternatives = question.alternatives.map((alternative, alternativeIndex) => ({
    id: alternative.id ?? String.fromCharCode(97 + alternativeIndex),
    text: normalizeText(alternative.text),
    correct: false
  }));

  const declaredCorrectId =
    question.correctAlternativeId ??
    question.alternatives.find((alternative) => alternative.correct)?.id ??
    normalizedAlternatives.find((_, alternativeIndex) => question.alternatives[alternativeIndex]?.correct)?.id;

  if (!declaredCorrectId) {
    throw new Error(`Questao ${question.id ?? index + 1} sem alternativa correta definida.`);
  }

  const alternatives = normalizedAlternatives.map((alternative) => ({
    ...alternative,
    correct: alternative.id === declaredCorrectId
  }));

  const subjectId = dictionaries.subjectsByLabel[question.subject];
  const themeId = `${subjectId}-${slugify(question.theme)}`;
  const examId = slugify(question.exam);

  return {
    id: question.id ?? `imported-${subjectId}-${themeId}-${index + 1}`,
    subjectId,
    themeId,
    examId,
    year: question.year,
    phase: question.phase,
    questionNumber: question.questionNumber ?? null,
    difficulty: question.difficulty,
    statement: normalizeText(question.statement),
    explanation: normalizeText(question.explanation),
    support: normalizeText(question.support),
    lawText: normalizeText(question.lawText ?? ""),
    tags: ensureArray(question.tags).map((tag) => normalizeText(tag)).filter(Boolean),
    relatedArticleIds: question.relatedArticleIds,
    alternatives
  };
}

export function parseQuestionImportPayload(rawPayload) {
  if (rawPayload?.metadata?.sourceType === "official-oab") {
    validateOfficialPackageEnvelope(rawPayload);
  }

  const parsed = questionImportSchema.parse(rawPayload);
  const subjects = normalizeSubjectMeta(parsed.questions);
  const subjectsByLabel = Object.fromEntries(subjects.map((subject) => [subject.label, subject.id]));
  const themes = normalizeThemeMeta(parsed.questions, subjectsByLabel);
  const exams = normalizeExamMeta(parsed.questions);

  const normalizedQuestions = parsed.questions.map((question, index) =>
    normalizeQuestion(question, index, { subjectsByLabel })
  );

  const questionIdSet = new Set(normalizedQuestions.map((question) => question.id));
  const officialExams = parsed.officialExams.map((officialExam, index) => {
    officialExam.questions.forEach((item) => {
      if (!questionIdSet.has(item.questionId)) {
        throw new Error(`Prova oficial referencia questao inexistente: ${item.questionId}.`);
      }
    });

    return {
      id: officialExam.id ?? `official-${slugify(officialExam.label)}-${index + 1}`,
      examId: slugify(officialExam.exam),
      label: officialExam.label,
      fullLabel: `${officialExam.label} - ${officialExam.phase ?? "1a fase"}`,
      year: officialExam.year,
      phase: officialExam.phase ?? "1a fase",
      durationMinutes: officialExam.durationMinutes,
      questionOrder: officialExam.questions
        .map((item) => ({ number: item.number, questionId: item.questionId }))
        .sort((left, right) => left.number - right.number)
    };
  });

  return {
    packId: parsed.packId ?? `question-pack-${slugify(parsed.packName)}`,
    type: "questions",
    version: parsed.version,
    packName: parsed.packName,
    metadata: parsed.metadata ?? {},
    content: {
      subjects,
      themes,
      exams,
      questions: normalizedQuestions,
      officialExams
    }
  };
}
