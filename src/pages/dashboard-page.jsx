import { useState } from "react";
import { Link } from "react-router-dom";
import { AdaptivePlanCard } from "../components/adaptive-plan-card";
import { ChartCard } from "../components/chart-card";
import { useStudy } from "../state/study-context";

const PIX_KEY = "022.374.951-65";

/* ── ícones inline ── */
function IconBook()   { return <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.69 0 3.26.484 4.5 1.321V4.804zM10.5 15.321A7.968 7.968 0 0114.5 14c1.255 0 2.443.29 3.5.804V4.804A7.969 7.969 0 0014.5 4c-1.69 0-3.26.484-4.5 1.321V15.32z"/></svg>; }
function IconCheck()  { return <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>; }
function IconTarget() { return <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/></svg>; }
function IconRefresh(){ return <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/></svg>; }
function IconLightning(){ return <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/></svg>; }
function IconScale()  { return <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M10 2a1 1 0 01.894.553l7 14A1 1 0 0117 18H3a1 1 0 01-.894-1.447l7-14A1 1 0 0110 2zM10 7a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>; }
function IconExam()   { return <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd"/></svg>; }
function IconStar()   { return <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>; }

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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIX — seção discreta no rodapé
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function PixDonationSection() {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(PIX_KEY).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }
  return (
    <section className="soft-panel rounded-[var(--r-xl)] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5">
      {/* QR Code — pequeno, discreto */}
      <button
        type="button"
        onClick={handleCopy}
        title="Copiar chave PIX"
        className="relative group shrink-0 cursor-pointer rounded-[var(--r-sm)] overflow-hidden"
      >
        <img
          src="/pix-qr.png"
          alt="QR Code PIX"
          className="w-[72px] h-[72px] bg-white object-contain transition-opacity group-hover:opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-black/70 text-white text-[0.6rem] font-semibold px-1.5 py-0.5 rounded">
            Copiar
          </span>
        </div>
      </button>

      {/* Texto profissional */}
      <div className="flex-1 text-center sm:text-left">
        <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-1">
          Apoie o projeto
        </div>
        <p className="text-sm text-[var(--text-2)] leading-6">
          Este projeto é <strong className="text-[var(--text)] font-semibold">gratuito</strong> e desenvolvido de forma independente.
          Se ele estiver ajudando nos seus estudos, considere apoiar.
          Contribuições ajudam a manter o sistema online e adicionar novas provas.
        </p>
        <button
          type="button"
          onClick={handleCopy}
          className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--muted)] hover:text-[var(--text)] transition"
        >
          {copied ? (
            <span className="text-[var(--success)] font-semibold">✓ Chave copiada!</span>
          ) : (
            <>
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
              </svg>
              Copiar chave PIX (CPF): {PIX_KEY}
            </>
          )}
        </button>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DASHBOARD
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function DashboardPage() {
  const { adaptivePlan, dashboardMetrics, repository, officialExams, state, setDailyGoalQuestions } = useStudy();
  const goalTarget   = state.preferences.dailyGoalQuestions;
  const goalProgress = Math.min(100, Math.round((dashboardMetrics.answeredToday / goalTarget) * 100));

  const totalQuestions = repository.questions.length;
  const totalExams     = officialExams?.length ?? 0;
  const totalSubjects  = repository.subjects?.length ?? 0;

  return (
    <div className="grid gap-5">

      {/* ━━ 1. HERO ━━ */}
      <section className="glass-panel relative overflow-hidden rounded-[var(--r-xl)] p-6 sm:p-8">
        {/* Decoração de fundo */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--brand)]/8 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[var(--accent)]/6 blur-3xl" />
        </div>

        <div className="relative">
          {/* Eyebrow */}
          <div className="label-caps mb-3 flex items-center gap-2">
            <IconScale />
            Plataforma de estudo para OAB
          </div>

          {/* Título */}
          <h1 className="display-face text-3xl sm:text-4xl lg:text-5xl text-[var(--text)] max-w-xl leading-tight">
            Prepare-se para a OAB
          </h1>

          {/* Stats strip */}
          <div className="mt-6 flex flex-wrap gap-3">
            <HeroStat value={totalQuestions.toLocaleString("pt-BR")} label="Questões" />
            <HeroStat value={totalExams}  label={totalExams === 1 ? "Prova OAB" : "Provas OAB"} />
            <HeroStat value={totalSubjects} label="Matérias" />
            <HeroStat value="100%" label="Gratuito" highlight />
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/questoes"
              className="inline-flex items-center gap-2 rounded-[var(--r-md)] bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-brand)] hover:opacity-88 transition"
            >
              <IconBook />
              Resolver Questões
            </Link>
            <Link
              to="/provas"
              className="inline-flex items-center gap-2 soft-panel rounded-[var(--r-md)] px-5 py-2.5 text-sm font-semibold hover:border-[var(--border-hover)] transition"
            >
              <IconExam />
              Fazer Simulado
            </Link>
          </div>
        </div>
      </section>

      {/* ━━ 2. MÉTRICAS PRINCIPAIS ━━ */}
      <section className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <MetricCard
          icon={<IconBook />}
          label="Questões totais"
          value={String(repository.questions.length)}
          color="brand"
        />
        <MetricCard
          icon={<IconCheck />}
          label="Respondidas"
          value={String(dashboardMetrics.answeredCount)}
          color="info"
        />
        <MetricCard
          icon={<IconTarget />}
          label="Precisão geral"
          value={`${dashboardMetrics.accuracy}%`}
          color={dashboardMetrics.accuracy >= 70 ? "success" : dashboardMetrics.accuracy >= 50 ? "warn" : "danger"}
          highlight
        />
        <MetricCard
          icon={<IconRefresh />}
          label="Fila de revisão"
          value={String(dashboardMetrics.dueReviewCount)}
          color={dashboardMetrics.dueReviewCount > 0 ? "warn" : "muted"}
        />
      </section>

      {/* ━━ 3. DESEMPENHO + META ━━ */}
      <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <ChartCard data={dashboardMetrics.last7Days} />

        <article className="glass-panel rounded-[var(--r-xl)] p-5">
          <div className="label-caps mb-4 flex items-center gap-1.5">
            <IconTarget />
            Meta diária
          </div>

          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="stat-number">{goalTarget}</div>
              <div className="mt-1 text-sm text-[var(--muted)]">
                <span className="font-semibold text-[var(--text)]">{dashboardMetrics.answeredToday}</span> hoje
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setDailyGoalQuestions(Math.max(1, goalTarget - 1))}
                className="soft-panel rounded-[var(--r-md)] w-10 h-10 text-lg font-semibold hover:border-[var(--border-hover)] transition"
              >
                −
              </button>
              <button
                type="button"
                onClick={() => setDailyGoalQuestions(goalTarget + 1)}
                className="soft-panel rounded-[var(--r-md)] w-10 h-10 text-lg font-semibold hover:border-[var(--border-hover)] transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Barra de progresso */}
          <div className="mt-4 progress-track">
            <div className="progress-fill" style={{ width: `${goalProgress}%` }} />
          </div>
          <div className="mt-1.5 text-xs text-[var(--muted)]">
            {goalProgress}% da meta {goalProgress >= 100 && <span className="text-[var(--success)] font-semibold ml-1">— concluída! 🎯</span>}
          </div>

          {/* Sub-métricas */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <MiniMetric label="Sequência"   value={`${dashboardMetrics.streak}d`}            icon="🔥" />
            <MiniMetric label="Favoritas"   value={String(dashboardMetrics.favoriteCount)}   icon={<IconStar />} />
            <MiniMetric label="Dominadas"   value={String(dashboardMetrics.masteredCount)}   icon="🏆" />
            <MiniMetric label="Acertos"     value={String(dashboardMetrics.rightCount)}      icon={<IconCheck />} />
          </div>
        </article>
      </section>

      {/* ━━ 4. MATÉRIAS COM MAIS ERRO + ACESSO RÁPIDO ━━ */}
      <section className="grid gap-4 xl:grid-cols-2">
        {/* Matérias fracas */}
        <article className="glass-panel rounded-[var(--r-xl)] p-5">
          <div className="label-caps mb-4 flex items-center gap-1.5">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/></svg>
            Matérias com mais erro
          </div>
          {dashboardMetrics.wrongBySubject.length ? (
            <div className="space-y-2">
              {dashboardMetrics.wrongBySubject.slice(0, 5).map((sub) => {
                const errorRate = sub.totalAttempts > 0
                  ? Math.round((sub.wrongCount / sub.totalAttempts) * 100) : 0;
                return (
                  <div key={sub.id} className="soft-panel rounded-[var(--r-md)] px-4 py-3 flex items-center gap-3 hover:border-[var(--border-hover)] transition">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-[var(--text)] truncate">{sub.label}</div>
                      <div className="mt-1 progress-track" style={{ height: 3 }}>
                        <div style={{ height: "100%", borderRadius: "99px", width: `${errorRate}%`, background: "var(--danger)", transition: "width 700ms" }} />
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-base font-bold text-rose-300">{sub.wrongCount}</div>
                      <div className="text-[0.65rem] text-[var(--muted)]">{errorRate}% erro</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="soft-panel rounded-[var(--r-md)] p-4 text-sm text-[var(--muted)]">
              Os erros por matéria aparecem aqui conforme você estuda.
            </div>
          )}
        </article>

        {/* Acesso rápido */}
        <article className="glass-panel rounded-[var(--r-xl)] p-5">
          <div className="label-caps mb-4 flex items-center gap-1.5">
            <IconLightning />
            Acesso rápido
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            <QuickLink to="/questoes" icon={<IconBook />}    title="Banco de questões"   description="Filtre por matéria, tema, prova, ano ou favoritas." />
            <QuickLink to="/revisao"  icon={<IconRefresh />} title="Revisão espaçada"    description="Questões com reforço programado aguardando revisão." />
            <QuickLink to="/leis"     icon={<IconScale />}   title="Lei seca"            description="Artigos abertos a partir das questões respondidas." />
            <QuickLink to="/resolver" icon={<IconLightning />} title="Sessão instantânea" description="Inicie agora com as configurações do filtro atual." />
          </div>
        </article>
      </section>

      {/* ━━ 5. SESSÕES POR MATÉRIA ━━ */}
      <section className="glass-panel rounded-[var(--r-xl)] p-5">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div>
            <div className="label-caps">Sessões por matéria</div>
            <h2 className="mt-1 text-base font-semibold text-[var(--text)]">Começar agora</h2>
          </div>
          <Link to="/questoes" className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition">
            Ver banco →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
          {SUGGESTED_SUBJECTS.map((sub) => {
            const meta  = repository.subjects?.find((s) => s.id === sub.id);
            const count = repository.questions.filter((q) => q.subjectId === sub.id).length;
            return (
              <Link
                key={sub.id}
                to={`/resolver?subjectId=${sub.id}&mode=focus&size=10`}
                className="soft-panel rounded-[var(--r-md)] px-3 py-3 flex items-center gap-2.5 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-alt)] transition min-h-[56px] card-hover"
              >
                <span className="text-lg shrink-0">{sub.icon}</span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-[var(--text)] truncate">{meta ? meta.label : sub.label}</div>
                  <div className="text-[0.62rem] text-[var(--muted)]">{count} questões</div>
                </div>
              </Link>
            );
          })}
          <Link
            to="/provas"
            className="soft-panel rounded-[var(--r-md)] px-3 py-3 flex items-center gap-2.5 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-alt)] transition min-h-[56px] card-hover"
          >
            <span className="text-lg shrink-0">📄</span>
            <div>
              <div className="text-xs font-semibold text-[var(--text)]">Provas OAB</div>
              <div className="text-[0.62rem] text-[var(--muted)]">OAB 30–46</div>
            </div>
          </Link>
        </div>
      </section>

      {/* ━━ 6. PLANO ADAPTATIVO ━━ */}
      <AdaptivePlanCard adaptivePlan={adaptivePlan} />

      {/* ━━ 7. DOAÇÃO — discreta, no rodapé ━━ */}
      <PixDonationSection />
    </div>
  );
}

/* ─── HeroStat ─── */
function HeroStat({ value, label, highlight = false }) {
  return (
    <div className={`flex items-center gap-2 rounded-[var(--r-md)] px-3 py-2 ${
      highlight
        ? "bg-[var(--brand)]/12 border border-[var(--brand)]/25"
        : "soft-panel"
    }`}>
      <span className={`text-lg font-bold leading-none ${
        highlight ? "text-[var(--brand)]" : "text-[var(--text)]"
      }`}>{value}</span>
      <span className="text-xs text-[var(--muted)]">{label}</span>
    </div>
  );
}

/* ─── MetricCard ─── */
const METRIC_COLORS = {
  brand:   { icon: "bg-[var(--brand)]/12 text-[var(--brand)]",   value: "text-[var(--text)]" },
  success: { icon: "bg-emerald-400/12 text-emerald-400",         value: "text-emerald-300" },
  warn:    { icon: "bg-amber-400/12 text-amber-400",             value: "text-amber-300" },
  danger:  { icon: "bg-rose-400/12 text-rose-400",               value: "text-rose-300" },
  info:    { icon: "bg-sky-400/12 text-sky-400",                 value: "text-[var(--text)]" },
  muted:   { icon: "bg-white/8 text-[var(--muted)]",            value: "text-[var(--muted)]" },
};

function MetricCard({ icon, label, value, color = "brand" }) {
  const c = METRIC_COLORS[color] ?? METRIC_COLORS.brand;
  return (
    <div className="glass-panel rounded-[var(--r-xl)] p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <span className={`flex h-8 w-8 items-center justify-center rounded-[var(--r-sm)] ${c.icon}`}>
          {icon}
        </span>
      </div>
      <div>
        <div className={`stat-number ${c.value}`}>{value}</div>
        <div className="mt-1 text-xs text-[var(--muted)]">{label}</div>
      </div>
    </div>
  );
}

/* ─── MiniMetric ─── */
function MiniMetric({ label, value, icon }) {
  return (
    <div className="soft-panel rounded-[var(--r-sm)] px-3 py-2 flex items-center justify-between gap-2">
      <div className="flex items-center gap-1.5 min-w-0">
        <span className="text-sm shrink-0">{icon}</span>
        <span className="text-xs text-[var(--muted)] truncate">{label}</span>
      </div>
      <span className="text-sm font-semibold text-[var(--text)] shrink-0">{value}</span>
    </div>
  );
}

/* ─── QuickLink ─── */
function QuickLink({ to, icon, title, description }) {
  return (
    <Link
      to={to}
      className="soft-panel rounded-[var(--r-md)] p-4 flex gap-3 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-alt)] card-hover transition group"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--r-sm)] bg-[var(--brand)]/10 text-[var(--brand)] group-hover:bg-[var(--brand)]/18 transition">
        {icon}
      </span>
      <div>
        <div className="text-sm font-semibold text-[var(--text)]">{title}</div>
        <div className="mt-0.5 text-xs leading-5 text-[var(--muted)]">{description}</div>
      </div>
    </Link>
  );
}
