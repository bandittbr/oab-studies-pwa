import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { aiCapabilities, createAiTaskBlueprint } from "../ai/contracts";
import { officialArchiveManifest } from "../domain/content/official-archive-manifest";
import { exportProgressSnapshot } from "../services/progress-portability";
import { useStudy } from "../state/study-context";

function prettyJson(value) {
  return JSON.stringify(value, null, 2);
}

function downloadJson(filename, payload) {
  const blob = new Blob([prettyJson(payload)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

async function readFileAsJson(file) {
  const text = await file.text();
  return JSON.parse(text);
}


// ── Proteção de acesso ao Studio ──────────────────────────────
const STUDIO_PIN = "danilo2026";

function StudioGate({ children }) {
  const stored = typeof window !== "undefined" ? sessionStorage.getItem("studio-auth") : null;
  const [unlocked, setUnlocked] = useState(stored === "1");
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  if (unlocked) return children;
  function handleSubmit(e) {
    e.preventDefault();
    if (pin === STUDIO_PIN) { sessionStorage.setItem("studio-auth", "1"); setUnlocked(true); }
    else { setError(true); setPin(""); }
  }
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="glass-panel rounded-[2rem] p-8 w-full max-w-sm text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--text)]/8">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7 text-[var(--muted)]"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
        </div>
        <h2 className="text-lg font-semibold text-[var(--text)]">Acesso restrito</h2>
        <p className="mt-1 text-sm text-[var(--muted)]">Digite a senha para acessar o Studio</p>
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
          <input type="password" value={pin} onChange={(e) => { setPin(e.target.value); setError(false); }} placeholder="Senha" autoFocus
            className={"w-full rounded-[1.4rem] border px-4 py-3 text-sm text-center text-[var(--text)] bg-white/5 outline-none " + (error ? "border-rose-400/60" : "border-[var(--panel-border)]")} />
          {error && <p className="text-xs text-rose-400">Senha incorreta</p>}
          <button type="submit" className="rounded-[1.4rem] bg-[var(--text)] px-4 py-3 text-sm font-semibold text-[var(--bg)]">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export function PlatformPage() {
  const navigate = useNavigate();
  const {
    adaptivePlan,
    aiContext,
    contentPacks,
    generatePerformanceAiPack,
    getPerformanceAiPack,
    globalSearchQuery,
    globalSearchResults,
    importQuestionBatch,
    importProgressSnapshot,
    importQuestionPack,
    importLawPack,
    importState,
    removeContentPack,
    clearImportedContent,
    repository,
    setGlobalSearchQuery,
    state
  } = useStudy();
  const [questionJson, setQuestionJson] = useState("");
  const [batchJson, setBatchJson] = useState("");
  const [lawJson, setLawJson] = useState("");
  const [backupJson, setBackupJson] = useState("");

  const aiBlueprints = useMemo(
    () =>
      aiCapabilities.map((capability) =>
        createAiTaskBlueprint(capability.id, {
          summary: capability.description,
          context: aiContext
        })
      ),
    [aiContext]
  );
  const performanceAiPack = getPerformanceAiPack();

  return (
    <StudioGate>
      <div className="grid gap-5">
      <section className="glass-panel rounded-[2rem] p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Studio</div>
            <h1 className="mt-3 text-4xl font-semibold text-[var(--text)]">
              Ecossistema juridico pessoal
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
              Centro operacional para importacao massiva, busca global, backup, sessoes
              inteligentes e preparacao para IA sem acoplamento com APIs externas.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => downloadJson("lexflow-progress.json", exportProgressSnapshot(state))}
              className="rounded-2xl bg-[var(--text)] px-4 py-3 text-sm font-semibold text-[var(--bg)]"
            >
              Exportar progresso
            </button>
            <button
              type="button"
              onClick={clearImportedContent}
              className="soft-panel rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)]"
            >
              Limpar conteudo importado
            </button>
            <a
              href="/samples/questions-import-template.json"
              className="soft-panel rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)]"
            >
              Template questoes
            </a>
            <a
              href="/samples/questions-batch-template.json"
              className="soft-panel rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)]"
            >
              Template lote oficial
            </a>
            <a
              href="/samples/official-oab-package-template.json"
              className="soft-panel rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)]"
            >
              Template pacote oficial
            </a>
            <a
              href="/samples/official-oab-seed-manifest.json"
              className="soft-panel rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)]"
            >
              Manifesto de seed
            </a>
            <a
              href="/samples/law-import-template.json"
              className="soft-panel rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)]"
            >
              Template leis
            </a>
          </div>
        </div>

        {importState.message ? (
          <div
            className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
              importState.status === "error"
                ? "border-rose-400/30 bg-rose-400/10 text-rose-100"
                : importState.status === "success"
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-50"
                  : "border-sky-400/30 bg-sky-400/10 text-sky-50"
            }`}
          >
            {importState.message}
          </div>
        ) : null}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <JsonImporterCard
          title="Pipeline oficial em lote"
          description="Aceita multiplas provas por lote, com fontes JSON e pacotes oficiais gerados a partir dos PDFs reais da OAB."
          value={batchJson}
          onChange={setBatchJson}
          onImport={async () => {
            const parsed = JSON.parse(batchJson);
            await importQuestionBatch(parsed);
            setBatchJson("");
          }}
          onLoadFile={async (file) => {
            const parsed = await readFileAsJson(file);
            setBatchJson(prettyJson(parsed));
          }}
        />
        <JsonImporterCard
          title="Importador profissional de questoes"
          description="Aceita JSON com enunciado, alternativas, correta, explicacao, fundamento, tags, prova, ano, dificuldade, tema e materia."
          value={questionJson}
          onChange={setQuestionJson}
          onImport={async () => {
            const parsed = JSON.parse(questionJson);
            await importQuestionPack(parsed);
            setQuestionJson("");
          }}
          onLoadFile={async (file) => {
            const parsed = await readFileAsJson(file);
            setQuestionJson(prettyJson(parsed));
          }}
        />
        <JsonImporterCard
          title="Importador de lei seca"
          description="Aceita estruturas de constituicao, codigos e leis com livros, titulos, capitulos, secoes e artigos."
          value={lawJson}
          onChange={setLawJson}
          onImport={async () => {
            const parsed = JSON.parse(lawJson);
            await importLawPack(parsed);
            setLawJson("");
          }}
          onLoadFile={async (file) => {
            const parsed = await readFileAsJson(file);
            setLawJson(prettyJson(parsed));
          }}
        />
      </section>

      {importState.report ? (
        <section className="glass-panel rounded-[2rem] p-5">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Curadoria automatica</div>
          <div className="mt-4 grid gap-3 md:grid-cols-6">
            <ReportMetric label="Questoes" value={importState.report.summary.questions} />
            <ReportMetric label="Provas" value={importState.report.summary.officialExams} />
            <ReportMetric label="Issues" value={importState.report.summary.issues} />
            <ReportMetric label="Warnings" value={importState.report.summary.warnings} />
            <ReportMetric label="Duplicadas" value={importState.report.summary.duplicates} />
            <ReportMetric label="Conflitos" value={importState.report.summary.conflicts ?? 0} />
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-3">
            <ReportList title="Issues" items={importState.report.issues} emptyLabel="Sem bloqueios obrigatorios." />
            <ReportList title="Warnings" items={importState.report.warnings} emptyLabel="Sem alertas relevantes." />
            <ReportList title="Duplicadas" items={importState.report.duplicates} emptyLabel="Sem duplicatas detectadas." />
          </div>
          <div className="mt-4">
            <ReportList title="Conflitos" items={importState.report.conflicts ?? []} emptyLabel="Sem conflitos de gabarito ou numeracao." />
          </div>
        </section>
      ) : null}

      <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="glass-panel rounded-[2rem] p-5">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Busca global</div>
          <input
            value={globalSearchQuery}
            onChange={(event) => setGlobalSearchQuery(event.target.value)}
            placeholder="art. 300, boa-fe, tutela de urgencia, erro de tipo..."
            className="mt-4 w-full rounded-2xl border border-[var(--panel-border)] bg-white/5 px-4 py-4 text-sm text-[var(--text)] outline-none"
          />
          <div className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            {repository.searchIndex.tokenCount} tokens indexados offline
          </div>

          <div className="mt-5 space-y-3">
            {globalSearchResults.length ? (
              globalSearchResults.slice(0, 10).map((result) => (
                <button
                  key={`${result.type}-${result.id}`}
                  type="button"
                  onClick={() =>
                    navigate(
                      result.type === "question"
                        ? `/resolver?questionId=${result.id}`
                        : `/leis?artigo=${result.id}`
                    )
                  }
                  className="soft-panel block w-full rounded-[1.4rem] p-4 text-left"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    {result.type === "question" ? "Questao" : "Artigo"}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-[var(--text)]">
                    {result.type === "question"
                      ? result.item.statement
                      : `${result.item.articleNumber} - ${result.item.title}`}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    {result.subtitle}
                  </div>
                </button>
              ))
            ) : (
              <div className="soft-panel rounded-[1.4rem] p-4 text-sm leading-7 text-[var(--muted)]">
                Digite um termo para pesquisar simultaneamente no banco de questoes e na lei seca.
              </div>
            )}
          </div>
        </article>

        <article className="glass-panel rounded-[2rem] p-5">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Camada pronta para IA</div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={generatePerformanceAiPack}
              className="rounded-2xl bg-[var(--text)] px-4 py-3 text-sm font-semibold text-[var(--bg)]"
            >
              Gerar analise local
            </button>
          </div>
          <div className="mt-5 grid gap-3">
            {aiCapabilities.map((capability, index) => (
              <div key={capability.id} className="soft-panel rounded-[1.4rem] p-4">
                <div className="text-sm font-semibold text-[var(--text)]">{capability.label}</div>
                <div className="mt-2 text-sm leading-7 text-[var(--muted)]">{capability.description}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  blueprint {index + 1}: {aiBlueprints[index].capabilityId}
                </div>
              </div>
            ))}
          </div>
          {performanceAiPack ? (
            <article className="soft-panel mt-5 rounded-[1.4rem] p-4">
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Analise local</div>
              <div className="mt-2 text-sm leading-7 text-[var(--text)]">{performanceAiPack.analysis}</div>
              <div className="mt-3 text-sm leading-7 text-[var(--muted)]">{performanceAiPack.recommendation}</div>
            </article>
          ) : null}
        </article>
      </section>

      <section className="glass-panel rounded-[2rem] p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Acervo oficial</div>
            <div className="mt-2 text-lg font-semibold text-[var(--text)]">Registro incremental preparado para provas reais</div>
          </div>
          <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            {officialArchiveManifest.registries.length} edicoes verificadas
          </div>
        </div>
        <div className="mt-5 grid gap-3 xl:grid-cols-3">
          {officialArchiveManifest.registries.map((entry) => (
            <article key={entry.id} className="soft-panel rounded-[1.4rem] p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-[var(--text)]">OAB {entry.edition}</div>
                <div className="rounded-full border border-[var(--panel-border)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  {entry.phase}
                </div>
              </div>
              <div className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {entry.questionCount} questoes, {entry.durationMinutes} minutos, ano {entry.year}.
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                fontes oficiais prontas para seed incremental
              </div>
              <a
                href={entry.generatedPackPath}
                className="mt-4 inline-flex rounded-2xl border border-[var(--panel-border)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text)]"
              >
                Abrir pacote gerado
              </a>
            </article>
          ))}
        </div>
        <div className="soft-panel mt-5 rounded-[1.4rem] p-4 text-sm leading-7 text-[var(--muted)]">
          Seeder profissional:
          <code className="ml-2 rounded bg-black/20 px-2 py-1 text-[var(--text)]">
            npm run seed:official
          </code>
        </div>
      </section>

      <section className="glass-panel rounded-[2rem] p-5">
        <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Rotina inteligente</div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {adaptivePlan.studyRoutine.map((step) => (
            <article key={step.title} className="soft-panel rounded-[1.4rem] p-4">
              <div className="text-sm font-semibold text-[var(--text)]">{step.title}</div>
              <div className="mt-2 text-sm leading-7 text-[var(--muted)]">{step.description}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <article className="glass-panel rounded-[2rem] p-5">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Pacotes importados</div>
          <div className="mt-5 space-y-3">
            {contentPacks.length ? (
              contentPacks.map((pack) => (
                <div key={pack.packId} className="soft-panel rounded-[1.4rem] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-[var(--text)]">{pack.packName}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                        {pack.type} • v{pack.version}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeContentPack(pack.packId)}
                      className="rounded-full border border-[var(--panel-border)] px-3 py-2 text-xs font-semibold text-[var(--text)]"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="soft-panel rounded-[1.4rem] p-4 text-sm leading-7 text-[var(--muted)]">
                Nenhum pacote adicional foi importado ainda.
              </div>
            )}
          </div>
        </article>

        <article className="glass-panel rounded-[2rem] p-5">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Importar backup</div>
          <textarea
            value={backupJson}
            onChange={(event) => setBackupJson(event.target.value)}
            placeholder="Cole aqui o JSON exportado de progresso"
            className="mt-4 min-h-52 w-full rounded-[1.4rem] border border-[var(--panel-border)] bg-white/5 px-4 py-4 text-sm text-[var(--text)] outline-none"
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                importProgressSnapshot(backupJson);
                setBackupJson("");
              }}
              className="rounded-2xl bg-[var(--text)] px-4 py-3 text-sm font-semibold text-[var(--bg)]"
            >
              Importar progresso
            </button>
            <label className="soft-panel cursor-pointer rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)]">
              Abrir arquivo
              <input
                type="file"
                accept="application/json"
                className="hidden"
                onChange={async (event) => {
                  const file = event.target.files?.[0];
                  if (!file) {
                    return;
                  }
                  const parsed = await file.text();
                  setBackupJson(parsed);
                }}
              />
            </label>
          </div>
        </article>
      </section>
    </div>
    </StudioGate>
  );
}

function JsonImporterCard({ title, description, value, onChange, onImport, onLoadFile }) {
  return (
    <article className="glass-panel rounded-[2rem] p-5">
      <div className="text-lg font-semibold text-[var(--text)]">{title}</div>
      <div className="mt-2 text-sm leading-7 text-[var(--muted)]">{description}</div>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="{ ...json }"
        className="mt-4 min-h-72 w-full rounded-[1.4rem] border border-[var(--panel-border)] bg-white/5 px-4 py-4 text-sm text-[var(--text)] outline-none"
      />
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onImport}
          disabled={!value.trim()}
          className="rounded-2xl bg-[var(--text)] px-4 py-3 text-sm font-semibold text-[var(--bg)] disabled:opacity-50"
        >
          Importar agora
        </button>
        <label className="soft-panel cursor-pointer rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)]">
          Abrir arquivo
          <input
            type="file"
            accept="application/json"
            className="hidden"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file) {
                return;
              }
              await onLoadFile(file);
            }}
          />
        </label>
      </div>
    </article>
  );
}

function ReportMetric({ label, value }) {
  return (
    <div className="soft-panel rounded-2xl p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-[var(--text)]">{value}</div>
    </div>
  );
}

function ReportList({ title, items, emptyLabel }) {
  return (
    <article className="soft-panel rounded-[1.5rem] p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{title}</div>
      <div className="mt-3 space-y-3">
        {items.length ? (
          items.slice(0, 8).map((item, index) => (
            <div key={`${title}-${index}`} className="rounded-2xl border border-[var(--panel-border)] px-3 py-3 text-sm leading-6 text-[var(--text)]">
              {item.message}
            </div>
          ))
        ) : (
          <div className="rounded-2xl border border-[var(--panel-border)] px-3 py-3 text-sm leading-6 text-[var(--muted)]">
            {emptyLabel}
          </div>
        )}
      </div>
    </article>
  );
}
