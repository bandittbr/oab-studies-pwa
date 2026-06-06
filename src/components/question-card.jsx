import { Link } from "react-router-dom";
import { formatDateLabel } from "../lib/date";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ALTERNATIVA — estilos por estado
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function altBorderBg({ isSelected, isConfirmed, isCorrect, isWrong }) {
  if (isConfirmed && isCorrect)
    return "border-emerald-400/50 bg-emerald-400/10";
  if (isConfirmed && isWrong)
    return "border-rose-400/45 bg-rose-400/8";
  if (isSelected)
    return "border-[var(--brand)]/55 bg-[var(--brand)]/8";
  return "border-[var(--panel-border)] bg-transparent hover:border-[var(--border-hover)] hover:bg-white/4";
}

function AltLetter({ letter, isSelected, isConfirmed, isCorrect, isWrong }) {
  const base = "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold";
  if (isConfirmed && isCorrect)
    return <span className={`${base} bg-emerald-400/20 text-emerald-300`}>✓</span>;
  if (isConfirmed && isWrong)
    return <span className={`${base} bg-rose-400/20 text-rose-300`}>✗</span>;
  if (isSelected)
    return <span className={`${base} bg-[var(--brand)]/20 text-[var(--brand)]`}>{letter}</span>;
  return <span className={`${base} bg-white/7 text-[var(--muted)]`}>{letter}</span>;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   INFO BLOCK — fundamentos e explicação
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function InfoBlock({ title, content }) {
  if (!content) return null;
  return (
    <div className="soft-panel rounded-[var(--r-md)] p-4">
      <div className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
        {title}
      </div>
      <div className="text-sm leading-[1.8] text-[var(--text-2)]">{content}</div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   QUESTION CARD
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function QuestionCard({
  question,
  selectedAlternativeId,
  confirmedAlternativeId,
  questionResult,
  onSelect,
  onConfirm,
  onRetry,
  onNext,
  onPrevious,
  onToggleFavorite,
  onSetPersonalDifficulty,
  currentIndex,
  total,
  statusText,
  subjectLabel
}) {
  const correctId = question.alternatives.find((a) => a.correct)?.id;
  const isConfirmed = Boolean(confirmedAlternativeId);
  const isRight = confirmedAlternativeId === correctId;

  return (
    <section className="glass-panel rounded-[var(--r-xl)] overflow-hidden">
      {/* ── Barra de progresso linear ── */}
      <div className="h-0.5 w-full bg-white/5">
        <div
          className="h-full bg-[var(--brand)] transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>

      <div className="p-5 sm:p-7 flex flex-col gap-5">
        {/* ── Header ── */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
              {currentIndex + 1} / {total}
            </div>
            <div className={`text-xs font-semibold ${
              isConfirmed
                ? isRight ? "text-emerald-300" : "text-rose-300"
                : "text-[var(--brand)]"
            }`}>
              {statusText}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Matéria badge */}
            <span className="hidden sm:inline rounded-full border border-[var(--panel-border)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]">
              {subjectLabel}
            </span>
            {/* Favoritar */}
            <button
              type="button"
              onClick={() => onToggleFavorite(question.id)}
              aria-label={question.isFavorite ? "Remover favorito" : "Favoritar"}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold min-h-[36px] ${
                question.isFavorite
                  ? "bg-amber-400/15 text-amber-200 border border-amber-400/25"
                  : "soft-panel text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              {question.isFavorite ? "★" : "☆"}
            </button>
          </div>
        </div>

        {/* ── Meta tags ── */}
        <div className="flex flex-wrap gap-1.5 text-[0.65rem] uppercase tracking-[0.15em] text-[var(--muted)]">
          <span>{question.theme.label}</span>
          <span className="opacity-30">·</span>
          <span>{question.exam.shortLabel}</span>
          <span className="opacity-30">·</span>
          <span>{question.difficultyMeta.label}</span>
        </div>

        {/* ── Enunciado ── */}
        <h2 className="question-statement text-[var(--text)]">
          {question.statement}
        </h2>

        {/* ── Alternativas ── */}
        <div className="flex flex-col gap-2">
          {question.alternatives.map((alt, idx) => {
            const isSelected = selectedAlternativeId === alt.id;
            const isCorrect = isConfirmed && alt.id === correctId;
            const isWrong = isConfirmed && alt.id === confirmedAlternativeId && alt.id !== correctId;
            const letter = String.fromCharCode(65 + idx);

            return (
              <button
                key={alt.id}
                type="button"
                onClick={() => !isConfirmed && onSelect(alt.id)}
                disabled={isConfirmed}
                className={`
                  flex w-full items-start gap-3
                  rounded-[var(--r-lg)] border px-4
                  py-3.5 sm:py-4
                  text-left transition
                  min-h-[56px]
                  ${altBorderBg({ isSelected, isConfirmed, isCorrect, isWrong })}
                  ${isConfirmed && isCorrect ? "pop" : ""}
                `}
              >
                <AltLetter letter={letter} isSelected={isSelected} isConfirmed={isConfirmed} isCorrect={isCorrect} isWrong={isWrong} />
                <span className="pt-0.5 text-[0.9rem] leading-[1.7] text-[var(--text)]">
                  {alt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Ações ── */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onConfirm}
            disabled={!selectedAlternativeId || isConfirmed}
            className="rounded-[var(--r-md)] bg-[var(--text)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] disabled:cursor-not-allowed disabled:opacity-35"
          >
            Confirmar
          </button>
          {isConfirmed && (
            <button
              type="button"
              onClick={onRetry}
              className="soft-panel rounded-[var(--r-md)] px-5 py-2.5 text-sm font-semibold"
            >
              Tentar novamente
            </button>
          )}
          <div className="flex gap-1.5 ml-auto">
            <button
              type="button"
              onClick={onPrevious}
              disabled={currentIndex === 0}
              aria-label="Anterior"
              className="soft-panel rounded-[var(--r-md)] px-4 py-2.5 text-sm font-semibold disabled:opacity-30"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={currentIndex === total - 1}
              aria-label="Próxima"
              className="soft-panel rounded-[var(--r-md)] px-4 py-2.5 text-sm font-semibold disabled:opacity-30"
            >
              ›
            </button>
          </div>
        </div>

        {/* ── Post-confirm ── */}
        {isConfirmed && (
          <div className="slide-up flex flex-col gap-3 border-t border-[var(--panel-border)] pt-5">
            {/* Feedback banner */}
            <div className={`rounded-[var(--r-md)] border p-4 ${
              isRight
                ? "border-emerald-400/30 bg-emerald-400/8"
                : "border-rose-400/30 bg-rose-400/8"
            }`}>
              <div className={`mb-1.5 text-[0.65rem] font-bold uppercase tracking-[0.22em] ${
                isRight ? "text-emerald-300" : "text-rose-300"
              }`}>
                {isRight ? "✓ Resposta correta" : "✗ Resposta incorreta"}
              </div>
              {!isRight && (
                <div className="text-sm leading-[1.7] text-[var(--text-2)]">
                  <span className="text-[var(--muted)]">Correta: </span>
                  {question.alternatives.find((a) => a.id === correctId)?.text}
                </div>
              )}
            </div>

            <InfoBlock title="Explicação" content={question.explanation} />
            <InfoBlock title="Fundamento legal" content={question.support} />
            <InfoBlock title="Lei seca" content={question.lawText} />

            {/* Artigos relacionados */}
            {question.relatedArticles?.length > 0 && (
              <div className="soft-panel rounded-[var(--r-md)] p-4">
                <div className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Artigos relacionados
                </div>
                <div className="flex flex-wrap gap-2">
                  {question.relatedArticles.map((art) => (
                    <Link
                      key={art.id}
                      to={`/leis?artigo=${art.id}`}
                      className="rounded-[var(--r-sm)] bg-white/8 px-3 py-2 text-xs font-semibold text-[var(--text)] hover:bg-white/14 transition"
                    >
                      {art.articleNumber}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Dificuldade pessoal */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[var(--muted)] shrink-0">Dificuldade:</span>
              <div className="flex gap-1.5">
                {[
                  { id: "light",  label: "Leve"   },
                  { id: "steady", label: "Média"  },
                  { id: "heavy",  label: "Pesada" }
                ].map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => onSetPersonalDifficulty(question.id, d.id)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition min-h-[32px] ${
                      question.personalDifficulty === d.id
                        ? "bg-[var(--text)] text-[var(--bg)]"
                        : "soft-panel text-[var(--muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
              {questionResult?.answeredAt && (
                <span className="ml-auto text-[0.65rem] text-[var(--muted)] hidden sm:inline">
                  {formatDateLabel(questionResult.answeredAt)}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
