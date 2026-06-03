export const REALMS = [
  {
    id: 'job-market',
    name: 'The Job Market',
    tagline: 'Conquer the gatekeepers of wage labor',
    threat: 'High',
    gradient: 'from-amber-950 via-orange-950 to-zinc-950',
    border: 'border-amber-500/50',
    glyph: '⚔',
  },
  {
    id: 'housing',
    name: 'The Housing Crisis',
    tagline: 'Breaches the fortress of shelter',
    threat: 'Extreme',
    gradient: 'from-rose-950 via-red-950 to-zinc-950',
    border: 'border-rose-500/50',
    glyph: '🏰',
  },
  {
    id: 'civic',
    name: 'The Civic Sphere',
    tagline: 'Claim voice in the public square',
    threat: 'Moderate',
    gradient: 'from-cyan-950 via-blue-950 to-zinc-950',
    border: 'border-cyan-500/50',
    glyph: '🗺',
  },
]

export default function RealmMap({ selectedRealm, onSelect, onDeploy, canDeploy }) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-b from-zinc-900 to-indigo-950 p-6 shadow-2xl sm:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">State 2</p>
      <h2 className="mt-1 font-serif text-2xl font-bold text-white">Choose your realm</h2>
      <p className="mt-1 text-sm text-cyan-100/80">
        Three regions await. Select a front—and deploy.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {REALMS.map((realm) => {
          const selected = selectedRealm === realm.id
          return (
            <button
              key={realm.id}
              type="button"
              onClick={() => onSelect(realm.id)}
              className={`relative overflow-hidden rounded-xl border-2 p-5 text-left transition-all ${realm.border} bg-gradient-to-br ${realm.gradient} ${
                selected ? 'scale-[1.02] ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/20' : 'opacity-90 hover:opacity-100'
              }`}
            >
              <span className="text-3xl">{realm.glyph}</span>
              <h3 className="mt-3 font-serif text-lg font-bold text-white">{realm.name}</h3>
              <p className="mt-1 text-xs text-zinc-300">{realm.tagline}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-amber-400/90">
                Threat: {realm.threat}
              </p>
              {selected && (
                <span className="absolute right-3 top-3 rounded bg-cyan-500/20 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
                  SELECTED
                </span>
              )}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        onClick={onDeploy}
        disabled={!canDeploy}
        className="mt-8 w-full rounded-xl border-2 border-cyan-400/60 bg-gradient-to-r from-cyan-600 to-indigo-600 py-4 text-lg font-bold uppercase tracking-widest text-white shadow-lg disabled:border-zinc-700 disabled:from-zinc-800 disabled:to-zinc-800 disabled:text-zinc-600"
      >
        Deploy
      </button>
    </div>
  )
}
