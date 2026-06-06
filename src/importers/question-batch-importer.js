import { z } from "zod";
import { parseQuestionSource } from "./source-adapters";

const questionSourceSchema = z.object({
  kind: z.enum(["json", "structured-json", "pdf"]),
  label: z.string().min(1),
  packId: z.string().optional(),
  payload: z.any()
});

const questionBatchSchema = z.object({
  batchId: z.string().optional(),
  batchName: z.string().default("Lote oficial OAB"),
  sources: z.array(questionSourceSchema).min(1)
});

function mergeUniqueById(items) {
  return Array.from(new Map(items.map((item) => [item.id, item])).values());
}

export function parseQuestionBatchPayload(rawPayload) {
  const parsed = questionBatchSchema.parse(rawPayload);
  const packs = parsed.sources.map((source) => parseQuestionSource(source));

  return {
    batchId: parsed.batchId ?? `batch-${Date.now()}`,
    batchName: parsed.batchName,
    packs,
    merged: {
      subjects: mergeUniqueById(packs.flatMap((pack) => pack.content.subjects ?? [])),
      themes: mergeUniqueById(packs.flatMap((pack) => pack.content.themes ?? [])),
      exams: mergeUniqueById(packs.flatMap((pack) => pack.content.exams ?? [])),
      questions: mergeUniqueById(packs.flatMap((pack) => pack.content.questions ?? [])),
      officialExams: mergeUniqueById(packs.flatMap((pack) => pack.content.officialExams ?? []))
    }
  };
}
