import { memo } from "react";
import { Link } from "react-router-dom";

export const QuestionListItem = memo(function QuestionListItem({
  question,
  sessionUrl,
  onToggleFavorite
}) {
  return (
    <article className="glass-panel rounded-[var(--r-xl)] p-4 sm:p-5 flex flex-col gap-3 transition hover:border-[var(--border-hover)]">
      {/* Cabeçalho: badges + favorito */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          <Badge>{question.subject?.label ?? ""}</Badge>
          <Badge>{question.exam?.shortLabel ?? ""}</Badge>
          <Badge>{question.difficultyMeta?.label ?? ""}</Badge>
          {question.dueReview && (
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-amber-300">
              Revisão pendente
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => onToggleFavorite(question.id)}
          aria-label={question.isFavorite ? "Remover favorito" : "Favoritar"}
          className={`shrink-0 rounded-full p-1.5 text-base transition min-h-[36px] min-w-[36px] ${
            question.isFavorite
              ? "text-amber-300"
              : "text-[var(--muted)] hover:text-amber-300"
          }`}
        >
          {question.isFavorite ? "★" : "☆"}
        </button>
      </div>

      {/* Enunciado — truncado para escaneabilidade */}
      <h3 className="text-[0.92rem] font-medium leading-[1.7] text-[var(--text)] line-clamp-3">
        {question.statement}
      </h3>

      {/* Fundamento + tentativas */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.68rem] text-[var(--muted)]">
        {question.support && (
          <span className="truncate max-w-[240px]">{question.support}</span>
        )}
        {question.attemptCount > 0 && (
          <>
            <span className="opacity-30">·</span>
            <span>{question.attemptCount} tentativa{question.attemptCount !== 1 ? "s" : ""}</span>
          </>
        )}
      </div>

      {/* Ações */}
      <div className="flex flex-wrap gap-2 pt-1">
        <Link
          to={`${sessionUrl}&questionId=${question.id}`}
          className="rounded-[var(--r-md)] bg-[var(--text)] px-4 py-2 text-xs font-semibold text-[var(--bg)] min-h-[36px]"
        >
          Resolver
        </Link>
        {question.relatedArticles[0] && (
          <Link
            to={`/leis?artigo=${question.relatedArticles[0].id}`}
            className="soft-panel rounded-[var(--r-md)] px-4 py-2 text-xs font-semibold text-[var(--muted)] hover:text-[var(--text)] min-h-[36px]"
          >
            Ver lei
          </Link>
        )}
      </div>
    </article>
  );
});

function Badge({ children }) {
  return (
    <span className="rounded-full border border-[var(--panel-border)] px-2.5 py-0.5 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
      {children}
    </span>
  );
}
