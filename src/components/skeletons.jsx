export function PageSkeleton() {
  return (
    <div className="grid gap-5">
      <div className="glass-panel animate-pulse rounded-[2rem] p-6">
        <div className="h-4 w-32 rounded-full bg-white/10" />
        <div className="mt-4 h-10 w-2/3 rounded-full bg-white/10" />
        <div className="mt-4 h-4 w-full rounded-full bg-white/8" />
        <div className="mt-2 h-4 w-5/6 rounded-full bg-white/8" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="glass-panel animate-pulse rounded-[2rem] p-5">
            <div className="h-4 w-24 rounded-full bg-white/10" />
            <div className="mt-4 h-8 w-16 rounded-full bg-white/10" />
            <div className="mt-5 h-3 w-full rounded-full bg-white/8" />
          </div>
        ))}
      </div>
    </div>
  );
}
