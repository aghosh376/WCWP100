import { useCallback, useRef, useState } from 'react'
import { BUILD_OPTIONS, EYE_OPTIONS, SKIN_OPTIONS } from './avatarConstants'

function getSkinColor(id) {
  return SKIN_OPTIONS.find((s) => s.id === id)?.color ?? '#d4a574'
}

function getEyes(id) {
  return EYE_OPTIONS.find((e) => e.id === id) ?? EYE_OPTIONS[0]
}

function buildScales(build, height, weight) {
  const buildMeta = BUILD_OPTIONS.find((b) => b.id === build) ?? BUILD_OPTIONS[1]
  const h = 0.88 + (height / 100) * 0.24
  const w = 0.9 + (weight / 100) * 0.22
  const shoulder =
    buildMeta.id === 'lean' ? 0.88
    : buildMeta.id === 'brawny' ? 1.18
    : buildMeta.id === 'athletic' ? 1.08
    : 1
  return { h, w, shoulder }
}

// All hair drawn ABOVE head (top of skull), never overlapping the face region (y > 58)
function HairLayer({ hair }) {
  const fill = '#1a1410'
  switch (hair) {
    case 'bald':
      return null
    case 'buzz':
      return <ellipse cx="100" cy="44" rx="36" ry="10" fill={fill} opacity="0.6" />
    case 'short':
      return (
        <path d="M65 58 Q100 22 135 58 Q125 36 100 30 Q75 36 65 58 Z" fill={fill} />
      )
    case 'medium':
      return (
        <>
          <path d="M62 57 Q100 16 138 57 Q125 34 100 28 Q75 34 62 57 Z" fill={fill} />
          <path d="M62 57 L58 80 Q62 68 65 58 Z" fill={fill} />
          <path d="M138 57 L142 80 Q138 68 135 58 Z" fill={fill} />
        </>
      )
    case 'long':
      return (
        <>
          <path d="M60 56 Q100 14 140 56 Q126 32 100 26 Q74 32 60 56 Z" fill={fill} />
          <rect x="56" y="55" width="10" height="70" rx="5" fill={fill} />
          <rect x="134" y="55" width="10" height="70" rx="5" fill={fill} />
        </>
      )
    case 'ponytail':
      return (
        <>
          <path d="M64 57 Q100 20 136 57 Q124 34 100 28 Q76 34 64 57 Z" fill={fill} />
          <ellipse cx="144" cy="64" rx="8" ry="22" fill={fill} />
        </>
      )
    case 'mohawk':
      return (
        <path d="M93 16 L107 16 L109 58 L91 58 Z" fill={fill} />
      )
    case 'curly':
      return (
        <>
          {[68, 84, 100, 116, 132].map((cx, i) => (
            <circle key={cx} cx={cx} cy={34 + (i % 2) * 8} r="13" fill={fill} />
          ))}
          <rect x="55" y="50" width="12" height="50" rx="6" fill={fill} />
          <rect x="133" y="50" width="12" height="50" rx="6" fill={fill} />
        </>
      )
    default:
      return null
  }
}

// Default shirt drawn behind torso equipment
function DefaultShirt({ skin }) {
  return (
    <path
      d="M70 112 Q100 104 130 112 L134 178 Q100 170 66 178 Z"
      fill="#475569"
      stroke="#64748b"
      strokeWidth="1.5"
    />
  )
}

function EquipmentLayers({ equipment, skin }) {
  const { head, torso, weapon } = equipment

  return (
    <>
      {/* Shirt is always shown unless overridden by armour/robes */}
      {torso === 'none' && <DefaultShirt skin={skin} />}
      {torso === 'jacket' && (
        <path
          d="M66 110 Q100 100 134 110 L130 172 Q100 162 70 172 Z"
          fill="#1e3a5f"
          stroke="#3b82f6"
          strokeWidth="2"
        />
      )}
      {torso === 'plate' && (
        <path
          d="M62 106 L138 106 L142 174 Q100 164 58 174 Z"
          fill="#94a3b8"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
      )}
      {torso === 'robes' && (
        <path
          d="M68 108 Q100 100 132 108 L148 198 Q100 188 52 198 Z"
          fill="#5b21b6"
          stroke="#a78bfa"
          strokeWidth="2"
        />
      )}

      {/* Head gear drawn after hair */}
      {head === 'hood' && (
        <path
          d="M56 56 Q100 8 144 56 L148 92 Q100 74 52 92 Z"
          fill="#1e293b"
          stroke="#475569"
        />
      )}
      {head === 'circlet' && (
        <ellipse cx="100" cy="44" rx="40" ry="7" fill="none" stroke="#fbbf24" strokeWidth="4" />
      )}
      {head === 'helm' && (
        <path
          d="M60 50 Q100 24 140 50 L136 74 Q100 60 64 74 Z"
          fill="#71717a"
          stroke="#a1a1aa"
          strokeWidth="2"
        />
      )}

      {weapon === 'sword' && (
        <g transform="translate(148, 92)">
          <rect x="0" y="0" width="6" height="70" fill="#e2e8f0" />
          <rect x="-8" y="68" width="22" height="6" fill="#f59e0b" />
          <polygon points="3,-8 8,0 -2,0" fill="#cbd5e1" />
        </g>
      )}
      {weapon === 'dagger' && (
        <g transform="translate(152, 112)">
          <rect x="0" y="0" width="4" height="35" fill="#94a3b8" />
          <rect x="-4" y="32" width="12" height="4" fill="#78350f" />
        </g>
      )}
      {weapon === 'staff' && (
        <g transform="translate(150, 72)">
          <rect x="2" y="0" width="5" height="100" fill="#78350f" />
          <circle cx="4" cy="-6" r="10" fill="#a78bfa" stroke="#e9d5ff" />
        </g>
      )}
    </>
  )
}

