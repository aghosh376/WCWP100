import StatsSidebar from './StatsSidebar'

export default function GameFrame({ children, onReset, stats, showStats = true, mutedStats = false }) {
  return (
    <section className="overflow-hidden rounded-xl border border-violet-500/30 bg-zinc-900 shadow-2xl shadow-violet-950/40">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-violet-500/20 bg-gradient-to-r from-violet-950/80 to-zinc-900 px-4 py-2">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300/80">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live session
        </div>
        <button
          type="button"
          onClick={onReset}
          className="rounded-md border border-zinc-600 bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-violet-500/50 hover:text-violet-200"
        >
          Reset
        </button>
      </div>
      <div className={`flex min-h-[440px] flex-col ${showStats ? 'lg:flex-row' : ''}`}>
        <div className="flex-1">{children}</div>
        {showStats && <StatsSidebar stats={stats} muted={mutedStats} />}
      </div>
    </section>
  )
}
