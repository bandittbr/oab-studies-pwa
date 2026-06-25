export function ChartCard({ data }) {
  const maxValue = Math.max(...data.map((item) => item.total), 1);

  return (
    <div className="glass-panel rounded-[var(--r-xl)] p-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <div>
          <div className="label-caps">Desempenho</div>
          <h3 className="mt-0.5 text-base font-semibold text-[var(--text)]">Últimos 7 dias</h3>
        </div>
        {/* Legenda */}
        <div className="flex items-center gap-3 text-[0.65rem] text-[var(--muted)]">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand)]" />
            Acertos
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-rose-400/70" />
            Erros
          </span>
        </div>
      </div>

      {/* Barras */}
      <div className="flex items-end justify-between gap-2" style={{ height: "160px" }}>
        {data.map((point) => {
          const hasData   = point.total > 0;
          const barH      = Math.max(8, Math.round((point.total / maxValue) * 140));
          const correctH  = hasData ? Math.round(barH * (point.accuracy / 100)) : 0;
          const wrongH    = barH - correctH;
          const isToday   = point.label?.toLowerCase().includes("hoje") || point.isToday;

          return (
            <div key={point.date} className="group flex flex-1 flex-col items-center gap-2">
              {/* Count label — aparece no hover */}
              <div className={`text-[0.65rem] font-medium transition-opacity ${
                hasData ? "text-[var(--text-2)] group-hover:text-[var(--text)]" : "text-[var(--muted)] opacity-0"
              }`}>
                {point.total}
              </div>

              {/* Bar */}
              <div
                className="relative w-full flex flex-col justify-end overflow-hidden rounded-[var(--r-sm)] transition-all duration-300 group-hover:opacity-90"
                style={{
                  height: `${barH}px`,
                  background: "rgba(255,255,255,0.05)",
                  border: isToday ? "1px solid rgba(139,127,248,0.35)" : "1px solid transparent"
                }}
                title={`${point.total} questões — ${point.accuracy}% de acerto`}
              >
                {hasData && (
                  <>
                    {/* Erros */}
                    {wrongH > 0 && (
                      <div
                        style={{
                          height: `${wrongH}px`,
                          background: "rgba(248,113,113,0.5)",
                          flexShrink: 0
                        }}
                      />
                    )}
                    {/* Acertos */}
                    {correctH > 0 && (
                      <div
                        style={{
                          height: `${correctH}px`,
                          background: isToday
                            ? "linear-gradient(180deg,#a78bfa,#818cf8)"
                            : "linear-gradient(180deg,var(--brand),rgba(139,127,248,0.7))",
                          flexShrink: 0
                        }}
                      />
                    )}
                  </>
                )}
              </div>

              {/* Dia */}
              <div className={`text-center text-[0.62rem] uppercase tracking-[0.1em] transition-colors ${
                isToday
                  ? "font-bold text-[var(--brand)]"
                  : "text-[var(--muted)] group-hover:text-[var(--text-2)]"
              }`}>
                {point.label}
              </div>

              {/* Accuracy */}
              <div className={`text-[0.62rem] font-medium ${
                !hasData ? "opacity-0" :
                point.accuracy >= 70 ? "text-emerald-400" :
                point.accuracy >= 50 ? "text-amber-400" :
                "text-rose-400"
              }`}>
                {hasData ? `${point.accuracy}%` : "—"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
