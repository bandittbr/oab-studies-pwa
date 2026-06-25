/**
 * ai.mjs
 * Gera legenda e comentário de gabarito via template fixo (sem API externa).
 */

const HASHTAGS = `#OAB #ExameOAB #Advocacia #Direito #EstudoOAB #FGV #AprovadoOAB #ConcursoPublico #AprovaNaOAB #DireitoNaVeia`;

/**
 * Gera a legenda completa do post (alternativas + CTA + hashtags).
 */
export async function generateCaption(question) {
  const exam = question.examId?.replace('oab-', 'OAB ') ?? '';
  const alts = question.alternatives
    .map(a => `${a.id.toUpperCase()}) ${a.text}`)
    .join('\n\n');

  return `📚 ${question.subjectLabel}
${exam} · FGV ${question.year}

${question.statement}

${alts}

💬 Qual é a sua resposta? Comente abaixo!
👇 Gabarito fixado no primeiro comentário.

${HASHTAGS}`;
}

/**
 * Gera o comentário com gabarito (primeiro comentário do post).
 */
export async function generateGabaritoComment(question) {
  const correct = question.alternatives.find(a => a.correct === true);
  if (!correct) {
    console.warn(`⚠️  Alternativa correta não encontrada para ${question.id}`);
    return null;
  }

  return `✅ GABARITO: Alternativa ${correct.id.toUpperCase()}

${correct.text}

📖 ${question.subjectLabel} — ${question.examId?.replace('oab-', 'OAB ')} (FGV ${question.year})

Bons estudos! 🎯 https://estudo-oab.vercel.app`;
}
