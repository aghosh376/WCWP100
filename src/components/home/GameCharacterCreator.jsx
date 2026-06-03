import {
  MAX_PER_STAT,
  STAT_ACCENTS,
  STAT_KEYS,
  STAT_LABELS,
} from '../game/constants'
import StatIcon from '../game/StatIcon'
import PixelAvatarPicker from './PixelAvatarPicker'

export const HOME_GAME_POINTS = 25

function tierForValue(value) {
  if (value >= 9) return { label: 'Legendary', className: 'text-amber-300' }
  if (value >= 7) return { label: 'Elite', className: 'text-violet-300' }
  if (value >= 4) return { label: 'Rising', className: 'text-cyan-300' }
  if (value >= 1) return { label: 'Novice', className: 'text-zinc-400' }
  return { label: 'Unassigned', className: 'text-zinc-600' }
}

export default function GameCharacterCreator({
  stats,
  onChange,
  avatar,
  onAvatarChange,
  onNext,
  canNext,
}) {
  const spent = Object.values(stats).reduce((a, b) => a + b, 0)
  const available = HOME_GAME_POINTS - spent

  const adjust = (key, delta) => {
    const next = stats[key] + delta
    if (next < 0) return
    if (delta > 0 && (available <= 0 || stats[key] >= MAX_PER_STAT)) return
    onChange({ ...stats, [key]: next })
  }

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-violet-500/50 bg-gradient-to-br from-indigo-950 via-violet-950 to-zinc-950 p-6 shadow-2xl shadow-violet-900/40 sm:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400">State 1</p>
      <h2 className="mt-1 font-serif text-2xl font-bold text-white">Character Creator</h2>
      <p className="mt-1 text-sm text-violet-200">
        Build your look and allocate {HOME_GAME_POINTS} points. Feel powerful.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-xl border border-violet-500/25 bg-black/25 p-5">
          <PixelAvatarPicker avatar={avatar} onChange={onAvatarChange} />
        </div>

        <div>
          <div className="flex items-center gap-4 rounded-xl border border-violet-500/30 bg-black/30 p-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-violet-500 text-xl font-bold text-zinc-950">
              {available}
            </div>
            <p className="text-sm text-zinc-300">
              <span className="font-medium text-violet-200">Available points</span>
              <br />
              Max {MAX_PER_STAT} per stat
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {STAT_KEYS.map((key) => {
              const value = stats[key]
              const tier = tierForValue(value)
              const canAdd = available > 0 && value < MAX_PER_STAT
              return (
                <div
                  key={key}
                  className="rounded-xl border border-violet-500/30 bg-violet-950/30 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${STAT_ACCENTS[key]}`}
                      >
                        <StatIcon stat={key} className="h-5 w-5 text-zinc-950" />
                      </span>
                      <div>
                        <span className="font-semibold text-zinc-100">{STAT_LABELS[key]}</span>
                        <p className={`text-xs ${tier.className}`}>{tier.label}</p>
                      </div>
                    </div>
                    <span className="font-mono text-2xl font-bold text-amber-300">{value}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => adjust(key, -1)}
                      disabled={value <= 0}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-lg font-bold disabled:opacity-30"
                    >
                      −
                    </button>
                    <div className="flex h-2 flex-1 gap-0.5">
                      {Array.from({ length: MAX_PER_STAT }).map((_, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm ${i < value ? `bg-gradient-to-t ${STAT_ACCENTS[key]}` : 'bg-zinc-800'}`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => adjust(key, 1)}
                      disabled={!canAdd}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-lg font-bold disabled:opacity-30"
                    >
                      +
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        className="mt-8 w-full rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 py-4 text-lg font-bold uppercase tracking-wider text-zinc-900 shadow-lg shadow-amber-500/30 hover:brightness-110 disabled:from-zinc-700 disabled:to-zinc-700 disabled:text-zinc-500"
      >
        Next
      </button>
    </div>
  )
}
