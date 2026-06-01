import { STAT_KEYS, STAT_LABELS } from './constants'
import StatIcon from './StatIcon'

export default function StatsSidebar({ stats, muted = false }) {
  return (
    <aside
      className={`w-full border-t border-violet-500/20 p-5 lg:w-52 lg:border-t-0 lg:border-l ${
        muted ? 'bg-zinc-950/80' : 'bg-zinc-950/50'
      }`}
    >
      <h3 className="font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
        Build
      </h3>
      <ul className="mt-3 space-y-2">
        {STAT_KEYS.map((key) => (
          <li
            key={key}
            className={`flex items-center justify-between rounded-lg border px-3 py-2 ${
              muted
                ? 'border-zinc-800/80 bg-zinc-900/40 text-zinc-600'
                : 'border-violet-500/20 bg-violet-950/20 text-zinc-200'
            }`}
          >
            <span className="flex items-center gap-2 text-sm">
              <StatIcon
                stat={key}
                className={`h-4 w-4 shrink-0 ${muted ? 'text-zinc-600' : 'text-violet-400'}`}
              />
              {STAT_LABELS[key]}
            </span>
            <span className="font-mono text-sm font-semibold tabular-nums">{stats[key]}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
