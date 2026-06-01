import CharacterCreatorTrap from '../components/CharacterCreatorTrap'

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-indigo-700">Introduction</p>
          <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            The Tension: Real-World Powerlessness vs. Virtual Agency
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
            Young people are asked to shape a self they cannot deploy—then invited to buy that
            power back, one level at a time.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg">
          <img
            src="/images/hero-tension.jpg"
            alt="Tension"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </header>

      <section>
        <p className="mb-6 text-center text-sm text-slate-500">
          Interact below: build your character, then see how the same choices dissolve in a
          bureaucratic system.
        </p>
        <CharacterCreatorTrap />
      </section>
    </div>
  )
}
