import { createContext, startTransition, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { useAuth } from "./auth-context";
import { loadUserProgress, saveUserProgress } from "../services/firestore-sync";
import { buildAiContext } from "../ai/contracts";
import { repository as seedRepository } from "../domain/repository";
import { buildQuestionView, filterQuestions, getDashboardMetrics, getDueReviewQuestions } from "../domain/selectors";
import { parseLawImportPayload } from "../importers/law-importer";
import { parseQuestionBatchPayload } from "../importers/question-batch-importer";
import { parseQuestionImportPayload } from "../importers/question-importer";
import { nowIso } from "../lib/date";
import { buildDefaultProgress, scheduleNextProgress } from "../lib/review-engine";
import { buildAdaptivePlan } from "../services/adaptive-study-engine";
import { generateArticleAiPack, generatePerformanceAiPack, generateQuestionAiPack } from "../services/ai-runtime";
import { buildOfficialExamResult, createOfficialExamSession, getLiveElapsedSeconds, pauseOfficialExamSession, resumeOfficialExamSession } from "../services/official-exam-engine";
import { parseProgressSnapshot } from "../services/progress-portability";
import { clearContentPacks, getContentPacks, removeContentPack, saveContentPack } from "../services/indexed-db";
import { buildRepository } from "../services/repository-builder";
import { autoLinkArticles } from "../services/law-linker";
import { buildIngestionReport } from "../services/ingestion-curation";
import { runGlobalSearch } from "../services/search-service";
import { createStudySession } from "../services/session-engine";
import { buildDefaultAnnotation, defaultStudyState, loadStudyState, saveStudyState } from "../lib/storage";

const StudyContext = createContext(null);

function getCorrectAlternativeId(question) {
  return question.alternatives.find((a) => a.correct)?.id;
}

function reducer(state, action) {
  switch (action.type) {
    case "toggle-theme":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    case "set-filter":
      return { ...state, filters: { ...state.filters, [action.key]: action.value } };
    case "reset-filters":
      return { ...state, filters: defaultStudyState.filters };
    case "set-daily-goal":
      return { ...state, preferences: { ...state.preferences, dailyGoalQuestions: Math.max(1, action.value) } };
    case "set-session-mode":
      return { ...state, studySession: { ...state.studySession, mode: action.mode } };
    case "set-session-size":
      return { ...state, studySession: { ...state.studySession, size: Math.max(5, action.size) } };
    case "toggle-favorite":
      return {
        ...state,
        favorites: state.favorites[action.questionId]
          ? Object.fromEntries(Object.entries(state.favorites).filter(([id]) => id !== action.questionId))
          : { ...state.favorites, [action.questionId]: true }
      };
    case "set-personal-difficulty": {
      const cur = state.questionProgress[action.questionId] ?? buildDefaultProgress();
      return { ...state, questionProgress: { ...state.questionProgress, [action.questionId]: { ...cur, personalDifficulty: action.value } } };
    }
    case "record-answer": {
      const cur = state.questionProgress[action.questionId] ?? buildDefaultProgress();
      return { ...state, questionProgress: { ...state.questionProgress, [action.questionId]: scheduleNextProgress(cur, action.payload) } };
    }
    case "save-official-exam-session":
      return { ...state, officialExamSessions: { ...state.officialExamSessions, [action.session.examId]: action.session } };
    case "save-question-note": {
      const cur = state.questionAnnotations[action.questionId] ?? buildDefaultAnnotation();
      return { ...state, questionAnnotations: { ...state.questionAnnotations, [action.questionId]: { ...cur, personalNote: action.note } } };
    }
    case "add-question-comment": {
      const cur = state.questionAnnotations[action.questionId] ?? buildDefaultAnnotation();
      return { ...state, questionAnnotations: { ...state.questionAnnotations, [action.questionId]: { ...cur, comments: [...cur.comments, action.comment] } } };
    }
    case "save-article-note": {
      const cur = state.articleAnnotations[action.articleId] ?? buildDefaultAnnotation();
      return { ...state, articleAnnotations: { ...state.articleAnnotations, [action.articleId]: { ...cur, personalNote: action.note } } };
    }
    case "save-ai-question-pack":
      return { ...state, aiOutputs: { ...state.aiOutputs, questions: { ...state.aiOutputs.questions, [action.questionId]: action.payload } } };
    case "save-ai-article-pack":
      return { ...state, aiOutputs: { ...state.aiOutputs, articles: { ...state.aiOutputs.articles, [action.articleId]: action.payload } } };
    case "save-ai-performance-pack":
      return { ...state, aiOutputs: { ...state.aiOutputs, performance: action.payload } };
    case "set-last-visited-subject":
      return { ...state, lastVisitedSubjectId: action.subjectId };
    case "set-last-session-filters":
      return { ...state, lastSessionFilters: action.filters };
    case "reset-progress":
      return defaultStudyState;
    case "replace-progress":
      return { ...defaultStudyState, ...action.state, version: defaultStudyState.version };
    default:
      return state;
  }
}

// Debounce simples para persistencia — evita writes excessivos no localStorage
function useDebouncedEffect(fn, deps, delay = 300) {
  const timerRef = useRef(null);
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(fn, delay);
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export function StudyProvider({ children }) {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(reducer, undefined, loadStudyState);
  const [contentPacks, setContentPacks] = useState([]);
  const [isBooting, setIsBooting] = useState(true);
  const [globalSearchQuery, setGlobalSearchQuery] = useState("");
  const [importState, setImportState] = useState({ status: "idle", message: "", report: null });

  // Persistencia local com debounce — evita writes a cada tecla/clique
  useDebouncedEffect(() => {
    saveStudyState(state);
  }, [state], 400);

  // ─── Cloud sync: carrega do Firestore quando usuário loga ─────────────────
  const cloudReadyRef = useRef(false);
  const prevUserIdRef = useRef(null);

  useEffect(() => {
    if (!user) {
      cloudReadyRef.current = false;
      prevUserIdRef.current = null;
      return;
    }
    // Evita recarregar se for o mesmo usuário
    if (prevUserIdRef.current === user.uid) return;
    prevUserIdRef.current = user.uid;
    cloudReadyRef.current = false;

    loadUserProgress(user.uid).then((cloudData) => {
      if (cloudData) {
        dispatch({ type: "replace-progress", state: cloudData });
        saveStudyState({ ...defaultStudyState, ...cloudData });
      }
      cloudReadyRef.current = true;
    });
  }, [user]);

  // Sincroniza state → Firestore com debounce (só após carregar dados da nuvem)
  useDebouncedEffect(() => {
    if (!user || !cloudReadyRef.current) return;
    saveUserProgress(user.uid, state);
  }, [state, user], 1500);

  // Aplica tema imediatamente sem debounce
  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
  }, [state.theme]);

  // Inicializa tema no boot
  useEffect(() => {
    document.documentElement.dataset.theme = loadStudyState().theme;
  }, []);

  // Carrega pacotes do IndexedDB uma única vez no boot
  useEffect(() => {
    let active = true;
    async function loadPacks() {
      try {
        const packs = await getContentPacks();
        if (active) setContentPacks(packs);
      } catch (err) {
        if (active) setImportState({ status: "error", message: err.message || "Falha ao carregar conteudo local.", report: null });
      } finally {
        if (active) setIsBooting(false);
      }
    }
    loadPacks();
    return () => { active = false; };
  }, []);

  // ─── Memoizações separadas por dependência ────────────────────────────────

  // Repositório só recalcula quando contentPacks muda (não em cada resposta)
  const liveRepository = useMemo(
    () => (contentPacks.length ? buildRepository(contentPacks) : seedRepository),
    [contentPacks]
  );

  // Métricas de dashboard — recalcula só quando progresso muda
  const dashboardMetrics = useMemo(
    () => getDashboardMetrics(liveRepository, state),
    [liveRepository, state.questionProgress, state.favorites]
  );

  // Plano adaptativo — depende de métricas e progresso
  const adaptivePlan = useMemo(
    () => buildAdaptivePlan(liveRepository, state, dashboardMetrics),
    [liveRepository, dashboardMetrics, state.questionProgress]
  );

  // Busca global — só recalcula quando query ou repositório mudam
  const globalSearchResults = useMemo(
    () => runGlobalSearch(liveRepository, globalSearchQuery),
    [liveRepository, globalSearchQuery]
  );

  // Stats por matéria — depende de progresso
  const subjectStats = useMemo(
    () =>
      liveRepository.subjects.map((subject) => {
        const qs = liveRepository.indexes.questionsBySubjectId[subject.id] ?? [];
        const answered = qs.filter((q) => state.questionProgress[q.id]?.attempts?.length > 0).length;
        const wrong = qs.filter((q) => {
          const p = state.questionProgress[q.id];
          return p && p.wrongCount > p.correctCount;
        }).length;
        return { ...subject, total: qs.length, answered, wrong, completion: qs.length ? Math.round((answered / qs.length) * 100) : 0 };
      }),
    [liveRepository, state.questionProgress]
  );

  // Questões devidas para revisão
  const dueReviewQuestions = useMemo(
    () => getDueReviewQuestions(liveRepository, state),
    [liveRepository, state.questionProgress]
  );

  // Questões filtradas — depende de filtros
  const filteredQuestions = useMemo(
    () => filterQuestions(liveRepository, state, state.filters),
    [liveRepository, state.filters]
  );

  // ─── Callbacks estáveis com useCallback ───────────────────────────────────

  const toggleTheme = useCallback(() => dispatch({ type: "toggle-theme" }), []);
  const setFilter = useCallback((key, value) => startTransition(() => dispatch({ type: "set-filter", key, value })), []);
  const resetFilters = useCallback(() => dispatch({ type: "reset-filters" }), []);
  const setDailyGoalQuestions = useCallback((value) => dispatch({ type: "set-daily-goal", value }), []);
  const setSessionMode = useCallback((mode) => dispatch({ type: "set-session-mode", mode }), []);
  const setSessionSize = useCallback((size) => dispatch({ type: "set-session-size", size }), []);
  const toggleFavorite = useCallback((questionId) => dispatch({ type: "toggle-favorite", questionId }), []);
  const setPersonalDifficulty = useCallback((questionId, value) => dispatch({ type: "set-personal-difficulty", questionId, value }), []);
  const saveQuestionNote = useCallback((questionId, note) => dispatch({ type: "save-question-note", questionId, note }), []);
  const saveArticleNote = useCallback((articleId, note) => dispatch({ type: "save-article-note", articleId, note }), []);
  const setLastVisitedSubject = useCallback((subjectId) => dispatch({ type: "set-last-visited-subject", subjectId }), []);
  const setLastSessionFilters = useCallback((filters) => dispatch({ type: "set-last-session-filters", filters }), []);
  const resetProgress = useCallback(() => dispatch({ type: "reset-progress" }), []);

  const addQuestionComment = useCallback((questionId, content, type = "manual") => {
    dispatch({
      type: "add-question-comment",
      questionId,
      comment: { id: `${questionId}-${Date.now()}`, type, content, createdAt: nowIso() }
    });
  }, []);

  const recordAnswer = useCallback((questionId, alternativeId) => {
    const question = liveRepository.indexes.questionsById[questionId];
    if (!question) return null;
    const correctAlternativeId = getCorrectAlternativeId(question);
    const isCorrect = alternativeId === correctAlternativeId;
    const answeredAt = nowIso();
    dispatch({ type: "record-answer", questionId, payload: { selectedAlternativeId: alternativeId, correctAlternativeId, isCorrect, answeredAt } });
    return { correctAlternativeId, isCorrect, answeredAt };
  }, [liveRepository]);

  const getOfficialExam = useCallback((examId) => liveRepository.indexes.officialExamById[examId] ?? null, [liveRepository]);

  const getOfficialExamSession = useCallback((examId) => state.officialExamSessions[examId] ?? null, [state.officialExamSessions]);

  const startOfficialExam = useCallback((examId, { restart = false } = {}) => {
    const officialExam = liveRepository.indexes.officialExamById[examId];
    if (!officialExam) return null;
    const existing = state.officialExamSessions[examId];
    if (existing && existing.status !== "completed" && !restart) {
      const resumed = resumeOfficialExamSession(existing);
      dispatch({ type: "save-official-exam-session", session: resumed });
      return resumed;
    }
    const session = createOfficialExamSession(officialExam);
    dispatch({ type: "save-official-exam-session", session });
    return session;
  }, [liveRepository, state.officialExamSessions]);

  const saveOfficialExamAnswer = useCallback((examId, questionId, selectedAlternativeId) => {
    const session = state.officialExamSessions[examId];
    if (!session) return null;
    const next = { ...session, answers: { ...session.answers, [questionId]: { selectedAlternativeId, answeredAt: nowIso() } } };
    dispatch({ type: "save-official-exam-session", session: next });
    return next;
  }, [state.officialExamSessions]);

  const toggleOfficialExamReviewMark = useCallback((examId, questionId) => {
    const session = state.officialExamSessions[examId];
    if (!session) return null;
    const set = new Set(session.markedForReview);
    set.has(questionId) ? set.delete(questionId) : set.add(questionId);
    const next = { ...session, markedForReview: Array.from(set) };
    dispatch({ type: "save-official-exam-session", session: next });
    return next;
  }, [state.officialExamSessions]);

  const goToOfficialExamQuestion = useCallback((examId, number) => {
    const session = state.officialExamSessions[examId];
    if (!session) return null;
    const next = { ...session, currentQuestionNumber: number };
    dispatch({ type: "save-official-exam-session", session: next });
    return next;
  }, [state.officialExamSessions]);

  const finalizeOfficialExam = useCallback((examId) => {
    const session = state.officialExamSessions[examId];
    const exam = liveRepository.indexes.officialExamById[examId];
    if (!session || !exam) return null;
    const paused = pauseOfficialExamSession(session);
    const result = buildOfficialExamResult(paused, exam, liveRepository);
    const completed = { ...paused, status: "completed", completedAt: nowIso(), result };
    dispatch({ type: "save-official-exam-session", session: completed });
    return completed;
  }, [liveRepository, state.officialExamSessions]);

  const getOfficialExamElapsedSeconds = useCallback((examId) => {
    return getLiveElapsedSeconds(state.officialExamSessions[examId]);
  }, [state.officialExamSessions]);

  const getQuestion = useCallback((questionId) => {
    const q = liveRepository.indexes.questionsById[questionId];
    return q ? buildQuestionView(q, state) : null;
  }, [liveRepository, state]);

  const getQuestionAnnotation = useCallback((questionId) => state.questionAnnotations[questionId] ?? buildDefaultAnnotation(), [state.questionAnnotations]);
  const getArticleAnnotation = useCallback((articleId) => state.articleAnnotations[articleId] ?? buildDefaultAnnotation(), [state.articleAnnotations]);
  const getQuestionAiPack = useCallback((questionId) => state.aiOutputs.questions[questionId] ?? null, [state.aiOutputs.questions]);
  const getArticleAiPack = useCallback((articleId) => state.aiOutputs.articles[articleId] ?? null, [state.aiOutputs.articles]);
  const getPerformanceAiPack = useCallback(() => state.aiOutputs.performance ?? null, [state.aiOutputs.performance]);

  const getQuestionResult = useCallback((questionId) => {
    const p = state.questionProgress[questionId];
    return p?.attempts?.at(-1) ?? null;
  }, [state.questionProgress]);

  const getQuestionsBySubject = useCallback((subjectId) => {
    return (liveRepository.indexes.questionsBySubjectId[subjectId] ?? []).map((q) => buildQuestionView(q, state));
  }, [liveRepository, state]);

  const getQuestionsByFilters = useCallback((filters) => filterQuestions(liveRepository, state, filters), [liveRepository, state]);

  const createSession = useCallback(({ mode, filters, size }) => {
    const qs = filterQuestions(liveRepository, state, filters);
    return createStudySession({ mode, questions: qs, sessionSize: size });
  }, [liveRepository, state]);

  const generateQuestionAiPackFn = useCallback((questionId, selectedAlternativeId) => {
    const question = liveRepository.indexes.questionsById[questionId];
    if (!question) return null;
    const payload = generateQuestionAiPack(question, selectedAlternativeId);
    dispatch({ type: "save-ai-question-pack", questionId, payload });
    return payload;
  }, [liveRepository]);

  const generateArticleAiPackFn = useCallback((articleId) => {
    const article = liveRepository.indexes.lawArticleById[articleId];
    if (!article) return null;
    const payload = generateArticleAiPack(article);
    dispatch({ type: "save-ai-article-pack", articleId, payload });
    return payload;
  }, [liveRepository]);

  const generatePerformanceAiPackFn = useCallback(() => {
    const payload = generatePerformanceAiPack({ adaptivePlan, dashboardMetrics });
    dispatch({ type: "save-ai-performance-pack", payload });
    return payload;
  }, [adaptivePlan, dashboardMetrics]);

  const importProgressSnapshot = useCallback((rawSnapshot) => {
    const nextState = parseProgressSnapshot(rawSnapshot);
    dispatch({ type: "replace-progress", state: nextState });
  }, []);

  // Import functions (async, stable refs)
  const importQuestionPackFn = useCallback(async (rawPayload) => {
    try {
      setImportState({ status: "loading", message: "Importando questoes...", report: null });
      const parsedPack = parseQuestionImportPayload(rawPayload);
      const pack = {
        ...parsedPack,
        content: {
          ...parsedPack.content,
          questions: (parsedPack.content.questions ?? []).map((q) => ({
            ...q,
            relatedArticleIds: q.relatedArticleIds?.length
              ? q.relatedArticleIds
              : autoLinkArticles({ statement: q.statement, explanation: q.explanation, support: q.support, theme: liveRepository.indexes.themeById[q.themeId]?.label, tags: q.tags }, liveRepository.lawArticles)
          }))
        }
      };
      const report = buildIngestionReport({ pack, existingRepository: liveRepository });
      if (report.summary.issues > 0) {
        setImportState({ status: "error", message: `Importacao bloqueada: ${report.summary.issues} inconsistencias.`, report });
        throw new Error("Importacao com inconsistencias obrigatorias.");
      }
      await saveContentPack(pack);
      setContentPacks(await getContentPacks());
      setImportState({ status: "success", message: `${pack.content.questions.length} questoes importadas em ${pack.packName}.`, report });
      return pack;
    } catch (err) {
      if (err.message !== "Importacao com inconsistencias obrigatorias.") {
        setImportState({ status: "error", message: err.message || "Falha ao importar.", report: null });
      }
      throw err;
    }
  }, [liveRepository]);

  const importQuestionBatchFn = useCallback(async (rawPayload) => {
    try {
      setImportState({ status: "loading", message: "Processando lote oficial...", report: null });
      const batch = parseQuestionBatchPayload(rawPayload);
      const enriched = batch.packs.map((pack) => ({
        ...pack,
        content: {
          ...pack.content,
          questions: (pack.content.questions ?? []).map((q) => ({
            ...q,
            relatedArticleIds: q.relatedArticleIds?.length
              ? q.relatedArticleIds
              : autoLinkArticles({ statement: q.statement, explanation: q.explanation, support: q.support, theme: liveRepository.indexes.themeById[q.themeId]?.label, tags: q.tags }, liveRepository.lawArticles)
          }))
        }
      }));
      for (const pack of enriched) {
        const report = buildIngestionReport({ pack, existingRepository: liveRepository });
        if (report.summary.issues > 0) {
          setImportState({ status: "error", message: `Lote bloqueado: ${report.summary.issues} inconsistencias.`, report });
          throw new Error("Lote com inconsistencias.");
        }
        await saveContentPack(pack);
      }
      setContentPacks(await getContentPacks());
      const finalReport = buildIngestionReport({ pack: { packId: batch.batchId, packName: batch.batchName, content: batch.merged }, existingRepository: liveRepository });
      setImportState({ status: "success", message: `${batch.merged.officialExams.length} provas, ${batch.merged.questions.length} questoes no lote.`, report: finalReport });
      return batch;
    } catch (err) {
      if (err.message !== "Lote com inconsistencias.") setImportState({ status: "error", message: err.message || "Falha ao importar lote.", report: null });
      throw err;
    }
  }, [liveRepository]);

  const importLawPackFn = useCallback(async (rawPayload) => {
    try {
      setImportState({ status: "loading", message: "Importando lei seca...", report: null });
      const pack = parseLawImportPayload(rawPayload);
      await saveContentPack(pack);
      setContentPacks(await getContentPacks());
      setImportState({ status: "success", message: `${pack.content.lawArticles.length} artigos importados em ${pack.packName}.`, report: null });
      return pack;
    } catch (err) {
      setImportState({ status: "error", message: err.message || "Falha ao importar lei seca.", report: null });
      throw err;
    }
  }, []);

  const removeContentPackFn = useCallback(async (packId) => {
    await removeContentPack(packId);
    setContentPacks(await getContentPacks());
  }, []);

  const clearImportedContentFn = useCallback(async () => {
    await clearContentPacks();
    setContentPacks([]);
  }, []);

  // ─── Valor do contexto — referência estável, não recria funções ───────────
  const value = useMemo(() => ({
    repository: liveRepository,
    isBooting,
    state,
    importState,
    stats: {
      totalQuestions: liveRepository.questions.length,
      answeredCount: dashboardMetrics.answeredCount,
      rightCount: dashboardMetrics.rightCount,
      wrongCount: dashboardMetrics.wrongCount,
      accuracy: dashboardMetrics.accuracy
    },
    subjectStats,
    dashboardMetrics,
    adaptivePlan,
    aiContext: buildAiContext({ repository: liveRepository, state, dashboardMetrics }),
    officialExams: liveRepository.officialExams,
    dueReviewQuestions,
    filteredQuestions,
    globalSearchQuery,
    setGlobalSearchQuery,
    globalSearchResults,
    contentPacks,
    // Actions
    toggleTheme,
    setFilter,
    resetFilters,
    setDailyGoalQuestions,
    setSessionMode,
    setSessionSize,
    toggleFavorite,
    setPersonalDifficulty,
    saveQuestionNote,
    addQuestionComment,
    saveArticleNote,
    setLastVisitedSubject,
    setLastSessionFilters,
    recordAnswer,
    getOfficialExam,
    getOfficialExamSession,
    startOfficialExam,
    saveOfficialExamAnswer,
    toggleOfficialExamReviewMark,
    goToOfficialExamQuestion,
    finalizeOfficialExam,
    getOfficialExamElapsedSeconds,
    resetProgress,
    importQuestionPack: importQuestionPackFn,
    importQuestionBatch: importQuestionBatchFn,
    importLawPack: importLawPackFn,
    removeContentPack: removeContentPackFn,
    clearImportedContent: clearImportedContentFn,
    importProgressSnapshot,
    getQuestion,
    getQuestionAnnotation,
    getArticleAnnotation,
    getQuestionAiPack,
    getArticleAiPack,
    getPerformanceAiPack,
    generateQuestionAiPack: generateQuestionAiPackFn,
    generateArticleAiPack: generateArticleAiPackFn,
    generatePerformanceAiPack: generatePerformanceAiPackFn,
    getQuestionResult,
    getQuestionsBySubject,
    getQuestionsByFilters,
    createSession
  }), [
    liveRepository, isBooting, state, importState,
    subjectStats, dashboardMetrics, adaptivePlan,
    dueReviewQuestions, filteredQuestions,
    globalSearchQuery, globalSearchResults, contentPacks,
    toggleTheme, setFilter, resetFilters, setDailyGoalQuestions,
    setSessionMode, setSessionSize, toggleFavorite, setPersonalDifficulty,
    saveQuestionNote, addQuestionComment, saveArticleNote,
    setLastVisitedSubject, setLastSessionFilters, recordAnswer,
    getOfficialExam, getOfficialExamSession, startOfficialExam,
    saveOfficialExamAnswer, toggleOfficialExamReviewMark,
    goToOfficialExamQuestion, finalizeOfficialExam, getOfficialExamElapsedSeconds,
    resetProgress, importQuestionPackFn, importQuestionBatchFn,
    importLawPackFn, removeContentPackFn, clearImportedContentFn,
    importProgressSnapshot, getQuestion, getQuestionAnnotation,
    getArticleAnnotation, getQuestionAiPack, getArticleAiPack,
    getPerformanceAiPack, generateQuestionAiPackFn, generateArticleAiPackFn,
    generatePerformanceAiPackFn, getQuestionResult, getQuestionsBySubject,
    getQuestionsByFilters, createSession
  ]);

  return <StudyContext.Provider value={value}>{children}</StudyContext.Provider>;
}

export function useStudy() {
  const ctx = useContext(StudyContext);
  if (!ctx) throw new Error("useStudy must be used within StudyProvider");
  return ctx;
}