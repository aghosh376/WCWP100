const sections = [
  {
    title: 'Who Wins and Who Loses',
    placeholder:
      'Paste your essay text here. Identify stakeholders—platforms, schools, parents, youth—and who benefits when agency is sold as a digital product.',
  },
  {
    title: 'What is at Stake',
    placeholder:
      'Paste your essay text here. Describe what young people lose when meaningful choice is confined to virtual economies, and what society loses when a generation learns power only inside designed systems.',
  },
  {
    title: 'The Exigency',
    placeholder:
      'Paste your essay text here. Explain why this argument matters now—screen time, microtransactions, economic precarity, and the narrowing of real-world pathways.',
  },
]

export default function Relevancy() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-10 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-indigo-700">Relevancy</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
          Why this matters
        </h1>
      </header>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {sections.map((section) => (
          <article
            key={section.title}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="font-serif text-xl font-bold text-slate-900">{section.title}</h2>
            <p className="mt-4 flex-1 leading-relaxed text-slate-600">{section.placeholder}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
