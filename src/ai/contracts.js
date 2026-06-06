export const aiCapabilities = [
  {
    id: "question-explanation",
    label: "Explicacao automatica",
    description: "Gera explicacoes pedagogicas para questoes com base na resposta e no fundamento legal."
  },
  {
    id: "law-summary",
    label: "Resumo de artigos",
    description: "Resume artigos e capitulos em linguagem mais memorizavel."
  },
  {
    id: "flashcards",
    label: "Flashcards",
    description: "Converte questoes e artigos em flashcards objetivos."
  },
  {
    id: "study-plan",
    label: "Plano de estudos",
    description: "Monta trilhas semanais com base em meta, tempo e desempenho."
  },
  {
    id: "performance-analysis",
    label: "Analise de desempenho",
    description: "Interpreta historico, identifica lacunas e sugere prioridades."
  },
  {
    id: "smart-recommendations",
    label: "Recomendacoes inteligentes",
    description: "Escolhe proximas questoes, artigos e temas pelo contexto do usuario."
  }
];

export function buildAiContext({ repository, state, dashboardMetrics }) {
  return {
    userProfile: {
      dailyGoalQuestions: state.preferences.dailyGoalQuestions,
      theme: state.theme
    },
    performance: dashboardMetrics,
    progressByQuestion: state.questionProgress,
    availableContent: {
      subjects: repository.subjects.length,
      themes: repository.themes.length,
      questions: repository.questions.length,
      lawArticles: repository.lawArticles.length
    }
  };
}

export function createAiTaskBlueprint(capabilityId, payload) {
  return {
    capabilityId,
    requestedAt: new Date().toISOString(),
    payload
  };
}
