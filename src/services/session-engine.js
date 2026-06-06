function shuffle(items) {
  const clone = [...items];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[randomIndex]] = [clone[randomIndex], clone[index]];
  }
  return clone;
}

function byPerformanceWeight(question) {
  const progress = question.progress;
  if (!progress) return 5;
  if (progress.needsReinforcement) return 10;
  return Math.max(1, 6 - (progress.masteryLevel ?? 0));
}

function weightedSort(questions) {
  return [...questions].sort((a, b) => byPerformanceWeight(b) - byPerformanceWeight(a));
}

export function createStudySession({ mode, questions, sessionSize = 10 }) {
  if (!questions || questions.length === 0) return [];

  const size = Math.max(1, Math.min(sessionSize, questions.length));

  switch (mode) {
    case "focus":
      return weightedSort(questions).slice(0, size);
    case "mock":
      return questions.slice(0, Math.min(questions.length, Math.max(size, 20)));
    case "random":
      return shuffle(questions).slice(0, size);
    case "review": {
      const reviewable = questions.filter((q) => q.isWrong || q.dueReview);
      const pool = reviewable.length > 0 ? reviewable : questions;
      return weightedSort(pool).slice(0, size);
    }
    case "adaptive":
      return weightedSort(shuffle(questions)).slice(0, size);
    default:
      return questions.slice(0, size);
  }
}
