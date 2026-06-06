import { formatShortDay, isDue, sameDay, startOfDay } from "../lib/date";

export function getQuestionProgress(state, questionId) {
  return state.questionProgress[questionId] ?? null;
}

export function buildQuestionView(question, state) {
  const progress = getQuestionProgress(state, question.id);
  const lastAttempt = progress?.attempts.at(-1) ?? null;

  return {
    ...question,
    progress,
    lastAttempt,
    isFavorite: Boolean(state.favorites[question.id]),
    isWrong: Boolean(progress?.needsReinforcement),
    dueReview: Boolean(progress?.nextReviewAt && isDue(progress.nextReviewAt)),
    personalDifficulty: progress?.personalDifficulty ?? "steady",
    attemptCount: progress?.attempts.length ?? 0
  };
}

export function filterQuestions(repository, state, filters) {
  const normalizedSearch = filters.search.trim().toLowerCase();

  return repository.questions
    .filter((question) => {
      const view = buildQuestionView(question, state);

      if (filters.subjectId !== "all" && question.subjectId !== filters.subjectId) {
        return false;
      }

      if (filters.themeId !== "all" && question.themeId !== filters.themeId) {
        return false;
      }

      if (filters.examId !== "all" && question.examId !== filters.examId) {
        return false;
      }

      if (filters.year !== "all" && String(question.year) !== String(filters.year)) {
        return false;
      }

      if (filters.difficulty !== "all" && question.difficulty !== filters.difficulty) {
        return false;
      }

      if (filters.onlyWrong && !view.isWrong) {
        return false;
      }

      if (filters.onlyFavorites && !view.isFavorite) {
        return false;
      }

      if (normalizedSearch && !question.searchText.includes(normalizedSearch)) {
        return false;
      }

      return true;
    })
    .map((question) => buildQuestionView(question, state));
}

export function getDueReviewQuestions(repository, state) {
  return repository.questions
    .map((question) => buildQuestionView(question, state))
    .filter((question) => question.progress?.needsReinforcement || question.dueReview)
    .sort((left, right) => {
      const leftTime = left.progress?.nextReviewAt ? new Date(left.progress.nextReviewAt).getTime() : 0;
      const rightTime = right.progress?.nextReviewAt ? new Date(right.progress.nextReviewAt).getTime() : 0;
      return leftTime - rightTime;
    });
}

export function getLawArticlesBySearch(repository, search, codeId = "all") {
  const normalizedSearch = search.trim().toLowerCase();

  return repository.lawArticles.filter((article) => {
    if (codeId !== "all" && article.codeId !== codeId) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    return [article.articleNumber, article.title, article.text, ...article.keywords]
      .join(" ")
      .toLowerCase()
      .includes(normalizedSearch);
  });
}

export function getDashboardMetrics(repository, state) {
  const questionViews = repository.questions.map((question) => buildQuestionView(question, state));
  const attempts = questionViews.flatMap((question) =>
    (question.progress?.attempts ?? []).map((attempt) => ({
      ...attempt,
      questionId: question.id,
      subjectId: question.subjectId
    }))
  );

  const answeredCount = questionViews.filter((question) => question.attemptCount > 0).length;
  const rightCount = attempts.filter((attempt) => attempt.isCorrect).length;
  const wrongCount = attempts.filter((attempt) => !attempt.isCorrect).length;
  const dueReviewCount = questionViews.filter((question) => question.dueReview).length;
  const favoriteCount = questionViews.filter((question) => question.isFavorite).length;
  const masteredCount = questionViews.filter((question) => (question.progress?.masteryLevel ?? 0) >= 4).length;
  const accuracy = attempts.length ? Math.round((rightCount / attempts.length) * 100) : 0;

  const last7Days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    const dayAttempts = attempts.filter((attempt) => sameDay(attempt.answeredAt, date));
    const correct = dayAttempts.filter((attempt) => attempt.isCorrect).length;

    return {
      date: date.toISOString(),
      label: formatShortDay(date),
      total: dayAttempts.length,
      correct,
      accuracy: dayAttempts.length ? Math.round((correct / dayAttempts.length) * 100) : 0
    };
  });

  const today = startOfDay(new Date());
  const answeredToday = attempts.filter((attempt) => sameDay(attempt.answeredAt, today)).length;

  const wrongBySubject = repository.subjects
    .map((subject) => {
      const subjectAttempts = attempts.filter((attempt) => attempt.subjectId === subject.id);
      const subjectWrong = subjectAttempts.filter((attempt) => !attempt.isCorrect).length;
      return {
        ...subject,
        wrongCount: subjectWrong,
        totalAttempts: subjectAttempts.length
      };
    })
    .filter((subject) => subject.totalAttempts > 0)
    .sort((left, right) => right.wrongCount - left.wrongCount);

  const activeDays = Array.from(
    new Set(attempts.map((attempt) => startOfDay(attempt.answeredAt).toISOString()))
  ).sort();

  let streak = 0;
  for (let index = activeDays.length - 1; index >= 0; index -= 1) {
    const current = new Date(activeDays[index]);
    const expected = new Date();
    expected.setHours(0, 0, 0, 0);
    expected.setDate(expected.getDate() - streak);
    if (current.getTime() === expected.getTime()) {
      streak += 1;
    } else if (streak === 0 && current.getTime() === expected.getTime() - 86400000) {
      continue;
    } else {
      break;
    }
  }

  return {
    answeredCount,
    rightCount,
    wrongCount,
    dueReviewCount,
    favoriteCount,
    masteredCount,
    accuracy,
    answeredToday,
    last7Days,
    wrongBySubject,
    streak
  };
}
