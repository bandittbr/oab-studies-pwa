/**
 * sync-questions.mjs
 * Extrai todas as questões dos seed files do frontend e gera data/questions.json
 * Rodar uma vez sempre que novas provas forem adicionadas: node sync-questions.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const seedDir = join(__dir, '..', 'src', 'domain', 'content');

// Mapeia subject ID legível
const SUBJECT_LABELS = {
  'etica':               'Ética e Estatuto',
  'filosofia':           'Filosofia do Direito',
  'constitucional':      'Direito Constitucional',
  'direitos-humanos':    'Direitos Humanos',
  'eleitoral':           'Direito Eleitoral',
  'internacional':       'Direito Internacional',
  'financeiro':          'Direito Financeiro',
  'tributario':          'Direito Tributário',
  'administrativo':      'Direito Administrativo',
  'ambiental':           'Direito Ambiental',
  'civil':               'Direito Civil',
  'eca':                 'ECA',
  'consumidor':          'Direito do Consumidor',
  'empresarial':         'Direito Empresarial',
  'processo-civil':      'Processo Civil',
  'penal':               'Direito Penal',
  'processo-penal':      'Processo Penal',
  'previdenciario':      'Direito Previdenciário',
  'trabalhista':         'Direito do Trabalho',
  'processual-trabalho': 'Processo do Trabalho',
};

// Extrai blocos defineQuestion(...) contando chaves balanceadas
function extractBlocks(src) {
  const blocks = [];
  let i = 0;
  while (i < src.length) {
    const idx = src.indexOf('defineQuestion(', i);
    if (idx === -1) break;
    // Avança até o primeiro '{'
    let start = src.indexOf('{', idx);
    if (start === -1) break;
    // Conta chaves para encontrar o fechamento correto
    let depth = 0, j = start;
    while (j < src.length) {
      if (src[j] === '{') depth++;
      else if (src[j] === '}') { depth--; if (depth === 0) break; }
      j++;
    }
    blocks.push(src.slice(start + 1, j)); // conteúdo interno sem as chaves externas
    i = j + 1;
  }
  return blocks;
}

function extractQuestions(filePath) {
  const src = readFileSync(filePath, 'utf-8');
  const questions = [];

  for (const block of extractBlocks(src)) {
    const get = (key) => {
      // backtick
      const m1 = block.match(new RegExp(`${key}:\\s*\`([\\s\\S]*?)\``));
      if (m1) return m1[1].trim();
      // aspas duplas (suporta texto com pontuação)
      const m2 = block.match(new RegExp(`${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"`, 's'));
      if (m2) return m2[1].replace(/\\"/g, '"').trim();
      // aspas simples
      const m3 = block.match(new RegExp(`${key}:\\s*'((?:[^'\\\\]|\\\\.)*)'`));
      return m3 ? m3[1].replace(/\\'/g, "'").trim() : '';
    };

    const getNum = (key) => {
      const m = block.match(new RegExp(`${key}:\\s*(\\d+)`));
      return m ? parseInt(m[1]) : 0;
    };

    // Extrai alternativas localizando sub-blocos por id
    const alternatives = [];
    const splitRe = /\{\s*id:\s*['"]([a-d])['"]/g;
    const positions = [];
    let sm;
    while ((sm = splitRe.exec(block)) !== null) {
      positions.push({ id: sm[1], start: sm.index });
    }
    for (let i = 0; i < positions.length; i++) {
      const start = positions[i].start;
      const end   = i + 1 < positions.length ? positions[i + 1].start : block.length;
      const chunk = block.slice(start, end);
      const textM = chunk.match(/text:\s*`([\s\S]*?)`/) ??
                   chunk.match(/text:\s*"((?:[^"\\]|\\.)*)"/) ??
                   chunk.match(/text:\s*'((?:[^'\\]|\\.)*)'/s);
      if (textM) {
        alternatives.push({
          id:      positions[i].id,
          text:    textM[1].trim(),
          correct: /correct:\s*true/.test(chunk),
        });
      }
    }

    const q = {
      id:             get('id'),
      examId:         get('examId'),
      subjectId:      get('subjectId'),
      subjectLabel:   SUBJECT_LABELS[get('subjectId')] || get('subjectId'),
      year:           getNum('year'),
      questionNumber: getNum('questionNumber'),
      statement:      get('statement'),
      alternatives,
    };

    if (q.id && q.statement) questions.push(q);
  }

  return questions;
}

// Descobre todos os seed files
import { readdirSync } from 'fs';
const seedFiles = readdirSync(seedDir)
  .filter(f => f.match(/^questions-seed-oab\d+\.js$/))
  .map(f => join(seedDir, f));

console.log(`Encontrados ${seedFiles.length} seed files:`);
seedFiles.forEach(f => console.log(' -', f.split(/[\\/]/).pop()));

const all = [];
for (const f of seedFiles) {
  const qs = extractQuestions(f);
  console.log(`  → ${qs.length} questões extraídas de ${f.split(/[\\/]/).pop()}`);
  all.push(...qs);
}

// Salva
mkdirSync(join(__dir, 'data'), { recursive: true });
const outPath = join(__dir, 'data', 'questions.json');
writeFileSync(outPath, JSON.stringify(all, null, 2), 'utf-8');

console.log(`\n✓ ${all.length} questões exportadas para data/questions.json`);
