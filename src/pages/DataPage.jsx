// Placeholder values — replace via JSON import later
const chartA = {
  title: 'Global gaming revenue (placeholder)',
  subtitle: 'Billions USD — update from your JSON dataset',
  items: [
    { label: '2020', value: 78, max: 100 },
    { label: '2022', value: 92, max: 100 },
    { label: '2024', value: 100, max: 100 },
    { label: '2026 (proj.)', value: 108, max: 120 },
  ],
}

const chartB = {
  title: 'Revenue from “agency” products (placeholder)',
  subtitle: 'Microtransactions, battle passes, cosmetics — % of total',
  items: [
    { label: 'Cosmetics', value: 72, max: 100 },
    { label: 'Battle passes', value: 58, max: 100 },
    { label: 'Loot / gacha', value: 45, max: 100 },
    { label: 'Pay-to-skip', value: 38, max: 100 },
  ],
}

function BarChart({ chart, unit = '' }) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="font-serif text-xl font-bold text-stone-900">{chart.title}</h2>
      <p className="mt-1 text-sm text-stone-500">{chart.subtitle}</p>
      <div className="mt-8 space-y-5" role="img" aria-label={chart.title}>
        {chart.items.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="font-medium text-stone-700">{item.label}</span>
              <span className="font-mono tabular-nums text-stone-500">
                {item.value}
                {unit}
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-stone-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-400 transition-all"
                style={{ width: `${(item.value / item.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 rounded-lg bg-amber-50 px-3 py-2 font-mono text-xs text-amber-900">
        JSON hook: import metrics into this component and map{' '}
        <code>items</code> dynamically.
      </p>
    </article>
  )
}

export default function DataPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-12 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-violet-700">Data</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
          Empirical proof
        </h1>
        <p className="mt-4 text-stone-600">
          Static visual meters below are ready for your JSON-driven updates on industry
          profit from selling virtual agency.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <BarChart chart={chartA} unit="B" />
        <BarChart chart={chartB} unit="%" />
      </div>

      <section className="mt-10 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-8 text-center">
        <h2 className="font-serif text-lg font-bold text-stone-800">
          Additional visualizations
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-stone-600">
          Placeholder for charts, citations, and downloadable data tables. Consider adding
          Recharts or D3 when you wire up live JSON.
        </p>
      </section>
    </div>
  )
}
