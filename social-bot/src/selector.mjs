/**
 * selector.mjs
 * Seleciona a próxima questão a ser postada, evitando repetições.
 * Usa data/posted.json como histórico local (path B).
 * Em produção, substituir por tracker.mjs (Firestore).
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir  = dirname(fileURLToPath(import.meta.url));
const ROOT   = join(__dir, '..');
const POSTED = join(ROOT, 'data', 'posted.json');
const QDB    = join(ROOT, 'data', 'questions.json');

export function loadPosted() {
  if (!existsSync(POSTED)) return new Set();
  return new Set(JSON.parse(readFileSync(POSTED, 'utf-8')));
}

export function savePosted(set) {
  writeFileSync(POSTED, JSON.stringify([...set], null, 2), 'utf-8');
}

export function loadQuestions() {
  if (!existsSync(QDB)) {
    throw new Error(
      'data/questions.json não encontrado.\n' +
      'Execute primeiro: node sync-questions.mjs'
    );
  }
  return JSON.parse(readFileSync(QDB, 'utf-8'));
}

// Fisher-Yates shuffle
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Retorna N questões aleatórias não postadas.
 * Quando todas forem postadas, reinicia o ciclo automaticamente.
 */
export function selectMany(questions, posted, count = 5) {
  let pending = questions.filter(q => !posted.has(q.id));

  if (pending.length === 0) {
    console.log('⟳  Ciclo completo — reiniciando fila de questões.');
    posted.clear();
    pending = [...questions];
  }

  // Se tiver menos questões pendentes que o count, pega todas
  const shuffled = shuffle(pending);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Mantém compat com código antigo
export function selectNext(questions, posted) {
  return selectMany(questions, posted, 1)[0];
}
