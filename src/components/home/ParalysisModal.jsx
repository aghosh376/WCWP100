import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ParalysisModal({ onReset, onChooseRealm, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 22 }}
        className="pointer-events-auto relative max-w-lg rounded-lg border-4 border-zinc-600 bg-zinc-200 p-8 pr-12 shadow-2xl sm:pr-14"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded border-2 border-zinc-500 text-xl leading-none text-zinc-700 transition-colors hover:bg-zinc-300 hover:text-zinc-900"
          aria-label="Close and view screen behind"
        >
          <span aria-hidden="true">×</span>
        </button>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red-800">State 4</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-zinc-900">Errand Paralysis</h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          The inbox won. The mundane tasks stacked up and none of your stats mattered. This is
          the freeze: when systemic friction outpaces individual effort, action collapses into
          avoidance.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onChooseRealm}
            className="flex-1 rounded-lg border-2 border-cyan-700 bg-cyan-800 px-4 py-3 text-sm font-medium text-white hover:bg-cyan-700"
          >
            Choose another realm
          </button>
          <button
            type="button"
            onClick={onReset}
            className="flex-1 rounded border-2 border-zinc-500 py-3 font-mono text-sm uppercase tracking-widest text-zinc-700 hover:bg-zinc-300"
          >
            Reset demo
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/topics"
            state={{ anchor: 'errand-paralysis' }}
            className="rounded-lg border-2 border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
          >
            Read: Errand Paralysis
          </Link>
          <Link
            to="/relevancy"
            className="rounded-lg border-2 border-violet-700 bg-violet-800 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
          >
            Why it matters → Relevancy
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
