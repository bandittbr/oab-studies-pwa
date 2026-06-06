export function QuestionCommentaryPanel({
  annotation,
  aiPack,
  draftComment,
  onDraftCommentChange,
  onAddManualComment,
  onNoteChange
}) {
  return (
    <section className="glass-panel rounded-[2rem] p-5 flex flex-col gap-5">

      {/* Explicação IA — acima de tudo */}
      {aiPack && (
        <article className="soft-panel rounded-[1.4rem] p-4">
          <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">Explicação IA</div>
          <div className="text-sm leading-7 text-[var(--text)]">{aiPack.explanation}</div>
        </article>
      )}

      {/* Comentários e notas pessoais */}
      <div>
        <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Comentarios e notas</div>
        <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">Camada pessoal</h3>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Nota pessoal</span>
        <textarea
          value={annotation.personalNote}
          onChange={(event) => onNoteChange(event.target.value)}
          placeholder="Escreva seu raciocinio, pontos de erro e lembretes pessoais."
          className="min-h-32 w-full rounded-[1.4rem] border border-[var(--panel-border)] bg-white/5 px-4 py-4 text-sm text-[var(--text)] outline-none"
        />
      </label>

      <div className="grid gap-3">
        {annotation.comments.filter((c) => c.type !== "ai").length ? (
          annotation.comments.filter((c) => c.type !== "ai").map((comment) => (
            <article key={comment.id} className="soft-panel rounded-[1.4rem] p-4">
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{comment.type}</div>
              <div className="mt-2 text-sm leading-7 text-[var(--text)]">{comment.content}</div>
            </article>
          ))
        ) : (
          <div className="soft-panel rounded-[1.4rem] p-4 text-sm leading-7 text-[var(--muted)]">
            Nenhum comentario salvo ainda para esta questao.
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        <input
          value={draftComment}
          onChange={(event) => onDraftCommentChange(event.target.value)}
          placeholder="Adicionar comentario manual"
          className="min-w-[220px] flex-1 rounded-2xl border border-[var(--panel-border)] bg-white/5 px-4 py-3 text-sm text-[var(--text)] outline-none"
        />
        <button
          type="button"
          onClick={onAddManualComment}
          className="soft-panel rounded-2xl px-4 py-3 text-sm font-semibold"
        >
          Salvar comentario
        </button>
      </div>
    </section>
  );
}
