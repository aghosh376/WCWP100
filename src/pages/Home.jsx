import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import GameCharacterCreator, { HOME_GAME_POINTS } from '../components/home/GameCharacterCreator'
import HeroBackgroundSlideshow from '../components/home/HeroBackgroundSlideshow'
import ParalysisModal from '../components/home/ParalysisModal'
import { initialPixelAvatar } from '../components/home/pixelAvatarConstants'
import RealmMap from '../components/home/RealmMap'
import TaskTrials from '../components/home/TaskTrials'
import { initialStats } from '../components/game/constants'

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.45, ease: 'easeInOut' },
}

export default function Home() {
  const [gameState, setGameState] = useState('creator')
  const [stats, setStats] = useState(initialStats)
  const [avatar, setAvatar] = useState(initialPixelAvatar)
  const [selectedRealm, setSelectedRealm] = useState(null)
  const [trialsKey, setTrialsKey] = useState(0)
  const [paralysisModalOpen, setParalysisModalOpen] = useState(true)

  const spent = Object.values(stats).reduce((a, b) => a + b, 0)
  const canNext = spent === HOME_GAME_POINTS
  const canDeploy = selectedRealm !== null

  const handleReset = useCallback(() => {
    setGameState('creator')
    setStats(initialStats())
    setAvatar(initialPixelAvatar())
    setSelectedRealm(null)
    setTrialsKey((k) => k + 1)
    setParalysisModalOpen(true)
  }, [])

  const handleChooseNewRealm = useCallback(() => {
    setGameState('map')
    setTrialsKey((k) => k + 1)
    setParalysisModalOpen(false)
  }, [])

  const handleParalysis = useCallback(() => {
    setGameState('paralysis')
    setParalysisModalOpen(true)
  }, [])

  return (
    <div>
      {/* Hero — full-height carousel + top-left hook box */}
      <div className="relative h-[80vh] w-full overflow-hidden border-b border-zinc-800">
        <HeroBackgroundSlideshow intervalMs={5000} />

        <div className="absolute left-5 top-5 z-20 w-[calc(100%-2.5rem)] max-w-xs rounded-2xl border border-zinc-800/50 bg-zinc-950/50 p-5 shadow-xl backdrop-blur-md sm:left-8 sm:top-8 sm:max-w-sm md:left-12 md:top-12 md:max-w-md lg:max-w-lg">
          <p className="font-mono text-[10px] uppercase tracking-widest text-violet-400">The Hook</p>
          <h1 className="mt-2 font-serif text-2xl font-bold leading-snug text-zinc-50 sm:text-3xl">
            The Tension / Real-World Powerlessness vs. Virtual Agency
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-200 sm:text-[0.95rem]">
            We live in an age where the youth are systematically stripped of real-world impact. But human
            beings naturally crave agency, mastery, and visible returns on their labor. When the real world
            locks them out, where do they go?
          </p>
        </div>
      </div>

      {/* Cocoon */}
      <section className="border-b border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">The Cocoon</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-zinc-100">
            The frictionless chamber
          </h2>
          <div className="mt-4 grid gap-4 text-zinc-400 sm:grid-cols-3">
            <p className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4 text-sm leading-relaxed">
              <span className="font-medium text-zinc-200">Ergonomic chair.</span> The body is held
              in an optimal posture, engineered to completely eliminate physical strain while the
              outside world demands you be somewhere else. The physical body is essentially sedated
              so the mind is free to sprint.
            </p>
            <p className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4 text-sm leading-relaxed">
              <span className="font-medium text-zinc-200">Precise temperature.</span> The climate is
              controlled to the exact degree. It creates a predictable, comfortable environment
              that stands in stark contrast to the precarious and unmanageable nature of modern
              housing, transit, and classrooms.
            </p>
            <p className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4 text-sm leading-relaxed">
              <span className="font-medium text-zinc-200">Noise-canceling headphones.</span> All
              external physical friction is systematically eliminated so absolute cognitive immersion
              can fill the void. The chaotic outside world is muted, allowing for an environment
              that demands maximum mental struggle with zero physical risk.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive demo */}
      <section className="relative bg-zinc-950">
        <div className="pointer-events-none sticky top-14 z-40 flex justify-end gap-2 px-4 pt-3 sm:px-6">
          {gameState === 'paralysis' && (
            <button
              type="button"
              onClick={handleChooseNewRealm}
              className="pointer-events-auto rounded-md border border-cyan-600 bg-cyan-950/95 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-cyan-200 shadow-lg backdrop-blur-sm hover:border-cyan-500 hover:text-white"
            >
              Choose another realm
            </button>
          )}
          <button
            type="button"
            onClick={handleReset}
            className="pointer-events-auto rounded-md border border-zinc-600 bg-zinc-900/95 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-zinc-300 shadow-lg backdrop-blur-sm hover:border-zinc-500 hover:text-zinc-100"
          >
            Reset demo
          </button>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-12 pt-2 sm:px-6 sm:pb-16 sm:pt-4">
          <div className="mb-8 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-amber-400">
              The Character Creator
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Create your character by allocating points to different stats. You have a limited
              number of points, so choose wisely to prepare for the challenges ahead.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {gameState === 'creator' && (
              <motion.div key="creator" {...fade}>
                <GameCharacterCreator
                  stats={stats}
                  onChange={setStats}
                  avatar={avatar}
                  onAvatarChange={setAvatar}
                  onNext={() => setGameState('map')}
                  canNext={canNext}
                />
              </motion.div>
            )}

            {gameState === 'map' && (
              <motion.div key="map" {...fade}>
                <RealmMap
                  selectedRealm={selectedRealm}
                  onSelect={setSelectedRealm}
                  onDeploy={() => setGameState('trials')}
                  canDeploy={canDeploy}
                />
              </motion.div>
            )}

            {(gameState === 'trials' || gameState === 'paralysis') && (
              <motion.div
                key={`trials-${trialsKey}`}
                className={gameState === 'paralysis' ? 'relative z-40' : undefined}
                {...fade}
              >
                <TaskTrials
                  stats={stats}
                  avatar={avatar}
                  realmId={selectedRealm}
                  onParalysis={handleParalysis}
                  frozen={gameState === 'paralysis'}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {gameState === 'paralysis' && paralysisModalOpen && (
        <ParalysisModal
          onReset={handleReset}
          onChooseRealm={handleChooseNewRealm}
          onClose={() => setParalysisModalOpen(false)}
        />
      )}
    </div>
  )
}
