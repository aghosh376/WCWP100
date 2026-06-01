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

function StatAllocator({ stats, onChange }) {
  const spent = Object.values(stats).reduce((a, b) => a + b, 0)
  const available = TOTAL_POINTS - spent

  const adjust = (key, delta) => {
    const next = stats[key] + delta
    if (next < 0) return
    if (delta > 0 && available <= 0) return
    onChange({ ...stats, [key]: next })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg border border-indigo-400/40 bg-indigo-950/60 px-4 py-3">
        <span className="text-sm font-medium text-indigo-200">Available Points</span>
        <span
          className={`font-mono text-2xl font-bold tabular-nums ${
            available === 0 ? 'text-emerald-400' : 'text-amber-300'
          }`}
        >
          {available}
        </span>
      </div>

      {STAT_KEYS.map((key) => (
        <div
          key={key}
          className="rounded-xl border border-indigo-500/30 bg-slate-900/80 p-4 shadow-inner"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="font-semibold text-indigo-100">{STAT_LABELS[key]}</span>
            <span className="font-mono text-xl font-bold text-amber-300">{stats[key]}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => adjust(key, -1)}
              disabled={stats[key] <= 0}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-700 text-xl font-bold text-white hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label={`Decrease ${STAT_LABELS[key]}`}
            >
              −
            </button>
            <div className="flex h-3 flex-1 gap-0.5 overflow-hidden rounded-full bg-slate-800">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 transition-colors ${
                    i < stats[key] ? 'bg-gradient-to-t from-amber-500 to-amber-300' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => adjust(key, 1)}
              disabled={available <= 0}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-xl font-bold text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-30"
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
    <aside className="w-full border-t border-slate-300 bg-slate-100 p-6 lg:w-52 lg:border-t-0 lg:border-l">
      <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">Your stats</h3>
      <p className="mt-2 text-xs text-slate-400">No effect in this system.</p>
      <ul className="mt-4 space-y-3">
        {STAT_KEYS.map((key) => (
          <li
            key={key}
            className="flex justify-between rounded border border-slate-200 bg-slate-200/80 px-3 py-2 text-slate-400"
          >
            <span className="text-sm">{STAT_LABELS[key]}</span>
            <span className="font-mono text-sm line-through opacity-60">{stats[key]}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

function BureaucraticForm() {
  return (
    <div className="flex-1 bg-slate-300 p-6 sm:p-10">
      <div className="mx-auto max-w-lg border-2 border-slate-500 bg-slate-200 p-8 shadow-none">
        <p className="font-mono text-xs text-slate-600">DEPARTMENT FORM 7-C</p>
        <h3 className="mt-1 border-b-2 border-slate-500 pb-2 font-serif text-lg text-slate-700">
          Mandatory Participation Record
        </h3>
        <div className="mt-6 space-y-4">
          <div>
            <label className="block font-mono text-xs uppercase text-slate-600">Full legal name</label>
            <input
              disabled
              className="mt-1 w-full border border-slate-500 bg-slate-300 px-2 py-2 text-slate-500"
              placeholder="—"
            />
          </div>
          <div>
            <label className="block font-mono text-xs uppercase text-slate-600">ID number</label>
            <input
              disabled
              className="mt-1 w-full border border-slate-500 bg-slate-300 px-2 py-2 text-slate-500"
              placeholder="—"
            />
          </div>
          <div className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" disabled className="mt-1" />
            <span>I acknowledge that prior selections are not considered.</span>
          </div>
          <button
            type="button"
            disabled
            className="mt-4 w-full cursor-not-allowed border-2 border-slate-600 bg-slate-400 py-3 font-mono text-sm font-bold uppercase tracking-widest text-slate-600"
          >
            Comply
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CharacterCreatorTrap() {
  const [phase, setPhase] = useState('illusion')
  const [stats, setStats] = useState(initialStats)

  const spent = Object.values(stats).reduce((a, b) => a + b, 0)
  const canStart = spent === TOTAL_POINTS

  const handleReset = () => {
    setPhase('illusion')
    setStats(initialStats())
  }

  if (phase === 'trap') {
    return (
      <section className="overflow-hidden rounded-xl border border-slate-400 bg-slate-200 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-400 bg-slate-300 px-4 py-2">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-600">
            The trap — real-world interface
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="rounded border border-slate-500 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
          >
            Reset
          </button>
        </div>
        <div className="flex min-h-[400px] flex-col lg:flex-row">
          <BureaucraticForm />
          <GrayedStatsPanel stats={stats} />
        </div>
      </section>
    )
  }

  return (
    <section className="overflow-hidden rounded-xl border-2 border-indigo-500/60 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 shadow-xl">
      <div className="border-b border-indigo-500/40 bg-indigo-900/50 px-6 py-4">
        <h2 className="font-serif text-2xl font-bold text-white">The Character Creator Trap</h2>
        <p className="mt-1 text-sm text-indigo-200">
          State 1: The illusion — distribute {TOTAL_POINTS} points, then start.
        </p>
      </div>
      <div className="space-y-6 p-6 sm:p-8">
        <StatAllocator stats={stats} onChange={setStats} />
        <button
          type="button"
          onClick={() => setPhase('trap')}
          disabled={!canStart}
          className="w-full rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 py-4 text-lg font-bold uppercase tracking-wider text-slate-900 shadow-lg shadow-amber-500/25 transition hover:brightness-105 disabled:cursor-not-allowed disabled:from-slate-600 disabled:to-slate-600 disabled:text-slate-400 disabled:shadow-none"
        >
          Start Game
        </button>
        {!canStart && (
          <p className="text-center text-xs text-indigo-300">
            Use all {TOTAL_POINTS} available points to enable Start Game.
          </p>
        )}
      </div>
    </section>
  )
}
