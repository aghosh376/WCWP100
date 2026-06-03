import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TOPICS } from '../data/topics'

export default function Topics() {
  const location = useLocation()

  useEffect(() => {
    const anchor = location.state?.anchor
    if (anchor) {
      requestAnimationFrame(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.state?.anchor])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-10 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-violet-400">The Glossary</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">Topics</h1>
        <p className="mt-4 text-zinc-400">
          An encyclopedia of terms referenced throughout the essay and interactive demo.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {TOPICS.map((topic) => (
          <article
            key={topic.id}
            id={topic.id}
            className="scroll-mt-24 rounded-xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg"
          >
            <h2 className="font-serif text-xl font-bold text-zinc-100">{topic.title}</h2>
            <p className="mt-4 leading-relaxed text-zinc-400">{topic.summary}</p>
            <Link
              to="/"
              className="mt-4 inline-block text-sm font-medium text-violet-400 hover:text-violet-300"
            >
              ← Return to demo
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
