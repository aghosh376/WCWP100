import {
  MAX_PER_STAT,
  STAT_ACCENTS,
  STAT_KEYS,
  STAT_LABELS,
  TOTAL_POINTS,
} from './constants'
import StatIcon from './StatIcon'

function tierForValue(value) {
  if (value >= 9) return { label: 'Legendary', className: 'text-amber-300' }
  if (value >= 7) return { label: 'Elite', className: 'text-violet-300' }
  if (value >= 4) return { label: 'Rising', className: 'text-cyan-300' }
  if (value >= 1) return { label: 'Novice', className: 'text-zinc-400' }
  return { label: 'Unassigned', className: 'text-zinc-600' }
}

export default function CharacterCreatorPhase({ stats, onChange, onStart, canStart }) {
  const spent = Object.values(stats).reduce((a, b) => a + b, 0)
  const available = TOTAL_POINTS - spent

  const adjust = (key, delta) => {
    const next = stats[key] + delta
    if (next < 0) return
    if (delta > 0 && (available <= 0 || stats[key] >= MAX_PER_STAT)) return
    onChange({ ...stats, [key]: next })
  }

  return (
    <div className="p-6 sm:p-8">
      <div className="border-b border-violet-500/30 pb-5">
        <h2 className="font-serif text-2xl font-bold text-zinc-50">Character Creator</h2>
      </div>

      <div className="mt-6 space-y-5">
        <div className="flex items-center gap-4 rounded-xl border border-violet-500/30 bg-zinc-950/80 p-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-violet-500 text-lg font-bold text-zinc-950 shadow-lg shadow-violet-500/30">
            {available}
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-violet-300">
              Points in reserve
            </p>
            <p className="text-sm text-zinc-400">
              Up to {MAX_PER_STAT} per stat · {available} remaining
            </p>
          </div>
          <div className="ml-auto hidden gap-1 sm:flex">
            {Array.from({ length: TOTAL_POINTS }).map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i < spent ? 'bg-amber-400 shadow-sm shadow-amber-400/50' : 'bg-zinc-700'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {STAT_KEYS.map((key) => {
            const value = stats[key]
            const tier = tierForValue(value)
            const atCap = value >= MAX_PER_STAT
            const canAdd = available > 0 && value < MAX_PER_STAT

            return (
              <div
                key={key}
                className={`relative overflow-hidden rounded-xl border p-4 ${
                  atCap
                    ? 'border-amber-500/50 bg-amber-950/20'
                    : 'border-zinc-700/80 bg-zinc-900/80 hover:border-violet-500/40'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${STAT_ACCENTS[key]}`}
                    >
                      <StatIcon stat={key} className="h-5 w-5 text-zinc-950" />
                    </span>
                    <div>
                      <span className="font-semibold text-zinc-100">{STAT_LABELS[key]}</span>
                      <p className={`text-xs font-medium ${tier.className}`}>{tier.label}</p>
                    </div>
                  </div>
                  <span className="font-mono text-2xl font-bold text-zinc-100">{value}</span>
                </div>
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: MAX_PER_STAT }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-sm ${
                        i < value ? `bg-gradient-to-t ${STAT_ACCENTS[key]}` : 'bg-zinc-800'
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => adjust(key, -1)}
                    disabled={value <= 0}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-800 text-lg font-bold disabled:opacity-25"
                  >
                    −
                  </button>
                  <span className="font-mono text-xs text-zinc-500">
                    {value}/{MAX_PER_STAT}
                  </span>
                  <button
                    type="button"
                    onClick={() => adjust(key, 1)}
                    disabled={!canAdd}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-lg font-bold text-white disabled:opacity-25"
                  >
                    +
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <button
          type="button"
          onClick={onStart}
          disabled={!canStart}
          className="w-full rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 py-4 text-lg font-bold uppercase tracking-wider text-zinc-900 shadow-lg shadow-amber-500/20 hover:brightness-110 disabled:from-zinc-700 disabled:to-zinc-700 disabled:text-zinc-500 disabled:shadow-none"
        >
          Continue to Avatar
        </button>
      </div>
    </div>
  )
}
