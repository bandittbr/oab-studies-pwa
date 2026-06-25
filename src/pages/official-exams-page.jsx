import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { officialArchiveManifest } from "../domain/content/official-archive-manifest";
import { useStudy } from "../state/study-context";

const STATUS_META = {
  completed:   { label: "Concluída",      dot: "bg-emerald-400", badge: "bg-emerald-400/12 text-emerald-400 border-emerald-400/25" },
  in_progress: { label: "Em andamento",   dot: "bg-amber-400",   badge: "bg-amber-400/12 text-amber-400 border-amber-400/25" },
  not_started: { label: "Não iniciada",   dot: "bg-[var(--muted)]", badge: "bg-white/6 text-[var(--muted)] border-[var(--panel-border)]" }
};

const PHASE_OPTIONS  = ["Todas as fases", "1a fase", "2a fase"];
const YEAR_OPTIONS   = ["Todos os anos", "2026", "2025", "2024", "2023"];
const STATUS_OPTIONS = ["Todos", "Não iniciadas", "Em andamento", "Concluídas"];

function getExamStatus(session) {
  if (!session) return "not_started";
  return session.status === "completed" ? "completed" : "in_progress";
}

/* ─── Barra de progresso segmentada ─── */
function SegmentBar({ correct, wrong, total }) {
  if (total === 0) return <div className="progress-track" />;
  const pctCorrect = Math.round((correct / total) * 100);
  const pctWrong   = Math.round((wrong   / total) * 100);
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full flex" style={{ background: "rgba(255,255,255,0.06)" }}>
      <div style={{ width: `${pctCorrect}%`, background: "var(--success)", transition: "width 700ms" }} />
      <div style={{ width: `${pctWrong}%`,   background: "var(--danger)", transition: "width 700ms" }} />
    </div>
  );
}

