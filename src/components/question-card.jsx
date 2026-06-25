import { Link } from "react-router-dom";
import { formatDateLabel } from "../lib/date";

/* ── Estilo por estado de alternativa ── */
function altStyle({ isSelected, isConfirmed, isCorrect, isWrong }) {
  if (isConfirmed && isCorrect)
    return "border-emerald-400/50 bg-emerald-400/9 shadow-[0_0_0_1px_rgba(52,211,153,0.3)]";
  if (isConfirmed && isWrong)
    return "border-rose-400/45 bg-rose-400/8";
  if (isSelected)
    return "border-[var(--brand)]/60 bg-[var(--brand)]/9 shadow-[0_0_0_1px_rgba(139,127,248,0.25)]";
  return "border-[var(--panel-border)] bg-transparent hover:border-[var(--border-hover)] hover:bg-white/3";
}

function AltLetter({ letter, isSelected, isConfirmed, isCorrect, isWrong }) {
  const base = "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all";
  if (isConfirmed && isCorrect)
    return <span className={`${base} bg-emerald-400/20 text-emerald-300`}>✓</span>;
  if (isConfirmed && isWrong)
    return <span className={`${base} bg-rose-400/20 text-rose-300`}>✗</span>;
  if (isSelected)
    return <span className={`${base} bg-[var(--brand)]/20 text-[var(--brand)]`}>{letter}</span>;
  return <span className={`${base} bg-white/7 text-[var(--muted)]`}>{letter}</span>;
}

