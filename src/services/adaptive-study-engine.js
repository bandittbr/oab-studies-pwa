function average(values) {
  if (!values.length) {
    return 0;
  }
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function buildWeakSubjectInsights(repository, state) {
  return repository.subjects
    .map((subject) => {
      const questions = repository.indexes.questionsBySubjectId[subject.id] ?? [];
      const attempts = questions.flatMap((question) => state.questionProgress[question.id]?.attempts ?? []);
      const wrongAttempts = attempts.filter((attempt) => !attempt.isCorrect).length;
      const correctAttempts = attempts.filter((attempt) => attempt.isCorrect).length;
      const totalAttempts = attempts.length;
      const accuracy = totalAttempts ? Math.round((correctAttempts / totalAttempts) * 100) : 0;
      const reinforcementCount = questions.filter(
        (question) => state.questionProgress[question.id]?.needsReinforcement
      ).length;

      return {
        ...subject,
        totalQuestions: questions.length,
        totalAttempts,
        wrongAttempts,
        correctAttempts,
        reinforcementCount,
        accuracy,
        weaknessScore:
          wrongAttempts * 2 +
          reinforcementCount * 3 +
          Math.max(0, 100 - accuracy) / 10 +
          Math.max(0, questions.length - correctAttempts) / 5
      };
    })
    .sort((left, right) => right.weaknessScore - left.weaknessScore);
}

export function buildAdaptivePlan(repository, state, dashboardMetrics) {
  const weakSubjects = buildWeakSubjectInsights(repository, state);
  const topWeakSubjects = weakSubjects.filter((subject) => subject.totalAttempts > 0).slice(0, 3);
  const dueReviewCount = repository.questions.filter((question) => {
    const progress = state.questionProgress[question.id];
    return progress?.needsReinforcement;
  }).length;

  const planSteps = [
    dueReviewCount
      ? `Resolva primeiro ${Math.min(dueReviewCount, 12)} questoes em revisao para reduzir fila de reforco.`
      : "Comece por um bloco curto de questoes novas para alimentar o motor adaptativo.",
    topWeakSubjects[0]
      ? `Priorize ${topWeakSubjects[0].label}, que aparece como sua materia mais fragil agora.`
      : "Concentre um primeiro bloco em uma materia principal para gerar diagnostico inicial.",
    dashboardMetrics.answeredToday < state.preferences.dailyGoalQuestions
      ? `Faltam ${state.preferences.dailyGoalQuestions - dashboardMetrics.answeredToday} questoes para bater sua meta do dia.`
      : "Sua meta diaria ja foi cumprida; use o restante do tempo para revisar erros marcados."
  ];

  const recommendedSession = {
    mode: dueReviewCount > 0 ? "adaptive" : "focus",
    size: Math.max(10, Math.min(25, state.preferences.dailyGoalQuestions)),
    subjectId: topWeakSubjects[0]?.id ?? state.lastVisitedSubjectId ?? "all"
  };

  const studyRoutine = [
    { title: "Aquecimento", description: "5 questoes de revisao pendente para ativar memoria recente." },
    { title: "Bloco principal", description: "Sessao adaptativa na materia mais fraca do momento." },
    { title: "Fechamento", description: "Leia 2 a 3 artigos relacionados aos erros do dia e gere flashcards." }
  ];

  return {
    weakSubjects,
    topWeakSubjects,
    dueReviewCount,
    planSteps,
    recommendedSession,
    studyRoutine,
    readinessScore: Math.max(0, Math.min(100, Math.round(average(weakSubjects.map((item) => item.accuracy || 55)))))
  };
}
