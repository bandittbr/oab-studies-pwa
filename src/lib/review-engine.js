import { addHours, nowIso } from "./date";

const INITIAL_EASE = 1.8;

export function buildDefaultProgress() {
  return {
    attempts: [],
    correctCount: 0,
    wrongCount: 0,
    consecutiveCorrect: 0,
    masteryLevel: 0,
    easeFactor: INITIAL_EASE,
    reviewIntervalHours: 0,
    nextReviewAt: null,
    needsReinforcement: false,
    personalDifficulty: "steady",
    lastSelectedAlternativeId: null,
    lastAnsweredAt: null
  };
}

export function scheduleNextProgress(previousProgress, answerPayload) {
  const progress = previousProgress ?? buildDefaultProgress();
  const timestamp = answerPayload.answeredAt ?? nowIso();
  const attempts = [...progress.attempts, answerPayload].slice(-40);

  if (!answerPayload.isCorrect) {
    return {
      ...progress,
      attempts,
      wrongCount: progress.wrongCount + 1,
      consecutiveCorrect: 0,
      masteryLevel: Math.max(0, progress.masteryLevel - 1),
      easeFactor: Math.max(1.3, progress.easeFactor - 0.15),
      reviewIntervalHours: 8,
      nextReviewAt: addHours(timestamp, 8),
      needsReinforcement: true,
      lastSelectedAlternativeId: answerPayload.selectedAlternativeId,
      lastAnsweredAt: timestamp
    };
  }

  const nextConsecutive = progress.consecutiveCorrect + 1;
  const computedInterval =
    progress.reviewIntervalHours === 0
      ? 24
      : Math.min(24 * 21, Math.round(progress.reviewIntervalHours * progress.easeFactor));

  return {
    ...progress,
    attempts,
    correctCount: progress.correctCount + 1,
    consecutiveCorrect: nextConsecutive,
    masteryLevel: Math.min(5, progress.masteryLevel + 1),
    easeFactor: Math.min(3, progress.easeFactor + 0.08),
    reviewIntervalHours: computedInterval,
    nextReviewAt: addHours(timestamp, computedInterval),
    needsReinforcement: nextConsecutive < 2,
    lastSelectedAlternativeId: answerPayload.selectedAlternativeId,
    lastAnsweredAt: timestamp
  };
}
