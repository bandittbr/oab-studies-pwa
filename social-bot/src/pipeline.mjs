/**
 * pipeline.mjs
 * Orquestrador principal do oab-social-bot.
 *
 * Modos:
 *   node src/pipeline.mjs              → publica 1 questão (padrão agendado)
 *   node src/pipeline.mjs --count=3    → publica N questões
 *   node src/pipeline.mjs --dry-run    → gera imagens/textos, NÃO publica
 *   node src/pipeline.mjs --now        → alias de --count=1 (teste imediato)
 */

import 'dotenv/config';

import { loadQuestions, loadPosted, savePosted, selectMany } from './selector.mjs';
import { renderCarousel }                                     from './renderer.mjs';
import { generateCaption, generateGabaritoComment }          from './ai.mjs';
import { markPosted }                                         from './tracker.mjs';
import { publishCarouselToInstagram }                         from './publisher.mjs';
import { uploadImages }                                       from './uploader.mjs';
import { logInfo, logWarn, logError, saveRunToHistory }       from './logger.mjs';

const isDry    = process.argv.includes('--dry-run') || process.argv.includes('--preview');
const isNow    = process.argv.includes('--now');
const countArg = process.argv.find(a => a.startsWith('--count='));
const COUNT    = isNow ? 1 : (countArg ? parseInt(countArg.split('=')[1]) : 1);

const MAX_RETRIES    = 2;
const RETRY_DELAY_MS = 30_000;

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

/**
 * Tenta publicar uma questão como carrossel, com retry automático.
 * @returns {'success'|'error'|'skipped'}
 */
async function runOne(question, posted, attempt = 1) {
  logInfo(`Iniciando questão ${question.id} (tentativa ${attempt}/${MAX_RETRIES})`, {
    questionId: question.id,
    subject:    question.subjectLabel,
    attempt,
  });

  try {
    // 1. Renderizar 6 slides do carrossel
    logInfo('Renderizando carrossel (6 slides)…');
    const imagePaths = await renderCarousel(question);
    logInfo('Slides renderizados', { count: imagePaths.length });

    // 2. Gerar legenda e comentário de gabarito
    const [caption, comment] = await Promise.all([
      generateCaption(question),
      generateGabaritoComment(question),
    ]);
    logInfo('Legenda e gabarito gerados', { captionLength: caption.length });

    if (isDry) {
      console.log('\n── SLIDES GERADOS ───────────────────────────');
      imagePaths.forEach((p, i) => console.log(`  Slide ${i + 1}: ${p}`));
      console.log('\n── LEGENDA ──────────────────────────────────');
      console.log(caption);
      console.log('\n── COMENTÁRIO (GABARITO) ────────────────────');
      console.log(comment ?? '(sem gabarito)');
      console.log('─'.repeat(50));
      saveRunToHistory({ questionId: question.id, status: 'skipped', reason: 'dry-run' });
      return 'skipped';
    }

    // 3. Upload dos 6 slides ao Cloudinary
    logInfo('Enviando slides ao CDN…');
    const imageUrls = await uploadImages(imagePaths);
    logInfo('Uploads concluídos', { count: imageUrls.length });

    // 4. Publicar carrossel no Instagram
    logInfo('Publicando carrossel no Instagram…');
    const postId = await publishCarouselToInstagram(imageUrls, caption, comment);

    if (!postId) {
      logWarn('Publicação ignorada — Instagram não configurado', { questionId: question.id });
      saveRunToHistory({ questionId: question.id, status: 'skipped', reason: 'instagram-not-configured' });
      return 'skipped';
    }

    // 5. Registra como postada APÓS confirmação
    posted.add(question.id);
    savePosted(posted);
    await markPosted(question.id, {
      instagramPostId: postId,
      examId:          question.examId,
      questionNumber:  question.questionNumber,
    });

    logInfo('Carrossel publicado com sucesso', { questionId: question.id, instagramPostId: postId });
    saveRunToHistory({ questionId: question.id, status: 'success', instagramPostId: postId, attempt });
    return 'success';

  } catch (err) {
    logError(`Erro ao publicar questão ${question.id}`, {
      questionId: question.id,
      attempt,
      error: err.message,
    });

    if (attempt < MAX_RETRIES) {
      logWarn(`Aguardando ${RETRY_DELAY_MS / 1000}s para retry…`);
      await sleep(RETRY_DELAY_MS);
      return runOne(question, posted, attempt + 1);
    }

    saveRunToHistory({ questionId: question.id, status: 'error', error: err.message, attempt });
    return 'error';
  }
}

async function run() {
  const startedAt = Date.now();
  logInfo('oab-social-bot iniciado', {
    mode:  isDry ? 'DRY-RUN' : 'PRODUÇÃO',
    count: COUNT,
    pid:   process.pid,
  });

  const questions = loadQuestions();
  const posted    = loadPosted();
  const selected  = selectMany(questions, posted, COUNT);

  logInfo('Questões selecionadas', { count: selected.length, ids: selected.map(q => q.id) });

  const results = { success: 0, error: 0, skipped: 0 };

  for (let i = 0; i < selected.length; i++) {
    logInfo(`[${i + 1}/${selected.length}] Processando…`);
    const status = await runOne(selected[i], posted);
    results[status]++;

    if (!isDry && i < selected.length - 1) {
      logInfo('Aguardando 10s entre posts…');
      await sleep(10_000);
    }
  }

  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1);
  logInfo('Pipeline concluído', { ...results, elapsed: `${elapsed}s` });

  if (results.error > 0) {
    logError(`${results.error} postagem(ns) falharam após ${MAX_RETRIES} tentativas.`);
    process.exit(1);
  }
}

run().catch(err => {
  logError('Erro fatal no pipeline', { error: err.message, stack: err.stack });
  process.exit(1);
});
