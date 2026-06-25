import { memo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { formatDateLabel } from "../lib/date";
import { useStudy } from "../state/study-context";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CARD DE REVISÃO
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const ReviewCard = memo(function ReviewCard({ question }) {
  return (
    <article className="glass-panel rounded-[var(--r-xl)] p-4 sm:p-5 flex flex-col gap-3 transition hover:border-[var(--border-hover)]">
      {/* Matéria + data */}
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-[var(--panel-border)] px-2.5 py-0.5 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
          {question.subject?.label ?? ""}
        </span>
        <span className="text-[0.65rem] text-[var(--muted)]">
          {formatDateLabel(question.progress?.nextReviewAt)}
        </span>
      </div>

      {/* Enunciado */}
      <h2 className="text-[0.92rem] font-medium leading-[1.7] text-[var(--text)] line-clamp-4">
        {question.statement}
      </h2>

      {/* Fundamento */}
      {question.support && (
        <p className="text-[0.72rem] leading-[1.6] text-[var(--muted)] line-clamp-2">
          {question.support}
        </p>
      )}

      {/* Ação */}
      <Link
        to={`/resolver?subjectId=${question.subjectId}&onlyWrong=true&questionId=${question.id}`}
        className="mt-1 inline-flex items-center gap-2 rounded-[var(--r-md)] bg-[var(--text)] px-4 py-2 text-xs font-semibold text-[var(--bg)] self-start min-h-[38px]"
      >
        Resolver agora
        <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" clipRule="evenodd"/></svg>
      </Link>
    </article>
  );
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   REVIEW PAGE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function ReviewPage() {
  const [searchParams] = useSearchParams();
  const subjectId = searchParams.get("materia");
  const { dueReviewQuestions, resetProgress, repository } = useStudy();

  const questions = subjectId
    ? dueReviewQuestions.filter((q) => q.subjectId === subjectId)
    : dueReviewQuestions;

  const subject = repository.subjects.find((s) => s.id === subjectId);

  return (
    <div className="grid gap-4">
      {/* Cabeçalho */}
      <section className="glass-panel rounded-[var(--r-xl)] p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
              Revisão espaçada
            </div>
            <h1 className="mt-2 text-2xl font-semibold text-[var(--text)]">
              {subject ? `Reforço em ${subject.label ?? subject.name}` : "Banco de revisão inteligente"}
            </h1>
            <p className="mt-2 max-w-lg text-sm leading-[1.7] text-[var(--muted)]">
              A fila combina erros recentes e itens vencidos pela revisão espaçada,
              mantendo o reforço ativo no momento certo.
            </p>
          </div>

          {questions.length > 0 && (
            <div className="flex items-center gap-3">
              <div className="soft-panel rounded-[var(--r-md)] px-4 py-2.5 text-center min-w-[64px]">
                <div className="text-2xl font-bold text-[var(--accent)]">{questions.length}</div>
                <div className="text-[0.62rem] uppercase tracking-[0.15em] text-[var(--muted)]">pendentes</div>
              </div>
              <button
                type="button"
                onClick={resetProgress}
                className="soft-panel rounded-[var(--r-md)] px-4 py-2.5 text-xs font-semibold text-[var(--muted)] hover:text-[var(--danger)] hover:border-[var(--danger)]/30 min-h-[44px]"
              >
                Limpar progresso
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Fila de revisão */}
      {questions.length > 0 ? (
        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {questions.map((q) => <ReviewCard key={q.id} question={q} />)}
        </section>
      ) : (
        <section className="glass-panel rounded-[var(--r-xl)] p-8 sm:p-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-[var(--text)]">
            Nenhuma revisão pendente
          </h2>
          <p className="mt-2 max-w-sm mx-auto text-sm leading-[1.7] text-[var(--muted)]">
            Conforme você responde questões, a fila combina erros e repetições espaçadas.
            Quando um item exigir reforço, ele aparece aqui.
          </p>
          <Link
            to="/questoes"
            className="mt-5 inline-flex items-center gap-2 rounded-[var(--r-md)] bg-[var(--text)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)]"
          >
            Começar a estudar
          </Link>
        </section>
      )}
    </div>
  );
}
