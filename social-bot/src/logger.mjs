/**
 * logger.mjs
 * Logging centralizado do oab-social-bot.
 *
 * Grava dois artefatos persistentes:
 *   logs/YYYY-MM-DD.log  — linhas JSON, uma por evento (append)
 *   logs/history.json    — últimas 200 execuções (commitado pelo workflow)
 */

import { existsSync, mkdirSync, appendFileSync, writeFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir   = dirname(fileURLToPath(import.meta.url));
const LOG_DIR = join(__dir, '..', 'logs');
const HISTORY = join(LOG_DIR, 'history.json');

function ensureDir() { mkdirSync(LOG_DIR, { recursive: true }); }

/** Timestamp human-legível em America/Sao_Paulo */
function brtNow() {
  return new Date().toLocaleString('pt-BR', {
    timeZone:  'America/Sao_Paulo',
    year:      'numeric', month:  '2-digit', day:    '2-digit',
    hour:      '2-digit', minute: '2-digit', second: '2-digit',
    hour12:    false,
  });
}

/** ISO timestamp (UTC) para ordenação */
function isoNow() { return new Date().toISOString(); }

/** Append de uma linha JSON ao arquivo de log diário */
export function log(level, message, data = {}) {
  ensureDir();
  const today   = new Date().toISOString().slice(0, 10);  // YYYY-MM-DD
  const logFile = join(LOG_DIR, `${today}.log`);
  const entry   = { ts: brtNow(), isoTs: isoNow(), level, message, ...data };
  appendFileSync(logFile, JSON.stringify(entry) + '\n', 'utf-8');
  // Espelha no stdout para o log do GitHub Actions
  const icon = level === 'ERROR' ? '❌' : level === 'WARN' ? '⚠️' : '✅';
  console.log(`${icon}  [${brtNow()}] ${message}`, Object.keys(data).length ? data : '');
}

export const logInfo  = (msg, data) => log('INFO',  msg, data);
export const logWarn  = (msg, data) => log('WARN',  msg, data);
export const logError = (msg, data) => log('ERROR', msg, data);

/**
 * Registra o resultado de uma execução do pipeline em history.json.
 * O workflow commita esse arquivo junto com posted.json.
 *
 * @param {object} run
 *   @param {string}   run.questionId
 *   @param {'success'|'error'|'skipped'} run.status
 *   @param {string}   [run.instagramPostId]
 *   @param {string}   [run.error]
 *   @param {number}   [run.attempt]
 */
export function saveRunToHistory(run) {
  ensureDir();
  let history = [];
  if (existsSync(HISTORY)) {
    try { history = JSON.parse(readFileSync(HISTORY, 'utf-8')); } catch { /* corrompido */ }
  }
  history.unshift({ ...run, ts: brtNow(), isoTs: isoNow() });
  if (history.length > 200) history = history.slice(0, 200);
  writeFileSync(HISTORY, JSON.stringify(history, null, 2), 'utf-8');
}

/**
 * Retorna quantos posts foram feitos hoje (BRT) com sucesso.
 * Usado para guard de segurança contra double-trigger do Actions.
 */
export function postsToday() {
  if (!existsSync(HISTORY)) return 0;
  let history = [];
  try { history = JSON.parse(readFileSync(HISTORY, 'utf-8')); } catch { return 0; }
  const todayBRT = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  return history.filter(r => r.status === 'success' && r.ts?.startsWith(todayBRT.split('/').reverse().join('-').slice(0,2))).length;
}
