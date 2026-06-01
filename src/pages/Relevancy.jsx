const sections = [
  {
    title: 'Who Wins and Who Loses',
    placeholder:
      'The digital attention economy creates a stark divide between those who profit and those who pay. Tech monopolies and gaming platforms are the undeniable winners. By utilizing behavioral psychologists to ensure their platforms are as "sticky" as possible, they capture the behavioral data and time of a politically neutralized youth demographic. The losers are the youth themselves, alongside the schools and parents who often misdiagnose this digital retreat as mere laziness. The system actively benefits from neutralizing our youthful drive to rebel or build real world structures by safely containing that energy inside virtual landscapes. We are sold virtual struggles that satisfy our need to be needed, all while the platforms cash in on our illusion of agency.',
  },
  {
    title: 'What is at Stake',
    placeholder:
      'If we do not understand this dynamic, society risks losing an entire generation\'s worth of human potential. When young people confine their desire for meaningful choice to virtual economies, they lose the ability to navigate and alter physical realities. We face a tragic reality where the brightest minds of our generation are dedicating their cognitive endurance to building virtual empires because they have been priced out of building real ones. Ultimately, society loses its innovators and disruptors when a generation learns to exercise power only inside perfectly designed, simulated systems rather than engaging with the friction of real world civic duty.',
  },
  {
    title: 'The Exigency',
    placeholder:
      'This issue is urgent because the retreat into digital environments is a rational, conditioned response to a stagnant world. Young people are graduating into severe economic precarity, facing a rigged housing market, the existential threat of climate change, and increasingly narrow pathways to success. When civic effort yields zero systemic feedback, it breeds "errand paralysis" and widespread burnout. Consequently, youth naturally channel their remaining energy into digital worlds where a return on investment and meritocracy are guaranteed. We cannot simply tell people to get off their screens when the physical world denies them accessible economic mobility and true agency. Until we address this disconnect, the profitable monetization of our collective apathy will only accelerate.',
  },
]

export default function Relevancy() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-10 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-violet-400">Relevancy</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">
          Why this matters
        </h1>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {sections.map((section) => (
          <article
            key={section.title}
            className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg"
          >
            <h2 className="font-serif text-xl font-bold text-zinc-100">{section.title}</h2>
            <p className="mt-4 flex-1 leading-relaxed text-zinc-400">{section.placeholder}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
