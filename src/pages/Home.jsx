import CharacterCreatorTrap from '../components/CharacterCreatorTrap'

const heroSrc = `${import.meta.env.BASE_URL}images/hero-tension.jpg`

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-zinc-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22]"
          style={{ backgroundImage: `url('${heroSrc}')` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-zinc-950/75" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <img src={heroSrc} alt="Tension" className="sr-only" />
          <p className="font-mono text-xs uppercase tracking-widest text-violet-400">Introduction</p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl lg:text-5xl">
            The Tension: Real-World Powerlessness vs. Virtual Agency
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Young people are asked to shape a self they cannot deploy—then invited to buy that
            power back, one level at a time.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <CharacterCreatorTrap />
        </div>
      </section>
    </div>
  )
}
