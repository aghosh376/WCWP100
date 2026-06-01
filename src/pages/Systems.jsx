export default function Systems() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-10 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-violet-400">The Systems</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">
          Two architectures of experience
        </h1>
      </header>

      <div className="grid min-h-[480px] gap-0 overflow-hidden rounded-xl border border-zinc-700 shadow-xl lg:grid-cols-2">
        <section className="border-b border-zinc-600 bg-zinc-300 p-8 lg:border-b-0 lg:border-r-2 lg:border-r-zinc-600">
          <h2 className="font-serif text-2xl font-bold uppercase tracking-tight text-zinc-800">
            The Real-World Lockdown
          </h2>
          <div className="mt-6 space-y-3 border-l-4 border-zinc-600 pl-4">
            <p className="text-sm leading-relaxed text-zinc-700">
              Young people enter a physical world defined by overwhelming precarity and fundamentally broken economic and political systems. Rather than building their own agency, they graduate under immense pressure only to be met with rigid structures like a rigged housing market and seemingly endless global crises. This consistent radiation of hopelessness creates profound "errand paralysis." When institutional rules and bureaucratic systems offer zero systemic feedback or tangible returns on investment, real world effort begins to feel like an insurmountable chore.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2">
              {['Schedule', 'Rules', 'Appeals', 'Debt'].map((label) => (
                <div
                  key={label}
                  className="border border-zinc-500 bg-zinc-400/80 p-3 text-xs font-mono uppercase text-zinc-700"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-violet-950 to-indigo-950 p-8 text-white">
          <h2 className="font-serif text-2xl font-bold text-amber-100">
            Children Yearn for the Mines
          </h2>
          <div className="mt-6 space-y-4">
            <p className="text-sm leading-relaxed text-violet-100">
              In stark contrast to a stagnant reality, digital environments provide what the physical world currently lacks: clear goals, immediate feedback loops, and a concrete sense of purpose. Young people are not retreating into games out of laziness; they are actively seeking out intentionally stressful and challenging work because it is presented within a perfect meritocracy. When a player puts in the effort, a number goes up, a sound plays, and the environment reflects an immediate, proportional change. We channel our inherent human drive into these digital sandboxes simply because they guarantee a fair and visible return on our labor.
            </p>
            <ul className="space-y-2">
              {['Accessible hard work', 'Clear mastery curves', 'Visible ROI on time'].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-violet-500/40 bg-violet-900/40 px-3 py-2 text-sm text-violet-50"
                >
                  <span className="text-amber-400">◆</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-violet-900">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-amber-500 to-emerald-400" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}