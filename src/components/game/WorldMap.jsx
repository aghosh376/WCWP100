import { CITIES } from './constants'

const US_OUTLINE =
  'M128,45 L220,28 L380,35 L520,55 L680,48 L820,75 L900,120 L880,200 L850,280 L820,360 L780,420 L720,460 L640,480 L560,470 L480,455 L400,440 L320,430 L240,420 L180,400 L140,360 L110,300 L95,220 L105,140 Z'

export default function WorldMap({ username, factionName, onSelectCity }) {
  return (
    <div className="p-6 sm:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400">World map</p>
      <h2 className="mt-1 font-serif text-2xl font-bold text-zinc-50">Select a starting zone</h2>
      <p className="mt-2 text-sm text-zinc-400">
        Pilot <span className="text-cyan-300">{username || 'Unknown'}</span>
        {factionName && (
          <>
            {' '}
            · <span className="text-violet-300">{factionName}</span>
          </>
        )}
      </p>

      <div className="relative mx-auto mt-8 max-w-3xl">
        <div className="relative aspect-[5/3] overflow-hidden rounded-2xl border-2 border-indigo-500/40 bg-gradient-to-b from-indigo-950 via-slate-900 to-zinc-950 shadow-inner shadow-indigo-900/50">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
            aria-hidden
          />

          <svg
            viewBox="0 0 1000 520"
            className="absolute inset-0 h-full w-full p-6"
            aria-label="Map of the United States"
          >
            <path
              d={US_OUTLINE}
              fill="rgba(49,46,129,0.5)"
              stroke="rgba(129,140,248,0.6)"
              strokeWidth="3"
            />
          </svg>

          {CITIES.map((city) => (
            <button
              key={city.id}
              type="button"
              onClick={() => onSelectCity(city.id)}
              style={{ top: city.top, left: city.left }}
              className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              aria-label={`Travel to ${city.name}`}
            >
              <span className="relative flex h-14 w-14 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/30" />
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-300 bg-cyan-500/90 shadow-lg shadow-cyan-400/50 transition group-hover:scale-110 group-hover:bg-cyan-400" />
              </span>
              <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-950/90 px-2 py-0.5 font-mono text-xs text-cyan-200 opacity-0 transition group-hover:opacity-100">
                {city.name}
              </span>
            </button>
          ))}

          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-indigo-400/80">
            United States — click a node
          </p>
        </div>
      </div>
    </div>
  )
}
