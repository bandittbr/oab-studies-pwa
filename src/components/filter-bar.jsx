import { memo, useMemo } from "react";

export const FilterBar = memo(function FilterBar({
  filters,
  subjects,
  themes,
  exams,
  difficulties,
  onChange,
  onReset
}) {
  const availableThemes = useMemo(
    () =>
      filters.subjectId === "all"
        ? themes
        : themes.filter((t) => t.subjectId === filters.subjectId),
    [filters.subjectId, themes]
  );

  const yearOptions = useMemo(
    () => Array.from(new Set(exams.map((e) => String(e.year)))).sort((a, b) => b - a),
    [exams]
  );

  const hasActiveFilters =
    filters.subjectId !== "all" ||
    filters.themeId   !== "all" ||
    filters.examId    !== "all" ||
    filters.year      !== "all" ||
    filters.difficulty !== "all" ||
    filters.onlyWrong ||
    filters.onlyFavorites ||
    filters.search;

  return (
    <section className="glass-panel rounded-[var(--r-xl)] p-4 sm:p-5 flex flex-col gap-4">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Filtros
          </div>
          <h2 className="mt-0.5 text-lg font-semibold text-[var(--text)]">
            Monte sua sessão
          </h2>
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className="soft-panel rounded-[var(--r-md)] px-3 py-2 text-xs font-semibold text-[var(--muted)] hover:text-[var(--text)] min-h-[36px]"
          >
            Limpar
          </button>
        )}
      </div>

      {/* Selects em grid responsivo */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-6">
        <Field
          label="Matéria"
          value={filters.subjectId}
          onChange={(v) => { onChange("subjectId", v); onChange("themeId", "all"); }}
          options={[{ id: "all", label: "Todas" }, ...subjects]}
        />
        <Field
          label="Tema"
          value={filters.themeId}
          onChange={(v) => onChange("themeId", v)}
          options={[{ id: "all", label: "Todos" }, ...availableThemes]}
        />
        <Field
          label="Prova"
          value={filters.examId}
          onChange={(v) => onChange("examId", v)}
          options={[{ id: "all", label: "Todas" }, ...exams]}
        />
        <Field
          label="Ano"
          value={filters.year}
          onChange={(v) => onChange("year", v)}
          options={[{ id: "all", label: "Todos" }, ...yearOptions.map((y) => ({ id: y, label: y }))]}
        />
        <Field
          label="Dificuldade"
          value={filters.difficulty}
          onChange={(v) => onChange("difficulty", v)}
          options={[{ id: "all", label: "Todas" }, ...difficulties]}
        />

        {/* Busca textual */}
        <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
          <label className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Busca
          </label>
          <div className="relative">
            <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[var(--muted)]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
            </svg>
            <input
              value={filters.search}
              onChange={(e) => onChange("search", e.target.value)}
              placeholder="lei, tutela, contrato…"
              className="w-full rounded-[var(--r-md)] border border-[var(--panel-border)] bg-white/4 pl-8 pr-3 py-2 text-xs text-[var(--text)] placeholder:text-[var(--muted)]"
            />
          </div>
        </div>
      </div>

      {/* Chips de toggle */}
      <div className="flex flex-wrap gap-2">
        <Chip
          active={filters.onlyWrong}
          onClick={() => onChange("onlyWrong", !filters.onlyWrong)}
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 shrink-0"><path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z"/><path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"/></svg>
          Apenas erradas
        </Chip>
        <Chip
          active={filters.onlyFavorites}
          onClick={() => onChange("onlyFavorites", !filters.onlyFavorites)}
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 shrink-0"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
          Favoritas
        </Chip>
      </div>
    </section>
  );
});

function Field({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-[var(--r-md)] border border-[var(--panel-border)] bg-white/4 px-3 py-2 text-xs text-[var(--text)] min-h-[38px]"
      >
        {options.map((o) => (
          <option key={o.id} value={o.id} className="bg-slate-900 text-white">
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition min-h-[36px] ${
        active
          ? "bg-[var(--text)] text-[var(--bg)]"
          : "soft-panel text-[var(--muted)] hover:text-[var(--text)]"
      }`}
    >
      {children}
    </button>
  );
}
