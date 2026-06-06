import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { OfficialExamQuestionCard } from "../components/official-exam-question-card";
import { formatDuration } from "../lib/date";
import { useStudy } from "../state/study-context";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HELPER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function getAltText(question, altId) {
  if (!altId) return "Em branco";
  const idx = question?.alternatives?.findIndex((a) => a.id === altId) ?? -1;
  if (idx < 0) return altId;
  const letter = String.fromCharCode(65 + idx);
  return `${letter}. ${question.alternatives[idx].text}`;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GRADE DE QUESTÕES
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function QuestionGrid({ questions, session, onNavigate }) {
  return (
    <div>
      <div className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
        Questões — {questions.length}
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {questions.map((item) => {
          const isCurrent  = item.number === session.currentQuestionNumber;
          const isAnswered = Boolean(session.answers[item.questionId]?.selectedAlternativeId);
          const isMarked   = session.markedForReview.includes(item.questionId);
          return (
            <button
              key={item.questionId}
              type="button"
              onClick={() => onNavigate(item.number)}
              aria-label={`Ir para questão ${item.number}`}
              className={`
                rounded-[var(--r-sm)] py-2.5 text-xs font-bold transition min-h-[44px]
                ${isCurrent
                  ? "bg-[var(--text)] text-[var(--bg)]"
                  : isMarked
                    ? "bg-amber-400/20 text-amber-200 border border-amber-400/25"
                    : isAnswered
                      ? "bg-emerald-400/15 text-emerald-200"
                      : "soft-panel text-[var(--muted)]"}
              `}
            >
              {item.number}
            </button>
          );
        })}
      </div>
      {/* Legenda */}
      <div className="mt-3 flex flex-wrap gap-3 text-[0.62rem] text-[var(--muted)]">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400/60" /> Respondida
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-400/60" /> Marcada
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" /> Vazia
        </span>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PÁGINA DE RESULTADO
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ResultPage({ officialExam, session, onRestart }) {
  const r = session.result;
  const total  = officialExam.questions.length;
  const pct    = total > 0 ? Math.round((r.correct / total) * 100) : 0;
  const passed = pct >= 50;

  return (
    <div className="grid gap-5 max-w-3xl mx-auto">
      {/* Cabeçalho do resultado */}
      <section className="glass-panel rounded-[var(--r-xl)] p-6">
        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
          Resultado final
        </div>
        <h1 className="mt-2 text-2xl font-semibold text-[var(--text)]">{officialExam.label}</h1>
        <p className="mt-0.5 text-sm text-[var(--muted)]">{officialExam.fullLabel}</p>

        {/* Banner aprovação */}
        <div className={`mt-5 flex items-center gap-4 rounded-[var(--r-lg)] border p-5 ${
          passed
            ? "border-emerald-400/25 bg-emerald-400/8"
            : "border-rose-400/25 bg-rose-400/8"
        }`}>
          <div className={`text-5xl font-black ${passed ? "text-emerald-300" : "text-rose-300"}`}>
            {pct}<span className="text-2xl">%</span>
          </div>
          <div>
            <div className={`text-base font-semibold ${passed ? "text-emerald-200" : "text-rose-200"}`}>
              {passed ? "Aprovado — parabéns!" : "Abaixo da média — continue praticando"}
            </div>
            <div className="mt-0.5 text-xs text-[var(--muted)]">
              {r.correct} acertos · {r.wrong} erros · {r.blank} em branco · {formatDuration(session.elapsedSeconds ?? 0)}
            </div>
          </div>
        </div>

        {/* Métricas */}
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {[
            { label: "Acertos",   value: r.correct,        color: "text-emerald-300" },
            { label: "Erros",     value: r.wrong,          color: "text-rose-300" },
            { label: "Em branco", value: r.blank,          color: "text-[var(--muted)]" },
            { label: "Precisão",  value: `${r.accuracy}%`, color: "" }
          ].map((m) => (
            <div key={m.label} className="soft-panel rounded-[var(--r-md)] px-4 py-3 text-center">
              <div className={`text-2xl font-bold ${m.color || "text-[var(--text)]"}`}>{m.value}</div>
              <div className="mt-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted)]">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={onRestart}
            className="rounded-[var(--r-md)] bg-[var(--text)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)]"
          >
            Refazer prova
          </button>
          <Link to="/provas" className="soft-panel rounded-[var(--r-md)] px-5 py-2.5 text-sm font-semibold">
            Voltar para acervo
          </Link>
        </div>
      </section>

      {/* Revisão comentada */}
      <div>
        <h2 className="mb-3 px-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
          Revisão — {r.reviewItems.length} questões
        </h2>
        <div className="grid gap-3">
          {r.reviewItems.map((item) => (
            <article key={item.questionId} className="glass-panel rounded-[var(--r-xl)] p-5">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Questão {item.number}
                </span>
                <span className={`rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] ${
                  item.isCorrect
                    ? "bg-emerald-400/15 text-emerald-200"
                    : "bg-rose-400/15 text-rose-200"
                }`}>
                  {item.isCorrect ? "✓ Correta" : "✗ Incorreta"}
                </span>
              </div>

              <p className="text-[0.9rem] font-medium leading-[1.8] text-[var(--text)]">
                {item.question.statement}
              </p>

              {/* Comparação de respostas */}
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className={`rounded-[var(--r-sm)] border p-3 ${
                  item.isCorrect
                    ? "border-emerald-400/25 bg-emerald-400/7"
                    : "border-rose-400/25 bg-rose-400/7"
                }`}>
                  <div className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Sua resposta
                  </div>
                  <div className="text-sm leading-[1.6] text-[var(--text)]">
                    {getAltText(item.question, item.selectedAlternativeId)}
                  </div>
                </div>
                {!item.isCorrect && (
                  <div className="rounded-[var(--r-sm)] border border-emerald-400/25 bg-emerald-400/7 p-3">
                    <div className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      Resposta correta
                    </div>
                    <div className="text-sm leading-[1.6] text-[var(--text)]">
                      {getAltText(item.question, item.correctAlternativeId)}
                    </div>
                  </div>
                )}
              </div>

              {/* Fundamentos */}
              <div className="mt-3 grid gap-2">
                {item.question.explanation && (
                  <InfoBlock title="Explicação" content={item.question.explanation} />
                )}
                {item.question.support && (
                  <InfoBlock title="Fundamento legal" content={item.question.support} />
                )}
                {item.question.lawText && (
                  <InfoBlock title="Lei seca" content={item.question.lawText} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PÁGINA PRINCIPAL — SESSÃO DE PROVA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function OfficialExamSessionPage() {
  const navigate = useNavigate();
  const { examId } = useParams();
  const {
    finalizeOfficialExam,
    getOfficialExam,
    getOfficialExamElapsedSeconds,
    getOfficialExamSession,
    goToOfficialExamQuestion,
    saveOfficialExamAnswer,
    startOfficialExam,
    toggleOfficialExamReviewMark
  } = useStudy();

  const officialExam = getOfficialExam(examId);
  const session      = getOfficialExamSession(examId);
  const [, setTick]  = useState(0);
  const [gridOpen, setGridOpen] = useState(false);

  useEffect(() => {
    if (officialExam && !session) startOfficialExam(examId);
  }, [examId, officialExam, session, startOfficialExam]);

  useEffect(() => {
    if (!session || session.status !== "in_progress") return;
    const t = setInterval(() => setTick((c) => c + 1), 1000);
    return () => clearInterval(t);
  }, [session]);

  const elapsedSeconds = getOfficialExamElapsedSeconds(examId);

  const currentEntry = useMemo(() => {
    if (!officialExam || !session) return null;
    return officialExam.questions.find((q) => q.number === session.currentQuestionNumber) ?? null;
  }, [officialExam, session]);

  /* Sem dados */
  if (!officialExam || !session) {
    return (
      <div className="glass-panel rounded-[var(--r-xl)] p-8">
        <h1 className="text-xl font-semibold text-[var(--text)]">Prova não encontrada.</h1>
        <Link to="/provas" className="mt-4 inline-flex rounded-[var(--r-md)] bg-[var(--text)] px-4 py-2.5 text-sm font-semibold text-[var(--bg)]">
          Voltar
        </Link>
      </div>
    );
  }

  /* Resultado */
  if (session.status === "completed" && session.result) {
    return (
      <ResultPage
        officialExam={officialExam}
        session={session}
        onRestart={() => { startOfficialExam(examId, { restart: true }); navigate(`/provas/${examId}`); }}
      />
    );
  }

  if (!currentEntry) return null;

  const total       = officialExam.questions.length;
  const answered    = Object.keys(session.answers).length;
  const marked      = session.markedForReview.length;
  const progress    = total > 0 ? Math.round((answered / total) * 100) : 0;
  const selectedAlt = session.answers[currentEntry.questionId]?.selectedAlternativeId ?? "";

  function nav(num) {
    goToOfficialExamQuestion(examId, num);
    setGridOpen(false);
  }

  return (
    <div className="flex flex-col gap-3">
      {/* ━━ Barra de prova — sticky ━━ */}
      <div className="glass-panel rounded-[var(--r-lg)] px-4 py-3 flex items-center gap-3 flex-wrap sticky top-0 z-20">
        {/* Título */}
        <div className="flex-1 min-w-0">
          <div className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Prova oficial
          </div>
          <div className="text-sm font-semibold text-[var(--text)] truncate">{officialExam.label}</div>
        </div>

        {/* Cronômetro */}
        <div className="flex items-center gap-1.5 rounded-[var(--r-sm)] border border-[var(--panel-border)] bg-white/4 px-3 py-1.5">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0 text-[var(--muted)]">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
          </svg>
          <span className="font-mono text-sm font-semibold text-[var(--text)]">
            {formatDuration(elapsedSeconds)}
          </span>
        </div>

        {/* Progresso numérico */}
        <div className="text-sm text-[var(--muted)] tabular-nums">
          <span className="font-semibold text-[var(--text)]">{answered}</span>/{total}
          {marked > 0 && (
            <span className="ml-2 text-amber-300 text-xs">·{marked}▸</span>
          )}
        </div>

        {/* Botão grade (mobile) */}
        <button
          type="button"
          onClick={() => setGridOpen((v) => !v)}
          className="soft-panel rounded-[var(--r-sm)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)] xl:hidden"
        >
          {gridOpen ? "Fechar" : "Grade"}
        </button>

        {/* Finalizar */}
        <button
          type="button"
          onClick={() => finalizeOfficialExam(examId)}
          className="rounded-[var(--r-md)] bg-[var(--text)] px-4 py-2 text-sm font-semibold text-[var(--bg)]"
        >
          Finalizar
        </button>

        <Link to="/provas" className="text-xs text-[var(--muted)] hover:text-[var(--text)]">
          Sair
        </Link>
      </div>

      {/* Barra de progresso fina */}
      <div className="-mt-1 h-0.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-sky-400 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Grade mobile (drawer) */}
      {gridOpen && (
        <div className="glass-panel rounded-[var(--r-lg)] p-4 slide-up xl:hidden">
          <QuestionGrid questions={officialExam.questions} session={session} onNavigate={nav} />
        </div>
      )}

      {/* Layout desktop: sidebar + card */}
      <div className="hidden xl:grid xl:grid-cols-[240px_1fr] gap-3">
        <aside className="glass-panel rounded-[var(--r-xl)] p-4 self-start sticky top-[4.5rem]">
          <QuestionGrid questions={officialExam.questions} session={session} onNavigate={nav} />
        </aside>

        <OfficialExamQuestionCard
          questionEntry={currentEntry}
          selectedAlternativeId={selectedAlt}
          isMarkedForReview={session.markedForReview.includes(currentEntry.questionId)}
          totalQuestions={total}
          onSelect={(id) => saveOfficialExamAnswer(examId, currentEntry.questionId, id)}
          onToggleReview={() => toggleOfficialExamReviewMark(examId, currentEntry.questionId)}
          onPrevious={() => nav(Math.max(1, currentEntry.number - 1))}
          onNext={() => nav(Math.min(total, currentEntry.number + 1))}
        />
      </div>

      {/* Layout mobile */}
      <div className="xl:hidden">
        <OfficialExamQuestionCard
          questionEntry={currentEntry}
          selectedAlternativeId={selectedAlt}
          isMarkedForReview={session.markedForReview.includes(currentEntry.questionId)}
          totalQuestions={total}
          onSelect={(id) => saveOfficialExamAnswer(examId, currentEntry.questionId, id)}
          onToggleReview={() => toggleOfficialExamReviewMark(examId, currentEntry.questionId)}
          onPrevious={() => nav(Math.max(1, currentEntry.number - 1))}
          onNext={() => nav(Math.min(total, currentEntry.number + 1))}
        />
      </div>
    </div>
  );
}

function InfoBlock({ title, content }) {
  return (
    <div className="soft-panel rounded-[var(--r-sm)] p-3">
      <div className="mb-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{title}</div>
      <div className="text-sm leading-[1.75] text-[var(--text-2)]">{content}</div>
    </div>
  );
}