/* ─── Card de prova (estilo premium) ─── */
function ExamCard({ officialExam, session, repository, onStart, onRestart }) {
  const status     = getExamStatus(session);
  const statusMeta = STATUS_META[status];
  const answers    = session?.answers ?? {};
  const answered   = Object.keys(answers).length;
  const total      = officialExam.questionOrder.length;

  const { correct, wrong } = officialExam.questionOrder.reduce(
    (acc, item) => {
      const sel = answers[item.questionId]?.selectedAlternativeId;
      if (!sel) return acc;
      const q = repository?.indexes?.questionsById?.[item.questionId];
      const correctAlt = q?.alternatives?.find((a) => a.correct)?.id;
      if (sel === correctAlt) acc.correct++;
      else acc.wrong++;
      return acc;
    },
    { correct: 0, wrong: 0 }
  );

  const progress = total > 0 ? Math.round((answered / total) * 100) : 0;
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : null;
  const manifest = officialArchiveManifest.registries.find((r) => r.id === officialExam.id);

  return (
    <article className="glass-panel rounded-[var(--r-xl)] overflow-hidden flex flex-col transition-all duration-200 hover:shadow-[var(--shadow-lg)] hover:border-[var(--border-hover)]">

      {/* Barra de progresso no topo */}
      <div className="h-1 w-full" style={{ background: "rgba(255,255,255,0.05)" }}>
        {status !== "not_started" && (
          <div
            className="h-full transition-all duration-700"
            style={{
              width: `${progress}%`,
              background: status === "completed"
                ? "var(--success)"
                : "linear-gradient(90deg, var(--brand), var(--accent))"
            }}
          />
        )}
      </div>

      <div className="flex flex-col gap-4 p-5 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="label-caps rounded-[var(--r-xs)] border border-[var(--panel-border)] px-2 py-0.5">
                {officialExam.year}
              </span>
              {officialExam.phase && (
                <span className="label-caps rounded-[var(--r-xs)] bg-[var(--brand)]/10 text-[var(--brand)] px-2 py-0.5">
                  {officialExam.phase}
                </span>
              )}
            </div>
            <h2 className="text-xl font-bold text-[var(--text)] leading-tight">{officialExam.label}</h2>
            <p className="mt-1 text-xs text-[var(--muted)] truncate">{officialExam.fullLabel}</p>
          </div>

          {/* Status badge */}
          <span className={`shrink-0 flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold ${statusMeta.badge}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${statusMeta.dot}`} />
            {statusMeta.label}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <MiniStat label="Questões"  value={total} />
          <MiniStat label="Duração"   value={`${officialExam.durationMinutes}min`} />
          <MiniStat label="Respondidas" value={answered} />
        </div>

        {/* Progresso detalhado */}
        {status !== "not_started" && answered > 0 && (
          <div className="space-y-2">
            <SegmentBar correct={correct} wrong={wrong} total={total} />
            <div className="flex items-center justify-between text-xs">
              <span className="text-[var(--muted)]">{answered}/{total} respondidas</span>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-medium">{correct} ✓</span>
                <span className="text-rose-400 font-medium">{wrong} ✗</span>
                {accuracy !== null && (
                  <span className={`font-bold ${
                    accuracy >= 70 ? "text-emerald-400" :
                    accuracy >= 50 ? "text-amber-400" :
                    "text-rose-400"
                  }`}>{accuracy}%</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Fontes oficiais */}
        {manifest?.sourceUrls?.bookletPdf && (
          <div className="flex flex-wrap gap-2">
            <a
              href={manifest.sourceUrls.bookletPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-panel rounded-[var(--r-sm)] px-3 py-1.5 text-xs text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)] transition"
            >
              📄 Caderno (PDF)
            </a>
            {manifest.sourceUrls.answerKeyPdf && (
              <a
                href={manifest.sourceUrls.answerKeyPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-panel rounded-[var(--r-sm)] px-3 py-1.5 text-xs text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)] transition"
              >
                ✅ Gabarito (PDF)
              </a>
            )}
          </div>
        )}

        {/* Ações */}
        <div className="mt-auto flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={onStart}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-[var(--r-md)] bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-88 transition shadow-[var(--shadow-brand)]"
          >
            {status === "in_progress"
              ? "Continuar →"
              : status === "completed"
              ? "Ver resultado"
              : "Iniciar prova"}
          </button>

          {session && status !== "not_started" && (
            <button
              type="button"
              onClick={onRestart}
              className="soft-panel rounded-[var(--r-md)] px-4 py-2.5 text-sm font-semibold hover:border-[var(--border-hover)] transition"
            >
              Reiniciar
            </button>
          )}

          {status === "completed" && (
            <Link
              to={`/provas/${officialExam.id}`}
              className="soft-panel rounded-[var(--r-md)] px-4 py-2.5 text-sm font-semibold hover:border-[var(--border-hover)] transition"
            >
              Revisão
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="soft-panel rounded-[var(--r-md)] p-3 min-w-0">
      <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] truncate">{label}</div>
      <div className="mt-1 text-lg font-bold text-[var(--text)]">{value}</div>
    </div>
  );
}

/* ─── Summary header ─── */
function SummaryBar({ officialExams, sessions }) {
  const total      = officialExams.length;
  const completed  = officialExams.filter((e) => sessions[e.id]?.status === "completed").length;
  const inProgress = officialExams.filter(
    (e) => sessions[e.id] && sessions[e.id].status !== "completed"
  ).length;
  const notStarted = total - completed - inProgress;

  return (
    <div className="glass-panel rounded-[var(--r-xl)] p-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[var(--brand)]/7 blur-3xl" />
      </div>
      <div className="relative flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="label-caps mb-2 flex items-center gap-1.5">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd"/>
            </svg>
            Provas oficiais OAB
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text)]">Acervo de provas</h1>
          <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--muted)]">
            Resolva provas reais em ordem oficial. Cronômetro, marcação para revisão e correção comentada com fundamento legal.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <SummaryChip label="Total"       value={total}       />
          <SummaryChip label="Concluídas"  value={completed}   color="text-emerald-400" border="border-emerald-400/20" />
          <SummaryChip label="Em andamento" value={inProgress} color="text-amber-400"   border="border-amber-400/20" />
          <SummaryChip label="Não iniciadas" value={notStarted} />
        </div>
      </div>
    </div>
  );
}

