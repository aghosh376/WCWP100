import { FACTIONS } from './constants'

export default function FactionLobby({
  username,
  factionId,
  onUsernameChange,
  onFactionSelect,
  onEnter,
  canEnter,
}) {
  return (
    <div className="relative overflow-hidden p-6 sm:p-8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.15),_transparent_55%)]"
        aria-hidden
      />
      <div className="relative">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">Server login</p>
        <h2 className="mt-1 font-serif text-2xl font-bold text-zinc-50">Choose your allegiance</h2>

        <label className="mt-6 block">
          <span className="font-mono text-xs uppercase tracking-wider text-violet-300">Username</span>
          <input
            type="text"
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
            maxLength={24}
            placeholder="Enter callsign..."
            className="mt-2 w-full max-w-md rounded-lg border-2 border-violet-500/40 bg-zinc-950 px-4 py-3 font-mono text-lg text-cyan-100 placeholder:text-zinc-600 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20"
          />
        </label>

        <p className="mt-8 font-mono text-xs uppercase tracking-wider text-violet-300">Select faction</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {FACTIONS.map((faction) => {
            const isSelected = factionId === faction.id
            return (
              <button
                key={faction.id}
                type="button"
                onClick={() => onFactionSelect(faction.id)}
                className={`rounded-xl border-2 p-4 text-left transition-all ${
                  isSelected ? faction.selected : faction.accent
                }`}
              >
                <span className="text-2xl">{faction.glyph}</span>
                <p className="mt-2 font-semibold text-zinc-100">{faction.name}</p>
                <p className="mt-1 text-xs text-zinc-400">{faction.tagline}</p>
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={onEnter}
          disabled={!canEnter}
          className="mt-8 w-full max-w-md rounded-xl border-2 border-cyan-400/50 bg-gradient-to-r from-cyan-600 to-violet-600 py-4 text-lg font-bold uppercase tracking-widest text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-500 hover:to-violet-500 disabled:border-zinc-700 disabled:from-zinc-800 disabled:to-zinc-800 disabled:text-zinc-600 disabled:shadow-none"
        >
          Enter
        </button>
      </div>
    </div>
  )
}
