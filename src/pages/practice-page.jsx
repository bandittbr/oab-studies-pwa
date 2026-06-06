import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { QuestionCard } from "../components/question-card";
import { QuestionCommentaryPanel } from "../components/question-commentary-panel";
import { filtersFromSearchParams } from "../lib/session-filters";
import { useStudy } from "../state/study-context";

/* ── Session list sidebar (desktop/drawer) ─────────── */
function SessionList({ questions, currentIndex, getQuestionResult, onGoTo }) {
  return (
    <div className="space-y-1.5">
      {questions.map((q, idx) => {
        const result = getQuestionResult(q.id);
        const dot = result
          ? result.isCorrect
            ? "bg-emerald-400"
            : "bg-rose-400"
          : "bg-[var(--muted)]/40";

        return (
          <button
            key={q.id}
            type="button"
            onClick={() => onGoTo(idx)}
            className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-left transition ${
              currentIndex === idx
                ? "bg-[var(--text)] text-[var(--bg)]"
                : "soft-panel text-[var(--text)] hover:border-[var(--border-focus)]"
            }`}
          >
            <span className={`h-2 w-2 shrink-0 rounded-full ${currentIndex === idx ? "bg-[var(--bg)]" : dot}`} />
            <span className="flex-1 truncate text-sm">
              {idx + 1}. {q.statement.slice(0, 52)}…
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function PracticePage() {
  const { subjectId } = useParams();
  const [searchParams] = useSearchParams();
  const [showList, setShowList] = useState(false);

  const {
    createSession,
    addQuestionComment,
    generateQuestionAiPack,
    getQuestionAiPack,
    getQuestionAnnotation,
    state,
    getQuestionResult,
    getQuestionsByFilters,
    recordAnswer,
    setLastSessionFilters,
    setLastVisitedSubject,
    setPersonalDifficulty,
    saveQuestionNote,
    toggleFavorite
  } = useStudy();

  const sessionMode = searchParams.get("mode") ?? state.studySession.mode;
  const sessionSize = Number(searchParams.get("size") ?? state.studySession.size);

  const derivedFilters = useMemo(() => {
    const base = filtersFromSearchParams(searchParams, state.lastSessionFilters ?? state.filters);
    return subjectId ? { ...base, subjectId } : base;
  }, [searchParams, state.filters, state.lastSessionFilters, subjectId]);

  // ── Sessão estável: só recria quando filtros/modo/tamanho mudam, NÃO quando progresso muda ──
  const sessionKey = [
    derivedFilters.subjectId, derivedFilters.themeId, derivedFilters.examId,
    derivedFilters.year, derivedFilters.difficulty,
    String(derivedFilters.onlyWrong), String(derivedFilters.onlyFavorites),
    derivedFilters.search, sessionMode, sessionSize
  ].join("|");

  const sessionKeyRef = useRef(null);
  const sessionRef = useRef([]);

  if (sessionKeyRef.current !== sessionKey) {
    sessionKeyRef.current = sessionKey;
    const filtered = getQuestionsByFilters(derivedFilters);
    sessionRef.current = createSession({
      mode: sessionMode,
      filters: derivedFilters,
      size: sessionSize || filtered.length
    });
  }

  const questions = sessionRef.current;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAlternativeId, setSelectedAlternativeId] = useState("");
  const [confirmedAlternativeId, setConfirmedAlternativeId] = useState("");
  const [draftComment, setDraftComment] = useState("");

  const currentQuestion = questions[currentIndex];
  const questionAnnotation = currentQuestion
    ? getQuestionAnnotation(currentQuestion.id)
    : { personalNote: "", comments: [] };
  const questionAiPack = currentQuestion ? getQuestionAiPack(currentQuestion.id) : null;

  useEffect(() => {
    setLastSessionFilters(derivedFilters);
    if (derivedFilters.subjectId !== "all") setLastVisitedSubject(derivedFilters.subjectId);
  }, [derivedFilters, setLastSessionFilters, setLastVisitedSubject]);

  useEffect(() => {
    const targetId = searchParams.get("questao") ?? searchParams.get("questionId");
    if (!targetId) return;
    const idx = questions.findIndex((q) => q.id === targetId);
    if (idx >= 0) setCurrentIndex(idx);
  }, [questions, searchParams]);

  // Restaura resposta anterior ao MUDAR de questão (compara por ID, não por referência de objeto)
  const prevQuestionIdRef = useRef(null);
  useEffect(() => {
    if (!currentQuestion) return;
    if (prevQuestionIdRef.current === currentQuestion.id) return;
    prevQuestionIdRef.current = currentQuestion.id;
    const result = getQuestionResult(currentQuestion.id);
    setSelectedAlternativeId(result?.selectedAlternativeId ?? "");
    setConfirmedAlternativeId(result?.selectedAlternativeId ?? "");
  }, [currentQuestion?.id, getQuestionResult]);

  if (!currentQuestion) {
    return (
      <div className="glass-panel rounded-[var(--radius-xl)] p-8 sm:p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--text)]/8">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7 text-[var(--muted)]">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-[var(--text)]">Nenhuma questão nessa sessão</h2>
        <p className="mt-2 max-w-sm mx-auto text-sm leading-[1.7] text-[var(--muted)]">
          Nenhuma questão encontrada com os filtros atuais. Experimente uma das matérias abaixo.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["etica","constitucional","civil","penal","processo-civil","administrativo"].map((sid) => (
            <Link
              key={sid}
              to={`/resolver?subjectId=${sid}&mode=focus&size=10`}
              className="soft-panel rounded-full px-4 py-2 text-xs font-semibold text-[var(--muted)] hover:text-[var(--text)] transition capitalize"
            >
              {sid.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-3">
          <Link to="/questoes" className="rounded-[var(--radius-md)] bg-[var(--text)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)]">
            Banco de questões
          </Link>
          <Link to="/resolver?mode=random&size=10" className="soft-panel rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold">
            Sessão aleatória
          </Link>
        </div>
      </div>
    );
  }

  function handleConfirm() {
    if (!selectedAlternativeId || confirmedAlternativeId) return;
    recordAnswer(currentQuestion.id, selectedAlternativeId);
    setConfirmedAlternativeId(selectedAlternativeId);
  }

  function goToIndex(next) {
    setCurrentIndex(Math.max(0, Math.min(next, questions.length - 1)));
  }

  function handleRetry() {
    setConfirmedAlternativeId("");
    setSelectedAlternativeId("");
  }

  const result = getQuestionResult(currentQuestion.id);
  const statusText = result
    ? result.isCorrect
      ? "Questão resolvida corretamente"
      : "Questão enviada para reforço"
    : "Escolha uma alternativa e confirme";

  const answeredCount = questions.filter((q) => getQuestionResult(q.id)).length;
  const correctCount = questions.filter((q) => getQuestionResult(q.id)?.isCorrect).length;

  return (
    <div className="grid gap-4 xl:grid-cols-[280px_1fr]">
      {/* Desktop sidebar */}
      <aside className="hidden xl:flex flex-col gap-4">
        <div className="glass-panel rounded-[var(--radius-xl)] p-4">
          <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)] mb-1">Sessão ativa</div>
          <div className="text-lg font-semibold text-[var(--text)]">
            {derivedFilters.subjectId === "all" ? "Mix personalizado" : currentQuestion.subject.label}
          </div>
          <div className="text-xs text-[var(--muted)] mt-0.5 capitalize">{sessionMode}</div>
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-[var(--bg-soft)]">
            <div
              className="h-full rounded-full bg-sky-400 transition-all duration-500"
              style={{ width: `${questions.length > 0 ? (answeredCount / questions.length) * 100 : 0}%` }}
            />
          </div>
          <div className="mt-2 flex gap-4 text-xs text-[var(--muted)]">
            <span><strong className="text-[var(--text)]">{answeredCount}</strong> respondidas</span>
            <span><strong className="text-emerald-300">{correctCount}</strong> acertos</span>
            <span><strong className="text-[var(--text)]">{questions.length}</strong> total</span>
          </div>
        </div>
        <div className="glass-panel rounded-[var(--radius-xl)] p-4 flex-1 overflow-y-auto max-h-[calc(100vh-220px)]">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-3">
            Questões — {questions.length}
          </div>
          <SessionList
            questions={questions}
            currentIndex={currentIndex}
            getQuestionResult={getQuestionResult}
            onGoTo={goToIndex}
          />
        </div>
      </aside>

      {/* Mobile session bar */}
      <div className="xl:hidden glass-panel rounded-[var(--radius-lg)] px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <span className="text-sm font-medium text-[var(--text)]">
            {derivedFilters.subjectId === "all" ? "Mix" : currentQuestion.subject.label}
          </span>
          <span className="ml-2 text-xs text-[var(--muted)]">
            {currentIndex + 1}/{questions.length}
          </span>
        </div>
        <span className="text-xs text-[var(--muted)]">
          {answeredCount} resp. · {correctCount} ✓
        </span>
        <button
          type="button"
          onClick={() => setShowList((v) => !v)}
          className="soft-panel rounded-[var(--radius-sm)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]"
        >
          {showList ? "Fechar" : "Lista"}
        </button>
      </div>

      {/* Mobile question list drawer */}
      {showList && (
        <div className="xl:hidden glass-panel rounded-[var(--radius-lg)] p-4 max-h-72 overflow-y-auto">
          <SessionList
            questions={questions}
            currentIndex={currentIndex}
            getQuestionResult={getQuestionResult}
            onGoTo={(idx) => { goToIndex(idx); setShowList(false); }}
          />
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col gap-4">
        <div className="glass-panel rounded-[var(--radius-lg)] px-4 py-2.5 flex items-center justify-between gap-3">
          <span className="text-xs text-[var(--muted)]">{statusText}</span>
          <span className="text-xs text-[var(--muted)]">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>

        <QuestionCard
          question={currentQuestion}
          selectedAlternativeId={selectedAlternativeId}
          confirmedAlternativeId={confirmedAlternativeId}
          questionResult={result}
          onSelect={setSelectedAlternativeId}
          onConfirm={handleConfirm}
          onRetry={handleRetry}
          onPrevious={() => goToIndex(currentIndex - 1)}
          onNext={() => goToIndex(currentIndex + 1)}
          onToggleFavorite={toggleFavorite}
          onSetPersonalDifficulty={setPersonalDifficulty}
          currentIndex={currentIndex}
          total={questions.length}
          statusText={statusText}
          subjectLabel={currentQuestion.subject.label}
        />

        <QuestionCommentaryPanel
          annotation={questionAnnotation}
          aiPack={questionAiPack}
          draftComment={draftComment}
          onDraftCommentChange={setDraftComment}
          onAddManualComment={() => {
            if (!draftComment.trim()) return;
            addQuestionComment(currentQuestion.id, draftComment.trim(), "manual");
            setDraftComment("");
          }}
          onGenerateAiComment={() => generateQuestionAiPack(currentQuestion.id)}
          onNoteChange={(note) => saveQuestionNote(currentQuestion.id, note)}
        />
      </div>
    </div>
  );
}
urrentIndex={currentIndex}
          total={questions.length}
          statusText={statusText}
          subjectLabel={currentQuestion.subject.label}
        />

        <QuestionCommentaryPanel
          annotation={questionAnnotation}
          aiPack={questionAiPack}
          draftComment={draftComment}
          onDraftCommentChange={setDraftComment}
          onAddManualComment={() => {
            if (!draftComment.trim()) return;
            addQuestionComment(currentQuestion.id, draftComment.trim(), "manual");
            setDraftComment("");
          }}
          onGenerateAiComment={() => generateQuestionAiPack(currentQuestion.id)}
          onNoteChange={(note) => saveQuestionNote(currentQuestion.id, note)}
        />
      </div>
    </div>
  );
}
