const sections = [
  {
    title: 'Who wins and who loses',
    placeholder:
      'Placeholder: Map stakeholders—platforms, publishers, schools, parents, and youth. Who captures value when agency is commodified as digital goods? Who bears the cost of disengagement from civic and material life?',
    bullets: [
      'Winners: [industry / platforms — your analysis]',
      'Losers: [youth without material leverage — your analysis]',
      'Ambivalent: [parents, educators — your analysis]',
    ],
  },
  {
    title: 'What is at stake',
    placeholder:
      'Placeholder: Articulate what young people lose when meaningful choice is confined to skins, battle passes, and algorithmic feeds—and what society loses when a generation learns agency only inside designed economies.',
    bullets: [
      'Psychological: identity, autonomy, attention',
      'Economic: labor, debt, future earnings',
      'Political: voice, collective action, trust',
    ],
  },
  {
    title: 'The exigency of the issue',
    placeholder:
      'Placeholder: Why now? Tie to post-pandemic screen time, AI companions, microtransaction normalization, and tightening real-world pathways (housing, wages, climate). Make the urgency concrete and dated.',
    bullets: [
      'Timing: [current policy / market moment]',
      'Scale: [demographic reach]',
      'Irreversibility: [habits forming in childhood]',
    ],
  },
]

export default function RelevancyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-12 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-violet-700">Relevancy</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
          Why this argument matters now
        </h1>
        <p className="mt-4 text-stone-600">
          Scannable stakes for readers who need the “so what” before the deep dive.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-1 lg:gap-8">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="font-serif text-xl font-bold text-stone-900">{section.title}</h2>
            <p className="mt-4 leading-relaxed text-stone-600">{section.placeholder}</p>
            <ul className="mt-6 space-y-2 border-t border-stone-100 pt-6">
              {section.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-stone-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