function AvatarSvg({ avatar }) {
  const skin = getSkinColor(avatar.skin)
  const eyes = getEyes(avatar.eyes)
  const { h, w, shoulder } = buildScales(avatar.build, avatar.height, avatar.weight)

  return (
    <svg viewBox="0 0 200 230" className="h-full w-full drop-shadow-2xl">
      {/* ground shadow */}
      <ellipse cx="100" cy="214" rx={52 * w} ry="8" fill="#000" opacity="0.2" />

      <g transform={`translate(100, 118) scale(${w * shoulder}, ${h}) translate(-100, -118)`}>
        {/* neck */}
        <rect x="91" y="103" width="18" height="12" rx="4" fill={skin} opacity="0.95" />

        {/* torso skin (shown under shirt unless robes) */}
        <path
          d="M72 114 Q100 106 128 114 L130 176 Q100 170 70 176 Z"
          fill={skin}
          opacity="0.4"
        />

        {/* equipment (shirt/jacket/plate/robes) rendered here */}
        <EquipmentLayers equipment={avatar.equipment} skin={skin} />

        {/* head — drawn AFTER body gear so face is always on top */}
        <circle cx="100" cy="72" r="36" fill={skin} stroke="#000" strokeOpacity="0.12" />

        {/* eyes */}
        <ellipse cx="88" cy="70" rx="6" ry="8" fill="white" />
        <ellipse cx="112" cy="70" rx="6" ry="8" fill="white" />
        <circle cx="88" cy="72" r="3.5" fill={eyes.iris} />
        <circle cx="112" cy="72" r="3.5" fill={eyes.iris} />
        <circle cx="88" cy="72" r="1.8" fill={eyes.pupil} />
        <circle cx="112" cy="72" r="1.8" fill={eyes.pupil} />

        {/* nose */}
        <path d="M98 78 Q100 84 102 78" fill="none" stroke="#000" strokeOpacity="0.18" strokeWidth="1.2" />
        {/* mouth */}
        <path d="M94 88 Q100 93 106 88" fill="none" stroke="#000" strokeOpacity="0.25" strokeWidth="1.5" />

        {/* hair drawn last so it sits on top of the head, but above the face we clip */}
        <HairLayer hair={avatar.hair} />
      </g>
    </svg>
  )
}

export default function AvatarPreview({ avatar }) {
  const [rotationY, setRotationY] = useState(-12)
  const [rotationX, setRotationX] = useState(4)
  const [zoom, setZoom] = useState(1)
  const dragging = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })

  const onPointerDown = useCallback((e) => {
    dragging.current = true
    lastPos.current = { x: e.clientX, y: e.clientY }
    e.currentTarget.setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e) => {
    if (!dragging.current) return
    const dx = e.clientX - lastPos.current.x
    const dy = e.clientY - lastPos.current.y
    lastPos.current = { x: e.clientX, y: e.clientY }
    setRotationY((r) => r + dx * 0.5)
    setRotationX((r) => Math.max(-25, Math.min(25, r - dy * 0.3)))
  }, [])

  const onPointerUp = useCallback((e) => {
    dragging.current = false
    e.currentTarget.releasePointerCapture(e.pointerId)
  }, [])

  const onWheel = useCallback((e) => {
    e.preventDefault()
    setZoom((z) => Math.max(0.6, Math.min(1.8, z - e.deltaY * 0.001)))
  }, [])

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-300/40 bg-gradient-to-b from-slate-200 to-slate-300 shadow-inner">
      {/* toolbar */}
      <div className="flex items-center justify-between border-b border-slate-300/60 bg-slate-100/80 px-3 py-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
          Live preview
        </span>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.6, z - 0.1))}
            className="rounded border border-slate-400 bg-white px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-50"
            aria-label="Zoom out"
          >−</button>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(1.8, z + 0.1))}
            className="rounded border border-slate-400 bg-white px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-50"
            aria-label="Zoom in"
          >+</button>
          <button
            type="button"
            onClick={() => { setRotationY(-12); setRotationX(4); setZoom(1) }}
            className="rounded border border-slate-400 bg-white px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-50"
          >Reset</button>
        </div>
      </div>

      {/* stage */}
      <div
        className="relative flex flex-1 cursor-grab items-center justify-center overflow-hidden active:cursor-grabbing"
        style={{ perspective: '900px', background: 'linear-gradient(160deg, #e2e8f0 0%, #cbd5e1 60%, #94a3b8 100%)' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onWheel={onWheel}
        role="img"
        aria-label="Avatar preview — drag to rotate, scroll to zoom"
      >
        {/* subtle floor grid */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden
        />

        <div
          className="h-72 w-56 transition-transform duration-75"
          style={{
            transform: `scale(${zoom}) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <AvatarSvg avatar={avatar} />
        </div>

        <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center font-mono text-[10px] text-slate-500">
          Drag to rotate · Scroll to zoom
        </p>
      </div>
    </div>
  )
}
