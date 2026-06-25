/**
 * renderer.mjs
 * Renderiza a questão no template HTML via Puppeteer e gera um PNG 1080×1080.
 */

import puppeteer from 'puppeteer';
import { readFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir      = dirname(fileURLToPath(import.meta.url));
const ROOT       = join(__dir, '..');
const TEMPLATE   = join(ROOT, 'template', 'question.html');
const OUTPUT_DIR = join(ROOT, 'output');

/**
 * @param {object} question  — objeto do questions.json
 * @param {string} [outPath] — caminho para salvar o PNG (opcional)
 * @returns {string} caminho do arquivo gerado
 */
export async function renderQuestion(question, outPath) {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const fileName = outPath ?? join(OUTPUT_DIR, `${question.id}.png`);
  const html     = readFileSync(TEMPLATE, 'utf-8');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });

    await page.setContent(html, { waitUntil: 'networkidle0' });

    await page.evaluate((data) => {
      window.renderPost(data);
    }, {
      exam:         question.examId?.replace('oab-', 'OAB ') ?? '',
      year:         question.year,
      subject:      question.subjectLabel ?? question.subjectId,
      statement:    question.statement,
      alternatives: (question.alternatives ?? []).map(a => ({
        id:   a.id,
        text: a.text,
      })),
    });

    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({
      path: fileName,
      type: 'png',
      clip: { x: 0, y: 0, width: 1080, height: 1080 },
    });

    console.log(`\u2713 Imagem gerada: ${fileName}`);
    return fileName;
  } finally {
    await browser.close();
  }
}

// Execução direta: node src/renderer.mjs
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { loadQuestions, loadPosted, selectNext } = await import('./selector.mjs');
  const questions = loadQuestions();
  const posted    = loadPosted();
  const q         = selectNext(questions, posted);
  console.log('Renderizando:', q.id, '--', q.subjectLabel);
  await renderQuestion(q);
}
