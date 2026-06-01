function BarChart({ label, value, max = 100, color = 'bg-indigo-500' }) {
  const width = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-mono text-slate-500">{value}%</span>
      </div>
      <div className="h-4 overflow-hidden rounded-md bg-slate-100">
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
        <p className="font-mono text-xs uppercase tracking-widest text-indigo-700">Data</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
          Empirical dashboard
        </h1>
        <p className="mt-3 text-slate-600">
          Static bar charts below—replace values with your JSON data when ready.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-xl font-bold text-slate-900">
            Time Spent: Civic Engagement vs. Sandbox Games
          </h2>
          <div className="mt-8 space-y-5" role="img" aria-label="Civic engagement versus sandbox games">
            {civicVsSandbox.map((row) => (
              <BarChart key={row.label} {...row} color="bg-slate-600" />
            ))}
            <BarChart label="Gap (illustrative index)" value={56} color="bg-indigo-500" />
          </div>
          <p className="mt-6 rounded-lg bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
            Paste your empirical analysis here. Cite sources on how discretionary time tilts toward
            virtual worlds that reward participation with immediate, legible feedback.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-xl font-bold text-slate-900">
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
          <p className="mt-6 rounded-lg bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
            Paste your empirical analysis here. Connect revenue trends to cosmetics, battle passes,
            and pay-to-skip mechanics that sell the feeling of choice.
          </p>
        </article>
      </div>
    </div>
  )
}
