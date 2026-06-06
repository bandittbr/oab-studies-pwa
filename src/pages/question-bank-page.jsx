import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FilterBar } from "../components/filter-bar";
import { QuestionListItem } from "../components/question-list-item";
import { filtersToSearchParams } from "../lib/session-filters";
import { useStudy } from "../state/study-context";

const PAGE_SIZE = 40;

export function QuestionBankPage() {
  const {
    repository,
    state,
    createSession,
    getQuestionsByFilters,
    setFilter,
    resetFilters,
    setSessionMode,
    setSessionSize,
    toggleFavorite
  } = useStudy();

  const [searchParams] = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Sync search param from URL (e.g. quando vem do sidebar search)
  useEffect(() => {
    const urlSearch = searchParams.get("search");
    if (urlSearch && urlSearch !== state.filters.search) {
      setFilter("search", urlSearch);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deferredSearch = useDeferredValue(state.filters.search);
  const deferredFilters = useMemo(
    () => ({ ...state.filters, search: deferredSearch }),
    [deferredSearch, state.filters]
  );

  const questions = getQuestionsByFilters(deferredFilters);
  const visibleQuestions = questions.slice(0, visibleCount);
  const hasMore = visibleCount < questions.length;

  const sessionQuery = filtersToSearchParams(deferredFilters);
  const sessionUrl = `/resolver?${sessionQuery || ""}`;
  const previewCount = createSession({
    mode: state.studySession.mode,
    filters: deferredFilters,
    size: state.studySession.size
  }).length;

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [deferredFilters]);

  return (
    <div className="grid gap-4">
      {/* Filter bar */}
      <FilterBar
        filters={state.filters}
        subjects={repository.subjects}
        themes={repository.themes}
        exams={repository.exams}
        difficulties={repository.difficultyScale}
        onChange={setFilter}
        onReset={resetFilters}
      />

      {/* Session config */}
      <div className="glass-panel rounded-[var(--radius-xl)] p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Banco de questões</div>
            <h1 className="mt-1 text-2xl font-semibold text-[var(--text)]">
              {questions.length.toLocaleString("pt-BR")}{" "}
              <span className="text-[var(--muted)] font-normal text-lg">
                {questions.length !== 1 ? "questões" : "questão"}
              </span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to={`${sessionUrl}${sessionQuery ? "&" : ""}mode=${state.studySession.mode}&size=${state.studySession.size}`}
              className="rounded-[var(--radius-md)] bg-[var(--text)] px-4 py-2.5 text-sm font-semibold text-[var(--bg)]"
            >
              Iniciar sessão
            </Link>
            <Link to="/revisao" className="soft-panel rounded-[var(--radius-md)] px-4 py-2.5 text-sm font-semibold">
              Revisão
            </Link>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3 xl:grid-cols-4">
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Modo</span>
            <select
              value={state.studySession.mode}
              onChange={(e) => setSessionMode(e.target.value)}
              className="w-full rounded-[var(--radius-md)] border border-[var(--panel-border)] bg-white/5 px-3 py-2.5 text-sm text-[var(--text)]"
            >
              <option value="focus" className="bg-slate-900 text-white">Foco</option>
              <option value="mock" className="bg-slate-900 text-white">Simulado</option>
              <option value="random" className="bg-slate-900 text-white">Aleatório</option>
              <option value="review" className="bg-slate-900 text-white">Revisão</option>
              <option value="adaptive" className="bg-slate-900 text-white">Adaptativo</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Qtd. questões</span>
            <input
              type="number"
              min="5"
              max="80"
              value={state.studySession.size}
              onChange={(e) => setSessionSize(Number(e.target.value) || 5)}
              className="w-full rounded-[var(--radius-md)] border border-[var(--panel-border)] bg-white/5 px-3 py-2.5 text-sm text-[var(--text)]"
            />
          </label>

          <div className="soft-panel rounded-[var(--radius-md)] px-4 py-3 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Prévia</div>
            <div className="mt-1 text-sm font-semibold text-[var(--text)]">
              {previewCount} item{previewCount !== 1 ? "s" : ""} na sessão
            </div>
          </div>
        </div>
      </div>

      {/* Question list */}
      {questions.length === 0 ? (
        <div className="glass-panel rounded-[var(--radius-xl)] p-8 text-center text-[var(--muted)]">
          <p className="text-base">Nenhuma questão encontrada com os filtros atuais.</p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 rounded-[var(--radius-md)] soft-panel px-4 py-2.5 text-sm font-medium"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <div className="grid gap-3">
          {visibleQuestions.map((question) => (
            <QuestionListItem
              key={question.id}
              question={question}
              sessionUrl={sessionUrl}
              onToggleFavorite={toggleFavorite}
            />
          ))}

          {/* Load more */}
          {hasMore && (
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="glass-panel rounded-[var(--radius-xl)] py-5 text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition w-full"
            >
              Mostrar mais — exibindo {visibleCount} de {questions.length}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
