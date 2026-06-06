import { nowIso } from "../lib/date";

export function createOfficialExamSession(officialExam) {
  return {
    examId: officialExam.id,
    examLabel: officialExam.label,
    startedAt: nowIso(),
    lastResumedAt: nowIso(),
    elapsedSeconds: 0,
    status: "in_progress",
    currentQuestionNumber: officialExam.questionOrder[0]?.number ?? 1,
    answers: {},
    markedForReview: [],
    questionOrder: officialExam.questionOrder.map((item) => ({
      number: item.number,
      questionId: item.questionId
    })),
    completedAt: null,
    result: null
  };
}

export function getLiveElapsedSeconds(session, now = Date.now()) {
  if (!session) {
    return 0;
  }

  if (session.status !== "in_progress" || !session.lastResumedAt) {
    return session.elapsedSeconds;
  }

  const delta = Math.max(0, Math.floor((now - new Date(session.lastResumedAt).getTime()) / 1000));
  return session.elapsedSeconds + delta;
}

export function pauseOfficialExamSession(session) {
  return {
    ...session,
    elapsedSeconds: getLiveElapsedSeconds(session),
    lastResumedAt: null
  };
}

export function resumeOfficialExamSession(session) {
  if (session.status !== "in_progress") {
    return session;
  }

  return {
    ...session,
    lastResumedAt: nowIso()
  };
}

export function buildOfficialExamResult(session, officialExam, repository) {
  const questions = officialExam.questions;
  const total = questions.length;
  const answered = questions.filter((item) => session.answers[item.questionId]?.selectedAlternativeId).length;
  const correct = questions.filter((item) => {
    const selected = session.answers[item.questionId]?.selectedAlternativeId;
    const correctAlternativeId = item.question.alternatives.find((alternative) => alternative.correct)?.id;
    return selected && selected === correctAlternativeId;
  }).length;

  return {
    total,
    answered,
    blank: total - answered,
    correct,
    wrong: answered - correct,
    accuracy: answered ? Math.round((correct / answered) * 100) : 0,
    reviewItems: questions.map((item) => {
      const answer = session.answers[item.questionId];
      const correctAlternativeId = item.question.alternatives.find((alternative) => alternative.correct)?.id;
      return {
        number: item.number,
        questionId: item.questionId,
        selectedAlternativeId: answer?.selectedAlternativeId ?? null,
        correctAlternativeId,
        isCorrect: answer?.selectedAlternativeId === correctAlternativeId,
        question: repository.indexes.questionsById[item.questionId]
      };
    })
  };
}
