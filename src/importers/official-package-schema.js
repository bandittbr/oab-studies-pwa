import { z } from "zod";

const officialPackageQuestionSchema = z.object({
  id: z.string().min(1),
  statement: z.string().min(1),
  explanation: z.string().default(""),
  support: z.string().default(""),
  lawText: z.string().default(""),
  subject: z.string().min(1),
  theme: z.string().min(1),
  exam: z.string().min(1),
  year: z.coerce.number().int().min(1990).max(2100),
  phase: z.string().min(1),
  questionNumber: z.coerce.number().int().min(1),
  difficulty: z.enum(["easy", "medium", "hard"]).default("medium"),
  tags: z.array(z.string()).default([]),
  relatedArticleIds: z.array(z.string()).default([]),
  alternatives: z
    .array(
      z.object({
        id: z.string().min(1),
        text: z.string().min(1),
        correct: z.boolean().default(false)
      })
    )
    .min(2)
});

const officialExamSchema = z.object({
  id: z.string().min(1),
  exam: z.string().min(1),
  label: z.string().min(1),
  year: z.coerce.number().int().min(1990).max(2100),
  phase: z.string().min(1),
  durationMinutes: z.coerce.number().int().min(60).max(600),
  questions: z
    .array(
      z.object({
        questionId: z.string().min(1),
        number: z.coerce.number().int().min(1)
      })
    )
    .min(1)
});

export const officialPackageEnvelopeSchema = z.object({
  packId: z.string().min(1),
  packName: z.string().min(1),
  version: z.string().min(1),
  metadata: z.object({
    sourceType: z.literal("official-oab"),
    edition: z.coerce.number().int().min(1),
    year: z.coerce.number().int().min(1990).max(2100),
    phase: z.string().min(1),
    questionCount: z.coerce.number().int().min(1),
    parser: z.string().min(1),
    sourceUrls: z
      .object({
        bookletPdf: z.string().url(),
        answerKeyPdf: z.string().url().optional()
      })
      .optional(),
    contentStatus: z.enum(["draft", "reviewed", "published"]).default("draft")
  }),
  officialExams: z.array(officialExamSchema).min(1),
  questions: z.array(officialPackageQuestionSchema).min(1)
});

export function validateOfficialPackageEnvelope(rawPayload) {
  return officialPackageEnvelopeSchema.parse(rawPayload);
}
