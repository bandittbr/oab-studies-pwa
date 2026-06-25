import { Link } from "react-router-dom";

export function AdaptivePlanCard({ adaptivePlan }) {
  return (
    <article className="glass-panel rounded-[var(--r-xl)] p-5 relative overflow-hidden">
      {/* Decoração */}
      <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-[var(--brand)]/6 blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="label-caps flex items-center gap-1.5 mb-1">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Motor inteligente
            </div>
            <h2 className="text-xl font-semibold text-[var(--text)]">Plano adaptativo</h2>
          </div>
        </div>

        {/* Métricas */}
        <div className="grid gap-3 sm:grid-cols-3 mb-4">
          <AdaptiveMetric
            label="Prontidão"
            value={`${adaptivePlan.readinessScore}%`}
            color={
              adaptivePlan.readinessScore >= 70 ? "text-emerald-400" :
              adaptivePlan.readinessScore >= 50 ? "text-amber-400" :
              "text-rose-400"
            }
          />
          <AdaptiveMetric label="Revisões" value={adaptivePlan.dueReviewCount} />
          <AdaptiveMetric
            label="Sessão sugerida"
            value={`${adaptivePlan.recommendedSession.mode} / ${adaptivePlan.recommendedSession.size}`}
          />
        </div>

        {/* Steps */}
        {adaptivePlan.planSteps?.length > 0 && (
          <div className="space-y-2 mb-5">
            {adaptivePlan.planSteps.map((step, i) => (
              <div key={i} className="soft-panel rounded-[var(--r-md)] px-4 py-3 flex items-start gap-3 text-sm leading-6 text-[var(--text-2)]">
                <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--brand)]/15 text-[var(--brand)] text-[0.65rem] font-bold">
                  {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-wrap gap-2.5">
          <Link
            to={`/resolver?mode=${adaptivePlan.recommendedSession.mode}&size=${adaptivePlan.recommendedSession.size}&subjectId=${adaptivePlan.recommendedSession.subjectId}`}
            className="inline-flex items-center gap-2 rounded-[var(--r-md)] bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-brand)] hover:opacity-88 transition"
          >
            Iniciar sessão sugerida
          </Link>
          <Link
            to="/studio"
            className="soft-panel inline-flex items-center gap-2 rounded-[var(--r-md)] px-4 py-2.5 text-sm font-semibold hover:border-[var(--border-hover)] transition"
          >
            Abrir assistente
          </Link>
        </div>
      </div>
    </article>
  );
}

function AdaptiveMetric({ label, value, color = "text-[var(--text)]" }) {
  return (
    <div className="soft-panel rounded-[var(--r-md)] p-4">
      <div className="label-caps mb-2">{label}</div>
      <div className={`text-xl font-bold ${color}`}>{value}</div>
    </div>
  );
}
