export function LawAiPanel({ articleAnnotation, aiPack, onGenerateAiPack, onNoteChange }) {
  return (
    <section className="glass-panel rounded-[2rem] p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Assistencia juridica</div>
          <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">Resumo e simplificacao</h3>
        </div>
        <button
          type="button"
          onClick={onGenerateAiPack}
          className="rounded-2xl bg-[var(--text)] px-4 py-3 text-sm font-semibold text-[var(--bg)]"
        >
          Gerar saida IA
        </button>
      </div>

      {aiPack ? (
        <div className="mt-5 grid gap-4">
          <article className="soft-panel rounded-[1.4rem] p-4">
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Resumo</div>
            <div className="mt-2 text-sm leading-7 text-[var(--text)]">{aiPack.summary}</div>
          </article>
          <article className="soft-panel rounded-[1.4rem] p-4">
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Simplificado</div>
            <div className="mt-2 text-sm leading-7 text-[var(--text)]">{aiPack.simplified}</div>
          </article>
        </div>
      ) : null}

      <label className="mt-5 block">
        <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Nota do artigo</span>
        <textarea
          value={articleAnnotation.personalNote}
          onChange={(event) => onNoteChange(event.target.value)}
          placeholder="Anote interpretacoes, pegadinhas e relacoes com questoes."
          className="min-h-32 w-full rounded-[1.4rem] border border-[var(--panel-border)] bg-white/5 px-4 py-4 text-sm text-[var(--text)] outline-none"
        />
      </label>
    </section>
  );
}
