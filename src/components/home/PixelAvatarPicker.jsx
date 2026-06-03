import PixelAvatar from './PixelAvatar'
import { AVATAR_PARTS } from './pixelAvatarConstants'

function PartControls({ slot, label, value, min, max, onChange }) {
  const cycle = (delta) => {
    let next = value + delta
    if (next > max) next = min
    if (next < min) next = max
    onChange(next)
  }

  return (
    <div className="flex items-center justify-between gap-2 rounded-lg border border-violet-500/30 bg-violet-950/40 px-3 py-2">
      <span className="font-mono text-xs uppercase tracking-wider text-violet-300">{label}</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => cycle(-1)}
          className="flex h-8 w-8 items-center justify-center rounded bg-zinc-800 text-lg font-bold text-zinc-200 hover:bg-zinc-700"
          aria-label={`Previous ${slot}`}
        >
          ‹
        </button>
        <span className="w-6 text-center font-mono text-sm text-amber-300">{value}</span>
        <button
          type="button"
          onClick={() => cycle(1)}
          className="flex h-8 w-8 items-center justify-center rounded bg-violet-600 text-lg font-bold text-white hover:bg-violet-500"
          aria-label={`Next ${slot}`}
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default function PixelAvatarPicker({ avatar, onChange }) {
  const setPart = (slot, val) => onChange({ ...avatar, [slot]: val })

  return (
    <div className="flex flex-col items-center">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-cyan-400">
        Visual avatar
      </p>
      <PixelAvatar avatar={avatar} size="large" />
      <div className="mt-6 w-full max-w-xs space-y-2">
        {Object.entries(AVATAR_PARTS).map(([slot, { label, min, max }]) => (
          <PartControls
            key={slot}
            slot={slot}
            label={label}
            value={avatar[slot]}
            min={min}
            max={max}
            onChange={(val) => setPart(slot, val)}
          />
        ))}
      </div>
    </div>
  )
}
