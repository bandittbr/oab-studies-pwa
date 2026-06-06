function normalizeSentence(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

export function generateQuestionAiPack(question) {
  const correctAlternative = question.alternatives.find((alternative) => alternative.correct);

  return {
    explanation: [
      `Leitura guiada: a questao cobra ${question.theme.label} dentro de ${question.subject.label}.`,
      `Ponto-chave: o enunciado deve ser resolvido identificando o criterio juridico central do fundamento citado.`,
      `Resposta correta: ${correctAlternative?.text ?? "nao identificada"}.`,
      `Fundamento aplicavel: ${question.support}.`,
      `Memorizacao rapida: associe o tema "${question.theme.label}" ao artigo relacionado e ao padrao cobrado na OAB.`
    ].join(" "),
    simplified: `Em linguagem simples: esta questao quer saber qual regra juridica manda em ${question.theme.label}. A resposta certa e a alternativa que melhor combina com ${question.support}.`,
    flashcards: [
      {
        front: `Qual e a ideia central de ${question.theme.label}?`,
        back: normalizeSentence(question.explanation)
      },
      {
        front: `Qual fundamento legal aparece nesta questao?`,
        back: question.support
      }
    ],
    recommendation: `Se voce errou esta questao, revise ${question.theme.label} e releia ${question.relatedArticles[0]?.articleNumber ?? "os artigos relacionados"} antes de seguir.`
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
