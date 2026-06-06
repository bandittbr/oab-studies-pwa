import { Link } from "react-router-dom";

export function AdaptivePlanCard({ adaptivePlan }) {
  return (
    <article className="glass-panel rounded-[2rem] p-5">
      <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Motor inteligente</div>
      <h2 className="mt-3 text-2xl font-semibold text-[var(--text)]">Plano adaptativo do momento</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <AdaptiveMetric label="Prontidao" value={`${adaptivePlan.readinessScore}%`} />
        <AdaptiveMetric label="Revisoes" value={adaptivePlan.dueReviewCount} />
        <AdaptiveMetric
          label="Sessao sugerida"
          value={`${adaptivePlan.recommendedSession.mode} / ${adaptivePlan.recommendedSession.size}`}
        />
      </div>

      <div className="mt-5 grid gap-3">
        {adaptivePlan.planSteps.map((step, index) => (
          <div key={index} className="soft-panel rounded-[1.4rem] p-4 text-sm leading-7 text-[var(--text)]">
            {step}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          to={`/resolver?mode=${adaptivePlan.recommendedSession.mode}&size=${adaptivePlan.recommendedSession.size}&subjectId=${adaptivePlan.recommendedSession.subjectId}`}
          className="rounded-2xl bg-[var(--text)] px-4 py-3 text-sm font-semibold text-[var(--bg)]"
        >
          Iniciar sessao sugerida
        </Link>
        <Link to="/studio" className="soft-panel rounded-2xl px-4 py-3 text-sm font-semibold">
          Abrir assistente
        </Link>
      </div>
    </article>
  );
}

function AdaptiveMetric({ label, value }) {
  return (
    <div className="soft-panel rounded-[1.4rem] p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{label}</div>
      <div className="mt-2 text-xl font-semibold text-[var(--text)]">{value}</div>
    </div>
  );
}
