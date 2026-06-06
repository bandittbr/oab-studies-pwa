function normalizeSentence(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

export function generateQuestionAiPack(question) {
  const correctAlternative = question.alternatives.find((alt) => alt.correct);
  const subject  = question.subject?.label  ?? "materia nao identificada";
  const theme    = question.theme?.label    ?? "";
  const examRef  = question.officialExams?.length
    ? `${question.officialExams[0].label} (questao ${question.questionNumber ?? ""})`
    : "";

  // Fundamento legal: prioridade para artigos relacionados, depois support, depois explanation
  const artigos = (question.relatedArticles ?? []).filter(Boolean);
  let fundamentoLinhas = [];

  if (artigos.length > 0) {
    artigos.forEach((art) => {
      const num   = art.articleNumber ?? "";
      const titulo = art.title        ? ` — ${art.title}` : "";
      const texto  = art.text         ? `: "${normalizeSentence(art.text).slice(0, 300)}${art.text.length > 300 ? "..." : ""}"` : "";
      fundamentoLinhas.push(`${num}${titulo}${texto}`);
    });
  } else if (question.support && question.support.trim()) {
    fundamentoLinhas.push(normalizeSentence(question.support));
  } else if (question.explanation && question.explanation.trim()) {
    fundamentoLinhas.push(normalizeSentence(question.explanation).slice(0, 400));
  } else {
    fundamentoLinhas.push(`legislacao de ${subject}${theme ? ` — ${theme}` : ""}`);
  }

  const fundamentoTexto = fundamentoLinhas.join(" | ");

  // Tags relevantes
  const tags = (question.tags ?? []).slice(0, 4).join(", ");

  // Monta explicação estruturada
  const partes = [];

  if (examRef) {
    partes.push(`Prova: ${examRef}.`);
  }

  partes.push(
    `Materia: ${subject}${theme ? ` — ${theme}` : ""}.`
  );

  partes.push(
    `Resposta correta: ${correctAlternative?.text ?? "nao identificada"}.`
  );

  partes.push(
    `Fundamento legal: ${fundamentoTexto}.`
  );

  if (artigos.length > 0) {
    partes.push(
      `Para fixar: releia ${artigos.map((a) => a.articleNumber).filter(Boolean).join(", ")} e associe ao padrao de cobranca desta materia na OAB.`
    );
  } else {
    partes.push(
      `Para fixar: revise os dispositivos de ${subject}${theme ? ` relativos a ${theme}` : ""} cobrados nos exames anteriores.`
    );
  }

  if (tags) {
    partes.push(`Palavras-chave: ${tags}.`);
  }

  const explanation = partes.join(" ");

  return {
    explanation,
    simplified: `Questao de ${subject}${theme ? ` (${theme})` : ""}. A alternativa correta e: "${correctAlternative?.text ?? "nao identificada"}". Fundamento: ${fundamentoTexto.slice(0, 200)}${fundamentoTexto.length > 200 ? "..." : ""}.`,
    flashcards: [
      {
        front: `Qual e a regra central de ${theme || subject}?`,
        back: normalizeSentence(question.explanation || fundamentoTexto).slice(0, 300)
      },
      {
        front: `Qual o fundamento legal desta questao?`,
        back: fundamentoTexto.slice(0, 300)
      }
    ],
    recommendation: artigos.length > 0
      ? `Se voce errou, releia ${artigos.map((a) => a.articleNumber).filter(Boolean).join(", ")} e pratique questoes de ${theme || subject}.`
      : `Se voce errou, revise o tema "${theme || subject}" e resolva mais questoes desta materia.`
  };
}

export function generateArticleAiPack(article) {
  return {
    summary: `Resumo objetivo: ${article.articleNumber} trata de ${article.title || "um ponto juridico relevante"}. O foco pratico do dispositivo e ${article.keywords.slice(0, 3).join(", ") || "sua aplicacao normativa"}.`,
    simplified: `Versao simplificada: ${article.text.slice(0, 240)}${article.text.length > 240 ? "..." : ""}`,
    flashcards: [
      {
        front: `O que diz ${article.articleNumber}?`,
        back: article.text
      },
      {
        front: `Quais palavras-chave resumem ${article.articleNumber}?`,
        back: article.keywords.join(", ") || article.title || "Sem palavras-chave cadastradas."
      }
    ]
  };
}

export function generatePerformanceAiPack({ adaptivePlan, dashboardMetrics }) {
  const weakest = adaptivePlan.topWeakSubjects[0];
  return {
    analysis: [
      `Panorama atual: ${dashboardMetrics.accuracy}% de precisao com ${dashboardMetrics.answeredCount} questoes respondidas.`,
      weakest
        ? `Sua principal fragilidade no momento e ${weakest.label}, com ${weakest.wrongAttempts} erros e ${weakest.reinforcementCount} itens pedindo reforco.`
        : "Ainda faltam dados suficientes para detectar uma materia dominante de fraqueza.",
      `Fila de revisao: ${adaptivePlan.dueReviewCount} questoes.`
    ].join(" "),
    studyPlan: adaptivePlan.planSteps,
    recommendation: `Sessao sugerida agora: modo ${adaptivePlan.recommendedSession.mode} com ${adaptivePlan.recommendedSession.size} questoes.`
  };
}
