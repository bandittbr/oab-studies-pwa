/**
 * renderer.mjs
 * Renderiza questões OAB via Puppeteer.
 *
 * renderQuestion(question)  → PNG único 1080×1080 (legado / dry-run)
 * renderCarousel(question)  → Array de 6 PNGs para carrossel Instagram
 */

import puppeteer from 'puppeteer';
import { readFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir          = dirname(fileURLToPath(import.meta.url));
const ROOT           = join(__dir, '..');
const TEMPLATE_SINGLE   = join(ROOT, 'template', 'question.html');
const TEMPLATE_CAROUSEL = join(ROOT, 'template', 'carousel.html');
const OUTPUT_DIR     = join(ROOT, 'output');

// ── Helpers ──────────────────────────────────────────────────────────────────

function launchBrowser() {
  return puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
}

/**
 * Divide o enunciado em:
 *   part1    — primeira metade do corpo
 *   part2    — segunda metade do corpo
 *   question — frase final de pergunta (termina em ?)
 *
 * Se o enunciado for curto (< 300 chars), part2 fica vazio e
 * a pergunta aparece no slide 3 junto ao part2 (que estará vazio).
 */
function splitStatement(fullStatement) {
  // Tenta separar "corpo" da "pergunta final" (última frase terminada em ?)
  const qMatch = fullStatement.match(/^([\s\S]+?)([^.!?]{10,}\?)\s*$/);
  let body = fullStatement.trim();
  let question = '';

  if (qMatch && qMatch[2].length < 300) {
    body     = qMatch[1].trim();
    question = qMatch[2].trim();
  }

  // Divide o corpo ao redor do ponto médio, preferindo quebra de frase.
  // Nunca corta no meio de uma palavra — busca espaço mais próximo do mid.
  const mid      = Math.floor(body.length * 0.52);
  const dotAfter = body.indexOf('. ', mid);

  let splitAt;
  if (dotAfter > -1 && dotAfter < body.length * 0.85) {
    splitAt = dotAfter + 1;                  // quebra após ponto
  } else {
    // Sem ponto próximo: encontra o espaço mais perto do mid
    const spaceAfter  = body.indexOf(' ', mid);
    const spaceBefore = body.lastIndexOf(' ', mid);
    if (spaceAfter === -1 && spaceBefore === -1) {
      splitAt = mid;                         // sem espaço (raro)
    } else if (spaceAfter === -1) {
      splitAt = spaceBefore + 1;
    } else if (spaceBefore === -1) {
      splitAt = spaceAfter + 1;
    } else {
      // Escolhe o espaço mais próximo do mid
      splitAt = (mid - spaceBefore) <= (spaceAfter - mid)
        ? spaceBefore + 1
        : spaceAfter + 1;
    }
  }

  return {
    part1:    body.substring(0, splitAt).trim(),
    part2:    body.substring(splitAt).trim(),
    question,
  };
}

// ── Render único (legado) ─────────────────────────────────────────────────────

/**
 * Gera um único PNG 1080×1080 com o template question.html.
 * @param {object} question  — objeto do questions.json
 * @param {string} [outPath] — caminho de saída (opcional)
 * @returns {string} caminho do arquivo gerado
 */
export async function renderQuestion(question, outPath) {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const fileName = outPath ?? join(OUTPUT_DIR, `${question.id}.png`);
  const html     = readFileSync(TEMPLATE_SINGLE, 'utf-8');

  const browser = await launchBrowser();
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
      alternatives: (question.alternatives ?? []).map(a => ({ id: a.id, text: a.text })),
    });

    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: fileName, type: 'png', clip: { x: 0, y: 0, width: 1080, height: 1080 } });
    console.log(`✓ Imagem gerada: ${fileName}`);
    return fileName;
  } finally {
    await browser.close();
  }
}

// ── Render carrossel ──────────────────────────────────────────────────────────

/**
 * Gera 6 PNGs 1080×1080 para um carrossel Instagram.
 * @param {object} question — objeto do questions.json
 * @returns {string[]} array com 6 caminhos de arquivo
 */
export async function renderCarousel(question) {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const html    = readFileSync(TEMPLATE_CAROUSEL, 'utf-8');
  const examLabel = question.examId?.replace('oab-', 'OAB ') ?? '';
  const subject   = question.subjectLabel ?? question.subjectId ?? '';
  const { part1, part2, question: questionLine } = splitStatement(question.statement ?? '');

  const alts = (question.alternatives ?? []).map(a => ({ id: a.id, text: a.text }));
  // Suporta correctId treto ou `correct: true` nas alternativas
  const correctAlt = (question.alternatives ?? []).find(a => a.correct === true);
  const correctId  = question.correctId ?? question.correct ?? correctAlt?.id ?? '';

  // Slides djânamicos: 4, 5 ou 6 conforme tamanho do enunciado
  // - part2 curto (< 80 chars)  → 4 slides: cover + enun1-final + alts + gab
  // - part2 médio (<= 550 chars) → 5 slides: cover + enun1 + enun2(+pergunta) + alts + gab
  // - part2 longo (> 550 chars)  → 6 slides: cover + enun1 + enun2 + pergunta + alts + gab
  const explanation = question.explanation ?? '';
  const coverSlide  = { type: 'cover', exam: examLabel, subject };
  const altSlide    = { type: 'alternativas', exam: examLabel, alternatives: alts };
  const gabSlide    = { type: 'gabarito', exam: examLabel, correctId, alternatives: alts, explanation };

  let slides;
  if (!part2 || part2.length < 80) {
    slides = [
      coverSlide,
      { type: 'enunciado-1-final', exam: examLabel, text: part1, question: questionLine },
      altSlide,
      gabSlide,
    ];
  } else if (part2.length <= 550) {
    slides = [
      coverSlide,
      { type: 'enunciado-1', exam: examLabel, text: part1 },
      { type: 'enunciado-2', exam: examLabel, text: part2, question: questionLine },
      altSlide,
      gabSlide,
    ];
  } else {
    slides = [
      coverSlide,
      { type: 'enunciado-1', exam: examLabel, text: part1 },
      { type: 'enunciado-2', exam: examLabel, text: part2, question: questionLine },
      { type: 'pergunta', exam: examLabel, question: questionLine || part2 },
      altSlide,
      gabSlide,
    ];
  }

  const browser = await launchBrowser();
  const filePaths = [];

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
    await page.setContent(html, { waitUntil: 'networkidle0' });

    for (let i = 0; i < slides.length; i++) {
      await page.evaluate((slideData) => {
        window.renderSlide(slideData);
      }, slides[i]);

      // Aguarda renderização (fontes, layout)
      await new Promise(r => setTimeout(r, 350));

      const filePath = join(OUTPUT_DIR, `${question.id}_slide_${i + 1}.png`);
      await page.screenshot({
        path: filePath,
        type: 'png',
        clip: { x: 0, y: 0, width: 1080, height: 1080 },
      });

      console.log(`✓ Slide ${i + 1}/${slides.length} gerado: ${filePath}`);
      filePaths.push(filePath);
    }

    return filePaths;
  } finally {
    await browser.close();
  }
}

// ── Execução direta ───────────────────────────────────────────────────────────

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { loadQuestions, loadPosted, selectNext } = await import('./selector.mjs');
  const questions = loadQuestions();
  const posted    = loadPosted();
  const q         = selectNext(questions, posted);
  console.log('Renderizando carrossel:', q.id, '--', q.subjectLabel);
  const paths = await renderCarousel(q);
  console.log('Slides gerados:', paths);
}
