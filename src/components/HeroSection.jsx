export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-br from-stone-900 via-violet-950 to-stone-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.25),_transparent_50%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="order-2 lg:order-1">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-violet-300">
            Thesis
          </p>
          <h1 className="font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Powerless in the room.
            <span className="block text-violet-300">Powerful on the screen.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-300">
            Systems strip young people of real-world agency—then sell it back as
            loot boxes, levels, and cosmetic choice.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl ring-1 ring-white/10">
            <img
              src="/images/hero-tension.jpg"
              alt="Custom photography"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <p className="mt-2 text-center text-xs text-stone-400">
            Replace with your own image at{' '}
            <code className="font-mono text-stone-300">public/images/hero-tension.jpg</code>
          </p>
        </div>
      </div>
    </section>
  )
}
