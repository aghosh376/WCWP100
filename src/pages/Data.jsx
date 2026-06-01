function BarChart({ label, value, max = 100, color = 'bg-violet-500' }) {
  const width = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="font-medium text-zinc-300">{label}</span>
        <span className="font-mono text-zinc-500">{value}%</span>
      </div>
      <div className="h-4 overflow-hidden rounded-md bg-zinc-800">
        <div className={`h-full rounded-md ${color} transition-all`} style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

const civicVsSandbox = [
  { label: 'Civic engagement (weekly hrs)', value: 12 },
  { label: 'Sandbox games (weekly hrs)', value: 68 },
]

const monetization = [
  { label: '2018', value: 35 },
  { label: '2020', value: 52 },
  { label: '2022', value: 71 },
  { label: '2024 (est.)', value: 88 },
]

export default function Data() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-10 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-violet-400">Data</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">
          Empirical dashboard
        </h1>
        <p className="mt-3 text-zinc-400">
          Static bar charts below—replace values with your JSON data when ready.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <article className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg sm:p-8">
          <h2 className="font-serif text-xl font-bold text-zinc-100">
            Time Spent: Civic Engagement vs. Sandbox Games
          </h2>
          <div className="mt-8 space-y-5" role="img" aria-label="Civic engagement versus sandbox games">
            {civicVsSandbox.map((row) => (
              <BarChart key={row.label} {...row} color="bg-zinc-500" />
            ))}
            <BarChart label="Gap (illustrative index)" value={56} color="bg-violet-500" />
          </div>
          <p className="mt-6 rounded-lg border border-zinc-800 bg-zinc-950/80 p-4 text-sm leading-relaxed text-zinc-400">
            Paste your empirical analysis here. Cite sources on how discretionary time tilts toward
            virtual worlds that reward participation with immediate, legible feedback.
          </p>
        </article>

        <article className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg sm:p-8">
          <h2 className="font-serif text-xl font-bold text-zinc-100">
            Virtual Agency Monetization (Microtransaction Growth)
          </h2>
          <div
            className="mt-8 space-y-5"
            role="img"
            aria-label="Microtransaction growth over time"
          >
            {monetization.map((row) => (
              <BarChart key={row.label} {...row} color="bg-violet-500" />
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-zinc-800 bg-zinc-950/80 p-4 text-sm leading-relaxed text-zinc-400">
            Paste your empirical analysis here. Connect revenue trends to cosmetics, battle passes,
            and pay-to-skip mechanics that sell the feeling of choice.
          </p>
        </article>
      </div>
    </div>
  )
}
