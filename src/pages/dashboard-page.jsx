import { useState } from "react";
import { Link } from "react-router-dom";
import { AdaptivePlanCard } from "../components/adaptive-plan-card";
import { ChartCard } from "../components/chart-card";
import { useStudy } from "../state/study-context";

const PIX_KEY = "022.374.951-65";

function PixQrButton() {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(PIX_KEY).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <div className="shrink-0 flex flex-col items-center gap-1.5">
      <button
        type="button"
        onClick={handleCopy}
        title="Clique para copiar a chave PIX"
        className="relative group cursor-pointer"
      >
        <img
          src="/pix-qr.png"
          alt="QR Code PIX doação"
          className="w-[86px] h-[86px] bg-white object-contain transition-opacity group-hover:opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-md">
            Copiar chave
          </span>
        </div>
      </button>
      <span className="text-[0.62rem] text-[var(--muted)] text-center leading-4">
        {copied ? (
          <span className="font-semibold text-[var(--success)]">Chave copiada! ✓</span>
        ) : (
          <>Chave PIX (CPF):<br />
          <span className="font-semibold text-[var(--text)] select-all">{PIX_KEY}</span></>
        )}
      </span>
    </div>
  );
}

const SUGGESTED_SUBJECTS = [
  { id: "etica",           label: "Ética",          icon: "⚖️" },
  { id: "constitucional",  label: "Constitucional", icon: "📜" },
  { id: "civil",           label: "Civil",          icon: "🏛️" },
  { id: "penal",           label: "Penal",          icon: "⚔️" },
  { id: "processo-civil",  label: "Proc. Civil",    icon: "📋" },
  { id: "processo-penal",  label: "Proc. Penal",    icon: "🔍" },
  { id: "administrativo",  label: "Adm.",           icon: "🏢" },
  { id: "tributario",      label: "Tributário",     icon: "💰" },
  { id: "trabalhista",     label: "Trabalhista",    icon: "👷" },
  { id: "empresarial",     label: "Empresarial",    icon: "📈" },
  { id: "consumidor",      label: "Consumidor",     icon: "🛒" },
];