function SummaryChip({ label, value, color = "text-[var(--text)]", border = "border-[var(--panel-border)]" }) {
  return (
    <div className={`soft-panel rounded-[var(--r-lg)] px-4 py-3 text-center min-w-[80px] border ${border}`}>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="mt-0.5 text-xs text-[var(--muted)]">{label}</div>
    </div>
  );
}

/* ─── Página principal ─── */
export function OfficialExamsPage() {
  const navigate = useNavigate();
  const { getOfficialExamSession, officialExams, startOfficialExam, state, repository } = useStudy();
  const [phaseFilter,  setPhaseFilter]  = useState("Todas as fases");
  const [yearFilter,   setYearFilter]   = useState("Todos os anos");
  const [statusFilter, setStatusFilter] = useState("Todos");
  const sessions = state.officialExamSessions ?? {};

  const filtered = useMemo(() => {
    return officialExams.filter((exam) => {
      if (phaseFilter !== "Todas as fases" && exam.phase !== phaseFilter) return false;
      if (yearFilter  !== "Todos os anos"  && String(exam.year) !== yearFilter) return false;
      if (statusFilter !== "Todos") {
        const s = getExamStatus(sessions[exam.id]);
        if (statusFilter === "Concluídas"   && s !== "completed")   return false;
        if (statusFilter === "Em andamento" && s !== "in_progress") return false;
        if (statusFilter === "Não iniciadas" && s !== "not_started") return false;
      }
      return true;
    });
  }, [officialExams, phaseFilter, yearFilter, statusFilter, sessions]);

  return (
    <div className="grid gap-5">
      <SummaryBar officialExams={officialExams} sessions={sessions} />

      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {PHASE_OPTIONS.map((opt) => (
          <FilterPill key={opt} label={opt} active={phaseFilter === opt} onClick={() => setPhaseFilter(opt)} />
        ))}
        <div className="h-5 w-px bg-[var(--panel-border)] self-center mx-1" />
        {YEAR_OPTIONS.map((opt) => (
          <FilterPill key={opt} label={opt} active={yearFilter === opt} onClick={() => setYearFilter(opt)} />
        ))}
        <div className="h-5 w-px bg-[var(--panel-border)] self-center mx-1" />
        {STATUS_OPTIONS.map((opt) => (
          <FilterPill key={opt} label={opt} active={statusFilter === opt} onClick={() => setStatusFilter(opt)} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="glass-panel rounded-[var(--r-xl)] p-10 text-center text-[var(--muted)] text-sm">
          Nenhuma prova encontrada com os filtros selecionados.
        </div>
      )}

      <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        {filtered.map((officialExam) => {
          const session = getOfficialExamSession(officialExam.id);
          return (
            <ExamCard
              key={officialExam.id}
              officialExam={officialExam}
              session={session}
              repository={repository}
              onStart={() => {
                startOfficialExam(officialExam.id);
                navigate(`/provas/${officialExam.id}`);
              }}
              onRestart={() => {
                startOfficialExam(officialExam.id, { restart: true });
                navigate(`/provas/${officialExam.id}`);
              }}
            />
          );
        })}
      </section>
    </div>
  );
}

function FilterPill({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[var(--r-md)] px-3.5 py-1.5 text-xs font-medium transition-all ${
        active
          ? "bg-[var(--brand)] text-white shadow-[var(--shadow-brand)]"
          : "soft-panel text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)]"
      }`}
    >
      {label}
    </button>
  );
}
