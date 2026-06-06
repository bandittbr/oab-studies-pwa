import { parseQuestionImportPayload } from "./question-importer";

function parseJsonSource(source) {
  if (typeof source.payload === "string") {
    return JSON.parse(source.payload);
  }

  return source.payload;
}

function parseStructuredSource(source) {
  return source.payload;
}

function parsePdfPlaceholderSource(source) {
  return {
    packId: source.packId ?? `pdf-placeholder-${Date.now()}`,
    type: "question-source-placeholder",
    packName: source.label ?? "PDF placeholder",
    version: "1.0.0",
    metadata: {
      parser: "pdf-placeholder",
      note: "Fonte PDF registrada para integracao futura."
    },
    content: {
      subjects: [],
      themes: [],
      exams: [],
      questions: [],
      officialExams: []
    }
  };
}

export function parseQuestionSource(source) {
  switch (source.kind) {
    case "json":
      return parseQuestionImportPayload(parseJsonSource(source));
    case "structured-json":
      return parseQuestionImportPayload(parseStructuredSource(source));
    case "pdf":
      return parsePdfPlaceholderSource(source);
    default:
      throw new Error(`Fonte de importacao nao suportada: ${source.kind}.`);
  }
}
