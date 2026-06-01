export default function Systems() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-10 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-indigo-700">The Systems</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
          Two architectures of experience
        </h1>
      </header>

      <div className="grid min-h-[480px] gap-0 overflow-hidden rounded-xl border border-slate-300 shadow-lg lg:grid-cols-2">
        <section className="border-b border-slate-400 bg-slate-200 p-8 lg:border-b-0 lg:border-r-2 lg:border-r-slate-500">
          <div className="mb-4 inline-block border-2 border-slate-600 bg-slate-300 px-3 py-1 font-mono text-xs uppercase text-slate-700">
            Column 1
          </div>
          <h2 className="font-serif text-2xl font-bold uppercase tracking-tight text-slate-800">
            The Real-World Lockdown
          </h2>
          <div className="mt-6 space-y-3 border-l-4 border-slate-600 pl-4">
            <p className="text-sm leading-relaxed text-slate-700">
              Paste your essay text here. Bureaucracy, surveillance schools, credential gates, and
              economic precarity compress youth into procedures they did not design. Agency becomes
              permission granted by institutions—not built by the young person.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="border border-slate-500 bg-slate-300 p-3 text-xs font-mono uppercase text-slate-600">
                Schedule
              </div>
              <div className="border border-slate-500 bg-slate-300 p-3 text-xs font-mono uppercase text-slate-600">
                Rules
              </div>
              <div className="border border-slate-500 bg-slate-300 p-3 text-xs font-mono uppercase text-slate-600">
                Appeals
              </div>
              <div className="border border-slate-500 bg-slate-300 p-3 text-xs font-mono uppercase text-slate-600">
                Debt
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-indigo-950 to-violet-900 p-8 text-white">
          <div className="mb-4 inline-block rounded-lg border border-amber-400/50 bg-amber-500/20 px-3 py-1 font-mono text-xs uppercase text-amber-200">
            Column 2
          </div>
          <h2 className="font-serif text-2xl font-bold text-amber-100">
            Children Yearn for the Mines
          </h2>
          <div className="mt-6 space-y-4">
            <p className="text-sm leading-relaxed text-indigo-100">
              Paste your essay text here. Games offer legible work—grind, skill, loot—with visible
              returns on labor. Mastery is achievable; the feedback loop is fair enough to feel
              earned. The mine is clarity: effort maps to outcome in ways school and job markets
              often refuse to guarantee.
            </p>
            <ul className="space-y-2">
              {['Accessible hard work', 'Clear mastery curves', 'Visible ROI on time'].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-indigo-400/40 bg-indigo-900/50 px-3 py-2 text-sm"
                >
                  <span className="text-amber-400">◆</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-indigo-800">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-amber-500 to-emerald-400" />
            </div>
            <p className="font-mono text-xs text-indigo-300">Progress bar — always visible</p>
          </div>
        </section>
      </div>
    </div>
  )
}
