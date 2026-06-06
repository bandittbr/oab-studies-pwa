import { nowIso } from "./date";

const STORAGE_KEY = "lexflow-oab-state-v3";

export const defaultStudyState = {
  version: 3,
  theme: "dark",
  filters: {
    subjectId: "all",
    themeId: "all",
    examId: "all",
    year: "all",
    difficulty: "all",
    onlyWrong: false,
    onlyFavorites: false,
    search: ""
  },
  preferences: {
    dailyGoalQuestions: 12
  },
  studySession: {
    mode: "focus",
    size: 12
  },
  favorites: {},
  questionProgress: {},
  questionAnnotations: {},
  articleAnnotations: {},
  aiOutputs: {
    questions: {},
    articles: {},
    performance: null
  },
  officialExamSessions: {},
  lastVisitedSubjectId: "constitucional",
  lastSessionFilters: null
};

function buildDefaultAnnotation() {
  return {
    personalNote: "",
    comments: []
  };
}

function migrateLegacyState(legacyState) {
  if (!legacyState || legacyState.version === 3) {
    return legacyState;
  }

  const questionProgress = Object.entries(legacyState.answered ?? {}).reduce(
    (accumulator, [questionId, answer]) => {
      accumulator[questionId] = {
        attempts: [
          {
            selectedAlternativeId: answer.selectedAlternativeId,
            correctAlternativeId: answer.correctAlternativeId,
            isCorrect: answer.isCorrect,
            answeredAt: answer.answeredAt ?? nowIso()
          }
        ],
        correctCount: answer.isCorrect ? 1 : 0,
        wrongCount: answer.isCorrect ? 0 : 1,
        consecutiveCorrect: answer.isCorrect ? 1 : 0,
        masteryLevel: answer.isCorrect ? 1 : 0,
        easeFactor: 1.8,
        reviewIntervalHours: answer.isCorrect ? 24 : 8,
        nextReviewAt: answer.isCorrect ? null : nowIso(),
        needsReinforcement: !answer.isCorrect,
        personalDifficulty: "steady",
        lastSelectedAlternativeId: answer.selectedAlternativeId,
        lastAnsweredAt: answer.answeredAt ?? nowIso()
      };
      return accumulator;
    },
    {}
  );

  return {
    ...defaultStudyState,
    theme: legacyState.theme ?? defaultStudyState.theme,
    lastVisitedSubjectId: legacyState.lastVisitedSubjectId ?? defaultStudyState.lastVisitedSubjectId,
    questionProgress,
    officialExamSessions: legacyState.officialExamSessions ?? {},
    questionAnnotations: legacyState.questionAnnotations ?? {},
    articleAnnotations: legacyState.articleAnnotations ?? {},
    aiOutputs: legacyState.aiOutputs ?? defaultStudyState.aiOutputs
  };
}

export function loadStudyState() {
  if (typeof window === "undefined") {
    return defaultStudyState;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const legacyRaw = window.localStorage.getItem("lexflow-oab-state-v1");
      if (legacyRaw) {
        return {
          ...defaultStudyState,
          ...migrateLegacyState(JSON.parse(legacyRaw))
        };
      }

      const v2Raw = window.localStorage.getItem("lexflow-oab-state-v2");
      if (!v2Raw) {
        return defaultStudyState;
      }

      return {
        ...defaultStudyState,
        ...migrateLegacyState(JSON.parse(v2Raw))
      };
    }

    return {
      ...defaultStudyState,
      ...migrateLegacyState(JSON.parse(raw))
    };
  } catch {
    return defaultStudyState;
  }
}

export function saveStudyState(state) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export { buildDefaultAnnotation };
