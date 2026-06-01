import { useState } from 'react'

const STAT_KEYS = ['charisma', 'intelligence', 'rebellion', 'strength']
const STAT_LABELS = {
  charisma: 'Charisma',
  intelligence: 'Intelligence',
  rebellion: 'Rebellion',
  strength: 'Strength',
}
const TOTAL_POINTS = 20

const initialStats = () =>
  Object.fromEntries(STAT_KEYS.map((key) => [key, 0]))

function StatAllocator({ stats, onChange, disabled }) {
  const spent = Object.values(stats).reduce((a, b) => a + b, 0)
  const remaining = TOTAL_POINTS - spent

  const adjust = (key, delta) => {
    const next = stats[key] + delta
    if (next < 0 || next > 10) return
    if (delta > 0 && remaining <= 0) return
    onChange({ ...stats, [key]: next })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg bg-violet-950/50 px-4 py-2 font-mono text-sm">
        <span className="text-violet-200">Points remaining</span>
        <span
          className={`text-xl font-bold tabular-nums ${
            remaining === 0 ? 'text-emerald-400' : 'text-amber-300'
          }`}
        >
          {remaining}
        </span>
      </div>
      {STAT_KEYS.map((key) => (
        <div key={key} className="rounded-xl border border-violet-500/30 bg-violet-950/30 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-semibold text-violet-100">{STAT_LABELS[key]}</span>
            <span className="font-mono text-2xl font-bold text-amber-300 tabular-nums">
              {stats[key]}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={disabled || stats[key] <= 0}
              onClick={() => adjust(key, -1)}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-800 text-lg font-bold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label={`Decrease ${STAT_LABELS[key]}`}
            >
              −
            </button>
            <div className="flex flex-1 gap-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-10 flex-1 rounded-sm transition-colors ${
                    i < stats[key] ? 'bg-gradient-to-t from-amber-600 to-amber-400' : 'bg-stone-800'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              disabled={disabled || stats[key] >= 10 || remaining <= 0}
              onClick={() => adjust(key, 1)}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-lg font-bold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label={`Increase ${STAT_LABELS[key]}`}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

function GrayedStatsPanel({ stats }) {
  return (
    <aside className="w-full shrink-0 border-l border-stone-300 bg-stone-100 p-6 lg:w-56">
      <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-stone-500">
        Your build
      </h3>
      <p className="mb-4 text-xs leading-relaxed text-stone-400">
        These stats no longer apply.
      </p>
      <ul className="space-y-3">
        {STAT_KEYS.map((key) => (
          <li key={key} className="flex justify-between text-stone-400">
            <span className="text-sm">{STAT_LABELS[key]}</span>
            <span className="font-mono text-sm line-through decoration-stone-400">
              {stats[key]}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

function BureaucraticForm() {
  return (
    <div className="flex-1 bg-stone-200 p-6 sm:p-10">
      <div className="mx-auto max-w-md rounded border border-stone-400 bg-stone-100 p-8 shadow-inner">
        <p className="mb-1 font-mono text-xs text-stone-500">FORM 14-B / REV. 2003</p>
        <h2 className="mb-6 border-b border-stone-400 pb-2 font-serif text-xl text-stone-700">
          Standard Compliance Registration
        </h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase text-stone-500">
              Legal name (as on file)
            </span>
            <input
              type="text"
              disabled
              placeholder="—"
              className="w-full cursor-not-allowed border border-stone-400 bg-stone-300 px-3 py-2 text-stone-500"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase text-stone-500">
              Student / minor ID
            </span>
            <input
              type="text"
              disabled
              placeholder="—"
              className="w-full cursor-not-allowed border border-stone-400 bg-stone-300 px-3 py-2 text-stone-500"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase text-stone-500">
              Acknowledgment of institutional authority
            </span>
            <input
              type="checkbox"
              disabled
              className="cursor-not-allowed accent-stone-500"
            />
            <span className="ml-2 text-sm text-stone-500">I understand my options are limited.</span>
          </label>
          <button
            type="button"
            disabled
            className="mt-6 w-full cursor-not-allowed border-2 border-stone-500 bg-stone-400 py-3 font-mono text-sm font-bold uppercase tracking-widest text-stone-600"
          >
            Comply
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-stone-500">
          Submission does not guarantee outcome.
        </p>
      </div>
    </div>
  )
}

export default function CharacterCreatorTrap() {
  const [phase, setPhase] = useState('creator')
  const [stats, setStats] = useState(initialStats)

  const spent = Object.values(stats).reduce((a, b) => a + b, 0)
  const canStart = spent === TOTAL_POINTS

  if (phase === 'trap') {
    return (
      <section className="overflow-hidden rounded-2xl border border-stone-300 shadow-xl">
        <div className="border-b border-stone-300 bg-stone-300 px-4 py-2 text-center font-mono text-xs uppercase tracking-widest text-stone-600">
          Welcome to the real system
        </div>
        <div className="flex min-h-[420px] flex-col lg:flex-row">
          <BureaucraticForm />
          <GrayedStatsPanel stats={stats} />
        </div>
      </section>
    )
  }

  return (
    <section className="overflow-hidden rounded-2xl border-2 border-violet-500/50 bg-gradient-to-b from-violet-950 to-stone-900 shadow-xl shadow-violet-900/30">
      <div className="border-b border-violet-500/30 bg-violet-900/40 px-6 py-4">
        <h2 className="font-serif text-2xl font-bold text-white">
          The Character Creator Trap
        </h2>
        <p className="mt-1 text-sm text-violet-200">
          Allocate {TOTAL_POINTS} points. Feel powerful. Then press start.
        </p>
      </div>
      <div className="grid gap-8 p-6 lg:grid-cols-[1fr_auto] lg:p-8">
        <div>
          <div className="mb-6 flex items-center gap-4 rounded-xl border border-amber-500/40 bg-amber-950/30 p-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-amber-500 text-2xl">
              ⚔
            </div>
            <div>
              <p className="font-mono text-xs uppercase text-amber-400">Class</p>
              <p className="text-lg font-bold text-white">Unbound Initiate</p>
            </div>
          </div>
          <StatAllocator stats={stats} onChange={setStats} disabled={false} />
        </div>
        <div className="flex flex-col justify-end">
          <button
            type="button"
            onClick={() => setPhase('trap')}
            disabled={!canStart}
            className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-4 text-lg font-bold uppercase tracking-wide text-stone-900 shadow-lg shadow-amber-500/30 transition hover:from-amber-400 hover:to-amber-300 disabled:cursor-not-allowed disabled:from-stone-600 disabled:to-stone-600 disabled:text-stone-400 disabled:shadow-none lg:w-auto"
          >
            Start Game
          </button>
          {!canStart && (
            <p className="mt-2 text-center text-xs text-violet-300">
              Spend all {TOTAL_POINTS} points to continue
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
