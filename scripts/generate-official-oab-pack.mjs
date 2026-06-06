import fs from "node:fs/promises";
import path from "node:path";
import { PDFParse } from "pdf-parse";

function normalizeWhitespace(value) {
  return String(value ?? "")
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function slugify(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function readJson(filePath) {
  const content = await fs.readFile(filePath, "utf8");
  return JSON.parse(content);
}

async function readBinaryFromSource(source) {
  if (/^https?:\/\//i.test(source)) {
    const response = await fetch(source);
    if (!response.ok) {
      throw new Error(`Falha ao baixar ${source}: ${response.status}`);
    }
    return Buffer.from(await response.arrayBuffer());
  }

  return fs.readFile(source);
}

function sanitizePdfText(rawText) {
  return normalizeWhitespace(
    rawText
      .replace(/Tipo .*? P[aá]gina \d+/gi, "")
      .replace(/O EXAME DE ORDEM UNIFICADO/gi, "")
      .replace(/INFORMA[CÇ][OÕ]ES GERAIS/gi, "")
      .replace(/Qualquer semelhança nominal.*$/gim, "")
  );
}

function parseAnswerKey(text, expectedCount) {
  const answerMap = new Map();
  const normalizedLines = text
    .toUpperCase()
    .replace(/\r/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const type1Index = normalizedLines.findIndex((line) => line.includes("PROVA TIPO 1"));
  if (type1Index !== -1) {
    for (let index = type1Index + 1; index < normalizedLines.length; index += 2) {
      const numbersLine = normalizedLines[index];
      const answersLine = normalizedLines[index + 1];

      if (!numbersLine || !answersLine || numbersLine.includes("PROVA TIPO")) {
        break;
      }

      const numbers = numbersLine.match(/\d+/g)?.map(Number) ?? [];
      const answers = answersLine.match(/[A-E]/g) ?? [];

      if (numbers.length && numbers.length === answers.length) {
        numbers.forEach((number, position) => {
          if (!answerMap.has(number)) {
            answerMap.set(number, answers[position].toLowerCase());
          }
        });
      }
    }
  }

  if (!answerMap.size) {
    const matches = [...text.toUpperCase().matchAll(/\b([1-9]|[1-7]\d|80)\s*[-.:]?\s*([A-E])\b/g)];
    matches.forEach((match) => {
      const number = Number(match[1]);
      if (!answerMap.has(number)) {
        answerMap.set(number, match[2].toLowerCase());
      }
    });
  }

  if (answerMap.size < Math.min(expectedCount, 40)) {
    throw new Error(`Nao foi possivel extrair um gabarito confiavel. Apenas ${answerMap.size} respostas encontradas.`);
  }

  for (let number = 1; number <= expectedCount; number += 1) {
    if (!answerMap.has(number)) {
      throw new Error(`Gabarito incompleto: questao ${number} nao encontrada no PDF.`);
    }
  }

  return answerMap;
}

function extractQuestionSegments(text) {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !/^\d{1,2}o EXAME DO ORDEM UNIFICADO$/i.test(line))
    .filter((line) => !/^Tipo .*? P[aá]gina \d+$/i.test(line));

  const segments = [];
  let current = null;

  for (const line of lines) {
    const questionStart = line.match(/^([1-9]|[1-7]\d|80)$/);
    if (questionStart) {
      if (current) {
        segments.push(current);
      }
      current = {
        number: Number(questionStart[1]),
        lines: []
      };
      continue;
    }

    if (current) {
      current.lines.push(line);
    }
  }

  if (current) {
    segments.push(current);
  }

  return segments;
}

function parseAlternatives(lines) {
  const alternatives = [];
  let current = null;

  lines.forEach((line) => {
    const match = line.match(/^\(([A-E])\)\s*(.*)$/i);
    if (match) {
      if (current) {
        alternatives.push(current);
      }
      current = {
        id: match[1].toLowerCase(),
        text: match[2].trim()
      };
      return;
    }

    if (current) {
      current.text = normalizeWhitespace(`${current.text} ${line}`);
    }
  });

  if (current) {
    alternatives.push(current);
  }

  return alternatives;
}

function parseQuestionSegment(segment, context) {
  const firstAlternativeIndex = segment.lines.findIndex((line) => /^\([A-E]\)/i.test(line));
  if (firstAlternativeIndex === -1) {
    return null;
  }

  const statementLines = segment.lines.slice(0, firstAlternativeIndex);
  const alternativeLines = segment.lines.slice(firstAlternativeIndex);
  const alternatives = parseAlternatives(alternativeLines);

  if (alternatives.length < 4) {
    return null;
  }

  const correctAlternativeId = context.answerKey.get(segment.number);
  if (!correctAlternativeId) {
    return null;
  }

  return {
    id: `q-oab${context.edition}-${String(segment.number).padStart(3, "0")}`,
    statement: normalizeWhitespace(statementLines.join(" ")),
    explanation: "",
    support: "",
    lawText: "",
    subject: "A classificar",
    theme: "A classificar",
    exam: `OAB ${context.edition}`,
    year: context.year,
    phase: context.phase,
    questionNumber: segment.number,
    difficulty: "medium",
    tags: ["oab", "prova-oficial", `oab-${context.edition}`],
    relatedArticleIds: [],
    alternatives: alternatives.map((alternative) => ({
      ...alternative,
      correct: alternative.id === correctAlternativeId
    }))
  };
}

function buildOfficialExamDefinition(questions, context) {
  return {
    id: `oab-${context.edition}-${slugify(context.phase)}`,
    exam: `OAB ${context.edition}`,
    label: `OAB ${context.edition}`,
    year: context.year,
    phase: context.phase,
    durationMinutes: context.durationMinutes,
    questions: questions
      .map((question) => ({
        questionId: question.id,
        number: question.questionNumber
      }))
      .sort((left, right) => left.number - right.number)
  };
}

async function generateOfficialPack(entry) {
  const [bookletBuffer, answerKeyBuffer] = await Promise.all([
    readBinaryFromSource(entry.sourceUrls.bookletPdf),
    readBinaryFromSource(entry.sourceUrls.answerKeyPdf)
  ]);

  const bookletParser = new PDFParse({ data: bookletBuffer });
  const answerKeyParser = new PDFParse({ data: answerKeyBuffer });
  const [bookletData, answerKeyData] = await Promise.all([
    bookletParser.getText(),
    answerKeyParser.getText()
  ]);
  await bookletParser.destroy();
  await answerKeyParser.destroy();

  const bookletText = sanitizePdfText(bookletData.text);
  const answerKeyText = sanitizePdfText(answerKeyData.text);
  const answerKey = parseAnswerKey(answerKeyText, entry.questionCount);
  const segments = extractQuestionSegments(bookletText);
  const questions = segments
    .map((segment) =>
      parseQuestionSegment(segment, {
        edition: entry.edition,
        year: entry.year,
        phase: entry.phase,
        durationMinutes: entry.durationMinutes,
        answerKey
      })
    )
    .filter(Boolean)
    .sort((left, right) => left.questionNumber - right.questionNumber);

  if (questions.length < entry.questionCount) {
    throw new Error(
      `Parser extraiu ${questions.length}/${entry.questionCount} questoes para OAB ${entry.edition}. Revise o PDF ou ajuste o parser.`
    );
  }

  const officialExam = buildOfficialExamDefinition(questions, entry);

  return {
    packId: `oab-${entry.edition}-${slugify(entry.phase)}-official-pack`,
    packName: `OAB ${entry.edition} - ${entry.phase}`,
    version: "1.0.0",
    metadata: {
      sourceType: "official-oab",
      edition: entry.edition,
      year: entry.year,
      phase: entry.phase,
      questionCount: entry.questionCount,
      parser: "generate-official-oab-pack.mjs",
      sourceUrls: entry.sourceUrls,
      contentStatus: "draft"
    },
    officialExams: [officialExam],
    questions
  };
}

async function main() {
  const manifestPath = process.argv[2];
  const outputDir = process.argv[3] ?? path.resolve(process.cwd(), "public", "official-packs");

  if (!manifestPath) {
    throw new Error("Uso: node scripts/generate-official-oab-pack.mjs <manifest.json> [outputDir]");
  }

  const manifest = await readJson(path.resolve(process.cwd(), manifestPath));
  await fs.mkdir(outputDir, { recursive: true });

  const generated = [];
  for (const entry of manifest.entries ?? []) {
    const pack = await generateOfficialPack(entry);
    const filename = `${pack.packId}.json`;
    await fs.writeFile(path.join(outputDir, filename), JSON.stringify(pack, null, 2), "utf8");
    generated.push({
      id: entry.id,
      output: filename,
      questions: pack.questions.length
    });
  }

  const batchManifest = {
    batchId: manifest.batchId ?? `official-oab-${Date.now()}`,
    batchName: manifest.batchName ?? "Lote oficial OAB",
    generatedAt: new Date().toISOString(),
    packages: generated
  };

  await fs.writeFile(
    path.join(outputDir, "manifest.generated.json"),
    JSON.stringify(batchManifest, null, 2),
    "utf8"
  );

  process.stdout.write(JSON.stringify(batchManifest, null, 2));
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
