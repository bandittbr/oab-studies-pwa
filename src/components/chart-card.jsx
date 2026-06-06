export function ChartCard({ data }) {
  const maxValue = Math.max(...data.map((item) => item.total), 1);

  return (
    <div className="glass-panel rounded-[2rem] p-5">
      <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Desempenho 7 dias</div>
      <div className="mt-4 flex h-52 items-end justify-between gap-3">
        {data.map((point) => {
          const height = Math.max(16, Math.round((point.total / maxValue) * 160));
          return (
            <div key={point.date} className="flex flex-1 flex-col items-center gap-3">
              <div className="text-xs text-[var(--muted)]">{point.total}</div>
              <div className="relative flex w-full items-end justify-center rounded-[1.4rem] bg-white/5 px-2 py-2">
                <div
                  className="w-full rounded-[1rem] bg-[linear-gradient(180deg,rgba(125,211,252,0.95),rgba(245,158,11,0.9))] transition-all duration-500"
                  style={{ height }}
                />
                <div className="absolute inset-x-2 bottom-2 h-[2px] rounded-full bg-white/10" />
              </div>
              <div className="text-center text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                {point.label}
              </div>
              <div className="text-xs font-medium text-[var(--text)]">{point.accuracy}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
