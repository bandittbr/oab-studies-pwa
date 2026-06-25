/**
 * pipeline.mjs
 * Orquestrador principal do oab-social-bot.
 *
 * Modos:
 *   node src/pipeline.mjs              → publica 5 questões aleatórias
 *   node src/pipeline.mjs --count=3    → publica N questões
 *   node src/pipeline.mjs --dry-run    → gera imagens/textos, NÃO publica
 */

import 'dotenv/config';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { loadQuestions, loadPosted, savePosted, selectMany } from './selector.mjs';
import { renderQuestion }                from './renderer.mjs';
import { generateCaption, generateGabaritoComment } from './ai.mjs';
import { markPosted }                    from './tracker.mjs';
import { publishToInstagram }            from './publisher.mjs';
import { uploadImage }                   from './uploader.mjs';

const isDry   = process.argv.includes('--dry-run') || process.argv.includes('--preview');
const countArg = process.argv.find(a => a.startsWith('--count='));
const COUNT   = countArg ? parseInt(countArg.split('=')[1]) : 5;

async function runOne(question, posted) {
  console.log(`\n📚  ${question.id} — ${question.subjectLabel}`);

  // 1. Renderizar imagem
  const imagePath = await renderQuestion(question);

  // 2. Gerar legenda e comentário
  const [caption, comment] = await Promise.all([
    generateCaption(question),
    generateGabaritoComment(question),
  ]);

  console.log('\n── LEGENDA ──────────────────────────────────');
  console.log(caption);
  console.log('\n── COMENTÁRIO (GABARITO) ────────────────────');
  console.log(comment ?? '(sem gabarito)');
  console.log('─'.repeat(50));

  if (isDry) return;

  // 3. Upload Cloudinary
  console.log('\n☁️   Enviando imagem...');
  const imageUrl = await uploadImage(imagePath);

  // 4. Publicar
  console.log('\n📲  Publicando no Instagram...');
  await publishToInstagram(imageUrl, caption, comment);

  // 5. Registrar
  posted.add(question.id);
  savePosted(posted);
  await markPosted(question.id, { examId: question.examId, questionNumber: question.questionNumber });

  console.log(`✅  ${question.id} postada.`);
}

async function run() {
  console.log(`\n🤖  oab-social-bot — ${isDry ? 'DRY RUN' : 'PRODUÇÃO'} (${COUNT} questões)`);
  console.log('═'.repeat(50));

  const questions = loadQuestions();
  const posted    = loadPosted();
  const selected  = selectMany(questions, posted, COUNT);

  console.log(`\n🎲  ${selected.length} questões selecionadas aleatoriamente.`);

  for (let i = 0; i < selected.length; i++) {
    console.log(`\n[${i + 1}/${selected.length}]`);
    await runOne(selected[i], posted);

    // Pausa de 10s entre posts para não sobrecarregar a API
    if (!isDry && i < selected.length - 1) {
      console.log('⏳  Aguardando 10s...');
      await new Promise(r => setTimeout(r, 10_000));
    }
  }

  if (isDry) {
    console.log(`\n✅  Dry-run concluído. Nada publicado.\n`);
  } else {
    console.log(`\n🎉  ${selected.length} questões publicadas com sucesso!\n`);
  }
}

run().catch(err => {
  console.error('\n❌  Erro no pipeline:', err.message);
  process.exit(1);
});