function InfoBlock({ title, content }) {
  if (!content) return null;
  return (
    <div className="soft-panel rounded-[var(--r-md)] p-4">
      <div className="mb-2 label-caps">{title}</div>
      <div className="text-sm leading-[1.85] text-[var(--text-2)]">{content}</div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   QUESTION CARD
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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
  const correctId  = question.alternatives.find((a) => a.correct)?.id;
  const isConfirmed = Boolean(confirmedAlternativeId);
  const isRight    = confirmedAlternativeId === correctId;

  return (
    <section className="glass-panel rounded-[var(--r-xl)] overflow-hidden">
      {/* Barra de progresso */}
      <div className="h-0.5 w-full" style={{ background: "rgba(255,255,255,0.05)" }}>
        <div
          className="h-full bg-[var(--brand)] transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>

      <div className="p-5 sm:p-7 lg:p-8 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
              {currentIndex + 1} / {total}
            </div>
            <div className={`text-xs font-semibold ${
              isConfirmed
                ? isRight ? "text-emerald-400" : "text-rose-400"
                : "text-[var(--brand)]"
            }`}>
              {statusText}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline rounded-full border border-[var(--panel-border)] bg-[var(--brand)]/8 px-3 py-1 text-[0.65rem] font-medium text-[var(--brand)]">
              {subjectLabel}
            </span>
            <button
              type="button"
              onClick={() => onToggleFavorite(question.id)}
              aria-label={question.isFavorite ? "Remover favorito" : "Favoritar"}
              className={`rounded-full px-3 py-1.5 text-xs font-bold min-h-[36px] transition ${
                question.isFavorite
                  ? "bg-amber-400/15 text-amber-300 border border-amber-400/30"
                  : "soft-panel text-[var(--muted)] hover:text-amber-300 hover:border-amber-400/30"
              }`}
            >
              {question.isFavorite ? "★" : "☆"}
            </button>
          </div>
        </div>

        {/* Meta tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          {question.theme?.label && (
            <span className="rounded-full border border-[var(--panel-border)] bg-white/4 px-2.5 py-0.5 text-[0.62rem] uppercase tracking-[0.15em] text-[var(--muted)]">
              {question.theme.label}
            </span>
          )}
          {question.exam?.shortLabel && (
            <span className="rounded-full border border-[var(--panel-border)] bg-white/4 px-2.5 py-0.5 text-[0.62rem] uppercase tracking-[0.15em] text-[var(--muted)]">
              {question.exam.shortLabel}
            </span>
          )}
          {question.difficultyMeta?.label && (
            <span className="rounded-full border border-[var(--panel-border)] bg-white/4 px-2.5 py-0.5 text-[0.62rem] uppercase tracking-[0.15em] text-[var(--muted)]">
              {question.difficultyMeta.label}
            </span>
          )}
        </div>

        {/* Enunciado */}
        <h2 className="question-statement text-[var(--text)]">
          {question.statement}
        </h2>

        {/* Alternativas */}
        <div className="flex flex-col gap-2.5">
          {question.alternatives.map((alt, idx) => {
            const isSelected = selectedAlternativeId === alt.id;
            const isCorrect  = isConfirmed && alt.id === correctId;
            const isWrong    = isConfirmed && alt.id === confirmedAlternativeId && alt.id !== correctId;
            const letter     = String.fromCharCode(65 + idx);

            return (
              <button
                key={alt.id}
                type="button"
                onClick={() => !isConfirmed && onSelect(alt.id)}
                disabled={isConfirmed}
                className={`
                  flex w-full items-start gap-3
                  rounded-[var(--r-lg)] border px-4 py-3.5
                  text-left transition-all duration-150
                  min-h-[52px]
                  ${altStyle({ isSelected, isConfirmed, isCorrect, isWrong })}
                  ${isConfirmed && isCorrect ? "pop" : ""}
                `}
              >
                <AltLetter letter={letter} isSelected={isSelected} isConfirmed={isConfirmed} isCorrect={isCorrect} isWrong={isWrong} />
                <span className="pt-0.5 text-[0.92rem] leading-[1.75] text-[var(--text)]">
                  {alt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Ações */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onConfirm}
            disabled={!selectedAlternativeId || isConfirmed}
            className="rounded-[var(--r-md)] bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-brand)] disabled:cursor-not-allowed disabled:opacity-30 hover:opacity-88 transition"
          >
            Confirmar resposta
          </button>
          {isConfirmed && (
            <button
              type="button"
              onClick={onRetry}
              className="soft-panel rounded-[var(--r-md)] px-5 py-2.5 text-sm font-semibold hover:border-[var(--border-hover)] transition"
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
              className="soft-panel rounded-[var(--r-md)] px-4 py-2.5 text-sm font-semibold disabled:opacity-30 hover:border-[var(--border-hover)] transition"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={currentIndex === total - 1}
              aria-label="Próxima"
              className="soft-panel rounded-[var(--r-md)] px-4 py-2.5 text-sm font-semibold disabled:opacity-30 hover:border-[var(--border-hover)] transition"
            >
              ›
            </button>
          </div>
        </div>

        {/* Post-confirm */}
        {isConfirmed && (
          <div className="slide-up flex flex-col gap-3 border-t border-[var(--panel-border)] pt-5">
            {/* Feedback */}
            <div className={`rounded-[var(--r-lg)] border p-4 ${
              isRight
                ? "border-emerald-400/30 bg-emerald-400/7"
                : "border-rose-400/30 bg-rose-400/7"
            }`}>
              <div className={`mb-2 label-caps ${
                isRight ? "text-emerald-400" : "text-rose-400"
              }`}>
                {isRight ? "✓ Resposta correta" : "✗ Resposta incorreta"}
              </div>
              {!isRight && (
                <div className="text-sm leading-[1.75] text-[var(--text-2)]">
                  <span className="text-[var(--muted)] mr-1">Correta:</span>
                  {question.alternatives.find((a) => a.id === correctId)?.text}
                </div>
              )}
            </div>

            <InfoBlock title="Explicação"     content={question.explanation} />
            <InfoBlock title="Fundamento legal" content={question.support} />
            <InfoBlock title="Lei seca"         content={question.lawText} />

            {/* Artigos relacionados */}
            {question.relatedArticles?.length > 0 && (
              <div className="soft-panel rounded-[var(--r-md)] p-4">
                <div className="label-caps mb-3">Artigos relacionados</div>
                <div className="flex flex-wrap gap-2">
                  {question.relatedArticles.map((art) => (
                    <Link
                      key={art.id}
                      to={`/leis?artigo=${art.id}`}
                      className="rounded-[var(--r-sm)] bg-[var(--brand)]/10 border border-[var(--brand)]/25 px-3 py-1.5 text-xs font-semibold text-[var(--brand)] hover:bg-[var(--brand)]/18 transition"
                    >
                      {art.articleNumber}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Dificuldade pessoal */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs text-[var(--muted)]">Dificuldade:</span>
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
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition min-h-[32px] ${
                      question.personalDifficulty === d.id
                        ? "bg-[var(--brand)] text-white"
                        : "soft-panel text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)]"
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
