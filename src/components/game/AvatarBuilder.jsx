import AvatarPreview from './AvatarPreview'
import {
  BUILD_OPTIONS,
  EQUIPMENT_HEAD,
  EQUIPMENT_TORSO,
  EQUIPMENT_WEAPON,
  EYE_OPTIONS,
  HAIR_OPTIONS,
  SKIN_OPTIONS,
} from './avatarConstants'

function OptionGrid({ label, options, value, onChange, renderSwatch }) {
  return (
    <div>
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-violet-300">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt.id
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={`rounded-lg border px-3 py-2 text-sm transition ${
                selected
                  ? 'border-violet-400 bg-violet-600/30 text-violet-100 ring-1 ring-violet-400/50'
                  : 'border-zinc-700 bg-zinc-800/80 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
              }`}
            >
              {renderSwatch ? renderSwatch(opt, selected) : opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function SliderField({ label, value, onChange, min = 0, max = 100, unit }) {
  return (
    <div>
      <div className="mb-2 flex justify-between font-mono text-xs uppercase tracking-wider text-violet-300">
        <span>{label}</span>
        <span className="tabular-nums text-zinc-400">{value}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-zinc-700 accent-violet-500"
      />
    </div>
  )
}

export default function AvatarBuilder({ avatar, onChange, onContinue }) {
  const set = (key, val) => onChange({ ...avatar, [key]: val })
  const setEquip = (slot, val) =>
    onChange({ ...avatar, equipment: { ...avatar.equipment, [slot]: val } })

  return (
    <div className="flex flex-col">
      {/* header */}
      <div className="border-b border-violet-500/20 px-6 py-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">Avatar forge</p>
        <h2 className="mt-1 font-serif text-2xl font-bold text-zinc-50">Build your character</h2>
        <p className="mt-1 text-sm text-zinc-400">Customize appearance and gear before entering the world.</p>
      </div>

      {/* two-column body — each side scrolls independently */}
      <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_1fr]" style={{ height: 'min(640px, 80vh)' }}>

        {/* LEFT: preview — fills height, no page scroll */}
        <div className="min-h-0 border-b border-zinc-700/60 p-4 lg:border-b-0 lg:border-r lg:p-5">
          <AvatarPreview avatar={avatar} />
        </div>

        {/* RIGHT: settings — independently scrollable */}
        <div className="min-h-0 overflow-y-auto p-5" style={{ scrollbarWidth: 'thin' }}>
          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-amber-400/90">Appearance</h3>

            <OptionGrid
              label="Skin tone"
              options={SKIN_OPTIONS}
              value={avatar.skin}
              onChange={(id) => set('skin', id)}
              renderSwatch={(opt) => (
                <span className="flex items-center gap-2">
                  <span
                    className="inline-block h-4 w-4 rounded-full border border-zinc-600"
                    style={{ backgroundColor: opt.color }}
                  />
                  {opt.label}
                </span>
              )}
            />

            <OptionGrid
              label="Hair"
              options={HAIR_OPTIONS}
              value={avatar.hair}
              onChange={(id) => set('hair', id)}
            />

            <OptionGrid
              label="Eyes"
              options={EYE_OPTIONS}
              value={avatar.eyes}
              onChange={(id) => set('eyes', id)}
              renderSwatch={(opt) => (
                <span className="flex items-center gap-2">
                  <span
                    className="inline-block h-3 w-3 rounded-full border border-zinc-600"
                    style={{ backgroundColor: opt.iris }}
                  />
                  {opt.label}
                </span>
              )}
            />

            <OptionGrid
              label="Build"
              options={BUILD_OPTIONS}
              value={avatar.build}
              onChange={(id) => set('build', id)}
            />

            <SliderField label="Height" value={avatar.height} onChange={(v) => set('height', v)} unit="%" />
            <SliderField label="Weight" value={avatar.weight} onChange={(v) => set('weight', v)} unit="%" />

            <h3 className="border-t border-zinc-700 pt-4 font-mono text-xs uppercase tracking-widest text-amber-400/90">
              Equipment
            </h3>

            <OptionGrid
              label="Head"
              options={EQUIPMENT_HEAD}
              value={avatar.equipment.head}
              onChange={(id) => setEquip('head', id)}
            />
            <OptionGrid
              label="Torso"
              options={EQUIPMENT_TORSO}
              value={avatar.equipment.torso}
              onChange={(id) => setEquip('torso', id)}
            />
            <OptionGrid
              label="Weapon"
              options={EQUIPMENT_WEAPON}
              value={avatar.equipment.weapon}
              onChange={(id) => setEquip('weapon', id)}
            />

            <button
              type="button"
              onClick={onContinue}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 py-4 text-lg font-bold uppercase tracking-wider text-white shadow-lg shadow-violet-500/25 hover:from-cyan-400 hover:to-violet-500"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
