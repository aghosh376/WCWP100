export default function SystemsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-12 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-violet-700">Systems</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
          Two worlds, one hunger for agency
        </h1>
      </header>

      <div className="grid gap-0 overflow-hidden rounded-2xl border border-stone-200 shadow-lg lg:grid-cols-2">
        <section className="border-b border-stone-200 bg-stone-100 p-8 lg:border-b-0 lg:border-r">
          <span className="font-mono text-xs uppercase tracking-widest text-stone-500">
            Section A
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-stone-800">
            The Real World Lockdown
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            Placeholder: Bureaucracy, surveillance schools, credential gates, and economic
            precarity compress youth into procedures they did not design. Agency becomes
            permission—to leave class, to work, to speak—granted by institutions, not built
            by the young person.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-stone-700">
            <li className="flex gap-2">
              <span className="text-stone-400">▸</span>
              Scheduling without input
            </li>
            <li className="flex gap-2">
              <span className="text-stone-400">▸</span>
              Opaque rules and appeals processes
            </li>
            <li className="flex gap-2">
              <span className="text-stone-400">▸</span>
              Debt and housing as long-term constraints
            </li>
            <li className="flex gap-2">
              <span className="text-stone-400">▸</span>
              [Your examples: discipline codes, work permits, etc.]
            </li>
          </ul>
        </section>

        <section className="bg-gradient-to-br from-violet-950 to-stone-900 p-8 text-white">
          <span className="font-mono text-xs uppercase tracking-widest text-violet-300">
            Section B
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold">
            Children Yearn for the Mines
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-violet-100">
            Placeholder: Games offer legible work—grind, skill, loot—with visible returns on
            labor. Mastery is achievable; the feedback loop is fair enough to feel earned.
            The “mine” is not cruelty but clarity: effort maps to outcome in a way school and
            job markets often refuse to guarantee.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-violet-50">
            <li className="flex gap-2">
              <span className="text-amber-400">◆</span>
              Accessible hard work (quests, ranks, crafting)
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">◆</span>
              Mastery curves with clear milestones
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">◆</span>
              Visible ROI on time invested
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">◆</span>
              [Your examples: Minecraft, MMOs, roguelikes, etc.]
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