export function DashboardPage() {
  const { adaptivePlan, dashboardMetrics, repository, state, setDailyGoalQuestions } = useStudy();
  const goalTarget = state.preferences.dailyGoalQuestions;
  const goalProgress = Math.min(100, Math.round((dashboardMetrics.answeredToday / goalTarget) * 100));

  return (
    <div className="grid gap-4">
      {/* Hero */}
      <section className="glass-panel relative overflow-hidden rounded-[var(--radius-xl)] p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(125,211,252,0.07),transparent_40%,rgba(245,158,11,0.07))]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* Copy */}
          <div>
            <div className="text-xs uppercase tracking-[0.34em] text-[var(--muted)]">
              Plataforma de estudo
            </div>
            <h1 className="display-face mt-3 max-w-xl text-4xl leading-tight text-[var(--text)] sm:text-5xl">
              Estude para a OAB
            </h1>

            {/* Doação */}
            <div className="mt-4 soft-panel rounded-[var(--radius-md)] p-4 flex items-start gap-4">
              <PixQrButton />
              <p className="text-sm leading-6 text-[var(--muted)]">
                Gostou do projeto? Apoie com um Pix ❤️
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/questoes"
                className="rounded-[var(--radius-md)] bg-[var(--text)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)]"
              >
                Abrir banco de questões
              </Link>
              <Link to="/revisao" className="soft-panel rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold">
                Abrir revisão
              </Link>
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 gap-3">
            <MetricCard label="Questões totais" value={String(repository.questions.length)} />
            <MetricCard label="Respondidas" value={String(dashboardMetrics.answeredCount)} />
            <MetricCard
              label="Precisão geral"
              value={`${dashboardMetrics.accuracy}%`}
              highlight={dashboardMetrics.accuracy >= 70 ? "success" : dashboardMetrics.accuracy >= 50 ? "warn" : undefined}
            />
            <MetricCard label="Fila de revisão" value={String(dashboardMetrics.dueReviewCount)} />
          </div>
        </div>
      </section>

      {/* Chart + Daily goal */}
      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <ChartCard data={dashboardMetrics.last7Days} />

        <article className="glass-panel rounded-[var(--radius-xl)] p-5">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Meta diária</div>

          <div className="mt-3 flex items-end justify-between gap-4">
            <div>
              <div className="text-4xl font-bold text-[var(--text)]">{goalTarget}</div>
              <div className="mt-1 text-sm text-[var(--muted)]">
                {dashboardMetrics.answeredToday} respondidas hoje
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setDailyGoalQuestions(Math.max(1, goalTarget - 1))}
                className="soft-panel rounded-[var(--radius-md)] px-4 py-2.5 text-lg font-semibold"
              >
                −
              </button>
              <button
                type="button"
                onClick={() => setDailyGoalQuestions(goalTarget + 1)}
                className="soft-panel rounded-[var(--radius-md)] px-4 py-2.5 text-lg font-semibold"
              >
                +
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/8">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,var(--brand),var(--accent))] transition-all duration-700"
              style={{ width: `${goalProgress}%` }}
            />
          </div>
          <div className="mt-2 text-xs text-[var(--muted)]">
            {goalProgress}% da meta {goalProgress >= 100 && "— concluída! 🎯"}
          </div>

          {/* Sub-metrics */}
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            <MiniMetric label="Sequência" value={`${dashboardMetrics.streak} dias`} />
            <MiniMetric label="Favoritas" value={String(dashboardMetrics.favoriteCount)} />
            <MiniMetric label="Dominadas" value={String(dashboardMetrics.masteredCount)} />
            <MiniMetric label="Acertos total" value={String(dashboardMetrics.rightCount)} />
          </div>
        </article>
      </section>

      {/* Weak subjects + Quick links */}
      <section className="grid gap-4 xl:grid-cols-2">
        <article className="glass-panel rounded-[var(--radius-xl)] p-5">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)] mb-4">
            Matérias com mais erro
          </div>
          {dashboardMetrics.wrongBySubject.length ? (
            <div className="space-y-2.5">
              {dashboardMetrics.wrongBySubject.slice(0, 5).map((sub) => {
                const errorRate = sub.totalAttempts > 0
                  ? Math.round((sub.wrongCount / sub.totalAttempts) * 100)
                  : 0;
                return (
                  <div key={sub.id} className="soft-panel rounded-[var(--radius-md)] px-4 py-3 flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-[var(--text)] truncate">{sub.label}</div>
                      <div className="text-xs text-[var(--muted)] mt-0.5">
                        {sub.totalAttempts} tentativas
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-lg font-bold text-rose-300">{sub.wrongCount}</div>
                      <div className="text-xs text-[var(--muted)]">{errorRate}% erro</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="soft-panel rounded-[var(--radius-md)] p-4 text-sm text-[var(--muted)]">
              Os erros por matéria aparecem aqui conforme você usa o banco.
            </div>
          )}
        </article>

        <article className="glass-panel rounded-[var(--radius-xl)] p-5">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)] mb-4">
            Acesso rápido
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            <QuickLink
              to="/questoes"
              icon="📋"
              title="Filtrar e iniciar"
              description="Matéria, tema, prova, ano, favoritas e erradas."
            />
            <QuickLink
              to="/revisao"
              icon="🔄"
              title="Revisão espaçada"
              description="Questões com reforço e revisão pendente em fila."
            />
            <QuickLink
              to="/leis"
              icon="⚖️"
              title="Lei seca"
              description="Artigos abertos direto a partir das questões."
            />
            <QuickLink
              to="/resolver"
              icon="⚡"
              title="Sessão instantânea"
              description="Continue do filtro atual ou entre em uma trilha."
            />
          </div>
        </article>
      </section>


      {/* Sessoes sugeridas por materia */}
      <section className="glass-panel rounded-[var(--radius-xl)] p-5">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Sessoes por materia</div>
            <h2 className="mt-0.5 text-base font-semibold text-[var(--text)]">Comecar agora</h2>
          </div>
          <Link to="/questoes" className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition">
            Ver banco &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
          {SUGGESTED_SUBJECTS.map((sub) => {
            const meta = repository.subjects.find((s) => s.id === sub.id);
            const count = repository.questions.filter((q) => q.subjectId === sub.id).length;
            return (
              <Link
                key={sub.id}
                to={`/resolver?subjectId=${sub.id}&mode=focus&size=10`}
                className="soft-panel rounded-[var(--radius-md)] px-3 py-3 flex items-center gap-2.5 hover:border-[var(--border-focus)] transition min-h-[52px]"
              >
                <span className="text-lg shrink-0">{sub.icon}</span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-[var(--text)] truncate">{meta ? meta.label : sub.label}</div>
                  <div className="text-[0.62rem] text-[var(--muted)]">{count} questoes</div>
                </div>
              </Link>
            );
          })}
          <Link
            to="/provas"
            className="soft-panel rounded-[var(--radius-md)] px-3 py-3 flex items-center gap-2.5 hover:border-[var(--border-focus)] transition min-h-[52px]"
          >
            <span className="text-lg shrink-0">📄</span>
            <div>
              <div className="text-xs font-semibold text-[var(--text)]">Provas OAB</div>
              <div className="text-[0.62rem] text-[var(--muted)]">OAB 30–46</div>
            </div>
          </Link>
        </div>
      </section>

      <AdaptivePlanCard adaptivePlan={adaptivePlan} />
    </div>
  );
}

function MetricCard({ label, value, highlight }) {
  const valueColor =
    highlight === "success" ? "text-emerald-300" :
    highlight === "warn" ? "text-amber-300" :
    "text-[var(--text)]";
  return (
    <div className="soft-panel rounded-[var(--radius-md)] p-4">
      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{label}</div>
      <div className={`mt-2 text-2xl font-bold ${valueColor}`}>{value}</div>
    </div>
  );
}

function MiniMetric({ label, value }) {
  return (
    <div className="soft-panel rounded-[var(--radius-sm)] px-3 py-2.5 flex items-center justify-between">
      <span className="text-xs text-[var(--muted)]">{label}</span>
      <span className="text-sm font-semibold text-[var(--text)]">{value}</span>
    </div>
  );
}

function QuickLink({ to, icon, title, description }) {
  return (
    <Link
      to={to}
      className="soft-panel rounded-[var(--radius-md)] p-4 flex gap-3 hover:border-[var(--border-focus)] transition"
    >
      <span className="text-xl shrink-0">{icon}</span>
      <div>
        <div className="text-sm font-semibold text-[var(--text)]">{title}</div>
        <div className="mt-1 text-xs leading-5 text-[var(--muted)]">{description}</div>
      </div>
    </Link>
  );
}
