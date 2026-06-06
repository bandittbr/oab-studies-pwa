function normalizeSentence(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

export function generateQuestionAiPack(question, selectedAlternativeId) {
  const correctAlternative  = question.alternatives.find((alt) => alt.correct);
  const selectedAlternative = question.alternatives.find((alt) => alt.id === selectedAlternativeId);
  const isCorrect           = selectedAlternative?.id === correctAlternative?.id;

  const subject = question.subject?.label ?? "materia nao identificada";
  const theme   = question.theme?.label   ?? "";
  const examRef = question.officialExams?.length
    ? `${question.officialExams[0].label} (questao ${question.questionNumber ?? ""})`
    : "";

  // Fundamento legal: artigos relacionados > support > explanation > fallback
  const artigos = (question.relatedArticles ?? []).filter(Boolean);
  let fundamentoParts = [];

  if (artigos.length > 0) {
    artigos.forEach((art) => {
      const num    = art.articleNumber ?? "";
      const titulo = art.title ? ` (${art.title})` : "";
      const texto  = art.text  ? `: "${normalizeSentence(art.text).slice(0, 280)}${art.text.length > 280 ? "..." : ""}"` : "";
      fundamentoParts.push(`${num}${titulo}${texto}`);
    });
  } else if (question.support?.trim()) {
    fundamentoParts.push(normalizeSentence(question.support));
  } else if (question.explanation?.trim()) {
    fundamentoParts.push(normalizeSentence(question.explanation).slice(0, 400));
  } else {
    fundamentoParts.push(`legislacao de ${subject}${theme ? ` — ${theme}` : ""}`);
  }

  const fundamentoTexto = fundamentoParts.join(" | ");

  const partes = [];

  if (examRef) partes.push(`Prova: ${examRef}.`);
  partes.push(`Materia: ${subject}${theme ? ` — ${theme}` : ""}.`);

  if (!isCorrect && selectedAlternative) {
    // Explicar o erro — foco na alternativa escolhida
    partes.push(
      `Por que a alternativa "${selectedAlternative.text.slice(0, 120)}${selectedAlternative.text.length > 120 ? "..." : ""}" esta incorreta: ` +
      `ela contradiz ou restringe indevidamente o que a norma estabelece. ` +
      `A opcao errada geralmente contem uma excecao inventada, uma condicao inexistente na lei ou inverte os sujeitos da relacao juridica.`
    );
  } else {
    partes.push(`Voce acertou esta questao.`);
  }

  partes.push(`Fundamento legal: ${fundamentoTexto}.`);

  if (artigos.length > 0) {
    partes.push(
      `Para fixar: releia ${artigos.map((a) => a.articleNumber).filter(Boolean).join(", ")} e identifique o que a norma garante, a quem e em quais locais.`
    );
  } else {
    partes.push(
      `Para fixar: revise os dispositivos de ${subject}${theme ? ` sobre ${theme}` : ""} e observe as excecoes e restricoes que a lei NAO preve.`
    );
  }

  const explanation = partes.join(" ");

  return {
    explanation,
    simplified: `${isCorrect ? "Acerto!" : "Erro."} Fundamento: ${fundamentoTexto.slice(0, 200)}${fundamentoTexto.length > 200 ? "..." : ""}.`,
    flashcards: [
      {
        front: `Qual a regra de ${theme || subject} nesta questao?`,
        back: normalizeSentence(question.explanation || fundamentoTexto).slice(0, 300)
      },
      {
        front: `Qual o fundamento legal desta questao?`,
        back: fundamentoTexto.slice(0, 300)
      }
    ],
    recommendation: artigos.length > 0
      ? `Releia ${artigos.map((a) => a.articleNumber).filter(Boolean).join(", ")} e pratique questoes de ${theme || subject}.`
      : `Revise o tema "${theme || subject}" com foco nas excecoes que a lei NAO preve.`
  };
}

export function generateArticleAiPack(article) {
  return {
    summary: `Resumo objetivo: ${article.articleNumber} trata de ${article.title || "um ponto juridico relevante"}. O foco pratico do dispositivo e ${article.keywords.slice(0, 3).join(", ") || "sua aplicacao normativa"}.`,
    simplified: `Versao simplificada: ${article.text.slice(0, 240)}${article.text.length > 240 ? "..." : ""}`,
    flashcards: [
      { front: `O que diz ${article.articleNumber}?`, back: article.text },
      { front: `Quais palavras-chave resumem ${article.articleNumber}?`, back: article.keywords.join(", ") || article.title || "Sem palavras-chave cadastradas." }
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
