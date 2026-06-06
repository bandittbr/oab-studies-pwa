import { memo } from "react";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ALTERNATIVA — prova oficial (sem gabarito imediato)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function altClasses(isSelected) {
  return isSelected
    ? "border-[var(--brand)]/55 bg-[var(--brand)]/9 text-[var(--text)]"
    : "border-[var(--panel-border)] bg-transparent text-[var(--text)] hover:border-[var(--border-hover)] hover:bg-white/4";
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   OFFICIAL EXAM QUESTION CARD
   — limpo, sério, sem ruído visual
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export const OfficialExamQuestionCard = memo(function OfficialExamQuestionCard({
  questionEntry,
  selectedAlternativeId,
  isMarkedForReview,
  totalQuestions,
  onSelect,
  onToggleReview,
  onPrevious,
  onNext
}) {
  const { number, question } = questionEntry;
  const hasPrev = number > 1;
  const hasNext = number < totalQuestions;

  return (
    <section className="glass-panel rounded-[var(--r-xl)] overflow-hidden flex flex-col">
      {/* Barra de progresso */}
      <div className="h-0.5 bg-white/5 shrink-0">
        <div
          className="h-full bg-[var(--brand)] transition-all duration-500"
          style={{ width: `${(number / totalQuestions) * 100}%` }}
        />
      </div>

      <div className="flex flex-col gap-6 p-5 sm:p-7 flex-1">
        {/* ── Header mínimo ── */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Questão {number}
            </span>
            <span className="h-3.5 w-px bg-[var(--panel-border)]" />
            <span className="text-[0.7rem] text-[var(--muted)]">
              {question.subject?.label ?? ""}
            </span>
          </div>

          {/* Marcar revisão */}
          <button
            type="button"
            onClick={onToggleReview}
            aria-label={isMarkedForReview ? "Desmarcar revisão" : "Marcar para revisão"}
            className={`
              flex items-center gap-1.5 rounded-full px-3 py-1.5
              text-xs font-semibold transition min-h-[36px]
              ${isMarkedForReview
                ? "bg-amber-400/20 text-amber-200 border border-amber-400/30"
                : "soft-panel text-[var(--muted)] hover:text-[var(--text)]"}
            `}
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 shrink-0">
              <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2z"/>
            </svg>
            <span>{isMarkedForReview ? "Marcada" : "Marcar"}</span>
          </button>
        </div>

        {/* ── Enunciado ── */}
        <h2 className="question-statement text-[var(--text)]">
          {question.statement}
        </h2>

        {/* ── Tema (discreto, abaixo do enunciado) ── */}
        <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)] -mt-3">
          {question.theme.label}
        </div>

        {/* ── Alternativas ── */}
        <div className="flex flex-col gap-2 flex-1">
          {question.alternatives.map((alt, idx) => {
            const isSelected = selectedAlternativeId === alt.id;
            const letter = String.fromCharCode(65 + idx);

            return (
              <button
                key={alt.id}
                type="button"
                onClick={() => onSelect(alt.id)}
                className={`
                  flex w-full items-start gap-3
                  rounded-[var(--r-lg)] border px-4 py-4
                  text-left transition min-h-[56px]
                  ${altClasses(isSelected)}
                `}
              >
                {/* Letra */}
                <span className={`
                  flex h-8 w-8 shrink-0 items-center justify-center
                  rounded-full text-xs font-bold
                  ${isSelected
                    ? "bg-[var(--brand)]/20 text-[var(--brand)]"
                    : "bg-white/7 text-[var(--muted)]"}
                `}>
                  {letter}
                </span>
                <span className="pt-0.5 text-[0.9rem] leading-[1.7] text-[var(--text)]">
                  {alt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Navegação ── */}
        <div className="flex items-center justify-between gap-3 pt-1 border-t border-[var(--panel-border)]">
          <button
            type="button"
            onClick={onPrevious}
            disabled={!hasPrev}
            className="soft-panel rounded-[var(--r-md)] px-5 py-2.5 text-sm font-semibold disabled:opacity-30"
          >
            ‹ Anterior
          </button>

          <span className="text-xs text-[var(--muted)]">
            {number} / {totalQuestions}
          </span>

          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            className="soft-panel rounded-[var(--r-md)] px-5 py-2.5 text-sm font-semibold disabled:opacity-30"
          >
            Próxima ›
          </button>
        </div>
      </div>
    </section>
  );
});
