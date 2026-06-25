import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { officialArchiveManifest } from "../domain/content/official-archive-manifest";
import { useStudy } from "../state/study-context";

const STATUS_LABELS = {
  completed: { label: "Concluida", color: "text-emerald-400", dot: "bg-emerald-400" },
  in_progress: { label: "Em andamento", color: "text-amber-400", dot: "bg-amber-400" },
  not_started: { label: "Nao iniciada", color: "text-[var(--muted)]", dot: "bg-[var(--muted)]" }
};

const PHASE_OPTIONS = ["Todas as fases", "1a fase", "2a fase"];
const YEAR_OPTIONS = ["Todos os anos", "2026", "2025", "2024", "2023"];

function getExamStatus(session) {
  if (!session) return "not_started";
  return session.status === "completed" ? "completed" : "in_progress";
}

function ExamStatBar({ label, value, total, color = "bg-[var(--text)]" }) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div className="grid gap-1">
      <div className="flex items-center justify-between text-xs text-[var(--muted)]">
        <span>{label}</span>
        <span className="font-medium text-[var(--text)]">{pct}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--soft-bg)]">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function ExamCard({ officialExam, session, repository, onStart, onRestart }) {
  const status = getExamStatus(session);
  const statusMeta = STATUS_LABELS[status];
  const answers = session?.answers ?? {};
  const answered = Object.keys(answers).length;
  const total = officialExam.questionOrder.length;
  const correct = officialExam.questionOrder.reduce((count, item) => {
    const sel = answers[item.questionId]?.selectedAlternativeId;
    if (!sel) return count;
    const q = repository?.indexes?.questionsById?.[item.questionId];
    const correctAlt = q?.alternatives?.find((a) => a.correct)?.id;
    return sel === correctAlt ? count + 1 : count;
  }, 0);
  const progress = total > 0 ? Math.round((answered / total) * 100) : 0;
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  const manifest = officialArchiveManifest.registries.find((r) => r.id === officialExam.id);

  return (
    <article className="glass-panel rounded-[2rem] p-5 flex flex-col gap-5 transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-[var(--panel-border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {officialExam.year}
            </span>
            {officialExam.phase && (
              <span className="rounded-full bg-[var(--soft-bg)] px-3 py-1 text-xs text-[var(--muted)]">
                {officialExam.phase}
              </span>
            )}
          </div>
          <h2 className="text-3xl font-semibold text-[var(--text)]">{officialExam.label}</h2>
          <p className="text-sm leading-6 text-[var(--muted)]">{officialExam.fullLabel}</p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${statusMeta.dot}`} />
          <span className={`text-xs font-medium ${statusMeta.color}`}>{statusMeta.label}</span>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-3">
        <MiniStat label="Questoes" value={total} />
        <MiniStat label="Duracao" value={`${officialExam.durationMinutes} min`} />
        <MiniStat label="Respondidas" value={answered} />
      </div>

      {/* Progress bar */}
      {status !== "not_started" && (
        <div className="grid gap-3">
          <ExamStatBar label="Progresso" value={answered} total={total} color="bg-sky-400" />
          {answered > 0 && (
            <ExamStatBar label="Acertos" value={correct} total={answered} color="bg-emerald-400" />
          )}
          <div className="flex items-center justify-between text-xs text-[var(--muted)]">
            <span>{answered}/{total} questoes</span>
            {answered > 0 && <span className="font-medium text-emerald-400">{accuracy}% de acerto</span>}
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
            className="soft-panel rounded-xl px-3 py-2 text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            Caderno oficial (PDF)
          </a>
          {manifest.sourceUrls.answerKeyPdf && (
            <a
              href={manifest.sourceUrls.answerKeyPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-panel rounded-xl px-3 py-2 text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              Gabarito oficial (PDF)
            </a>
          )}
        </div>
      )}

      {/* Acoes */}
      <div className="mt-auto flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onStart}
          className="rounded-2xl bg-[var(--text)] px-5 py-3 text-sm font-semibold text-[var(--bg)] transition-opacity hover:opacity-90"
        >
          {status === "in_progress" ? "Continuar prova" : status === "completed" ? "Ver resultado" : "Iniciar prova"}
        </button>

        {session && status !== "not_started" && (
          <button
            type="button"
            onClick={onRestart}
            className="soft-panel rounded-2xl px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
          >
            Reiniciar
          </button>
        )}

        {status === "completed" && (
          <Link
            to={`/provas/${officialExam.id}`}
            className="soft-panel rounded-2xl px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
          >
            Revisao detalhada
          </Link>
        )}
      </div>
    </article>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="soft-panel rounded-2xl p-3 min-w-0 overflow-hidden">
      <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] truncate">{label}</div>
      <div className="mt-1.5 text-lg font-semibold text-[var(--text)]">{value}</div>
    </div>
  );
}

function SummaryBar({ officialExams, sessions }) {
  const total = officialExams.length;
  const completed = officialExams.filter((e) => sessions[e.id]?.status === "completed").length;
  const inProgress = officialExams.filter(
    (e) => sessions[e.id]?.status === "in_progress" || (sessions[e.id] && sessions[e.id].status !== "completed")
  ).length;
  const notStarted = total - completed - inProgress;

  return (
    <div className="glass-panel rounded-[2rem] p-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Prova oficial OAB</div>
          <h1 className="mt-3 text-4xl font-semibold text-[var(--text)]">Acervo de provas</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            Resolva provas reais em ordem oficial, acompanhe cronometro, marque revisoes e obtenha correcao comentada com fundamentacao legal.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Chip label="Total" value={total} />
          <Chip label="Concluidas" value={completed} color="text-emerald-400" />
          <Chip label="Em andamento" value={inProgress} color="text-amber-400" />
          <Chip label="Nao iniciadas" value={notStarted} />
        </div>
      </div>
    </div>
  );
}

function Chip({ label, value, color = "text-[var(--text)]" }) {
  return (
    <div className="soft-panel rounded-2xl px-4 py-3 text-center min-w-[80px]">
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="mt-1 text-xs text-[var(--muted)]">{label}</div>
    </div>
  );
}

export function OfficialExamsPage() {
  const navigate = useNavigate();
  const { getOfficialExamSession, officialExams, startOfficialExam, state, repository } = useStudy();
  const [phaseFilter, setPhaseFilter] = useState("Todas as fases");
  const [yearFilter, setYearFilter] = useState("Todos os anos");
  const [statusFilter, setStatusFilter] = useState("Todos");
  const sessions = state.officialExamSessions ?? {};

  const filtered = useMemo(() => {
    return officialExams.filter((exam) => {
      if (phaseFilter !== "Todas as fases" && exam.phase !== phaseFilter) return false;
      if (yearFilter !== "Todos os anos" && String(exam.year) !== yearFilter) return false;
      if (statusFilter !== "Todos") {
        const status = getExamStatus(sessions[exam.id]);
        if (statusFilter === "Concluidas" && status !== "completed") return false;
        if (statusFilter === "Em andamento" && status !== "in_progress") return false;
        if (statusFilter === "Nao iniciadas" && status !== "not_started") return false;
      }
      return true;
    });
  }, [officialExams, phaseFilter, yearFilter, statusFilter, sessions]);

  return (
    <div className="grid gap-5">
      <SummaryBar officialExams={officialExams} sessions={sessions} />

      {/* Filtros */}
      <div className="flex flex-wrap gap-3">
        {PHASE_OPTIONS.map((opt) => (
          <FilterPill key={opt} label={opt} active={phaseFilter === opt} onClick={() => setPhaseFilter(opt)} />
        ))}
        <div className="h-6 w-px bg-[var(--panel-border)] self-center" />
        {YEAR_OPTIONS.map((opt) => (
          <FilterPill key={opt} label={opt} active={yearFilter === opt} onClick={() => setYearFilter(opt)} />
        ))}
        <div className="h-6 w-px bg-[var(--panel-border)] self-center" />
        {["Todos", "Nao iniciadas", "Em andamento", "Concluidas"].map((opt) => (
          <FilterPill key={opt} label={opt} active={statusFilter === opt} onClick={() => setStatusFilter(opt)} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="glass-panel rounded-[2rem] p-10 text-center text-[var(--muted)]">
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
      className={`rounded-2xl px-4 py-2 text-sm font-medium transition-all ${
        active
          ? "bg-[var(--text)] text-[var(--bg)]"
          : "soft-panel text-[var(--muted)] hover:text-[var(--text)]"
      }`}
    >
      {label}
    </button>
  );
}
