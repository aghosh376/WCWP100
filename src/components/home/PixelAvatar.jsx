import { motion } from 'framer-motion'
import { avatarPartSrc } from './pixelAvatarConstants'

/** All layers share the same center anchor */
const LAYER_CLASS =
  'absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 image-pixelated object-contain'

const LAYER_Z = {
  body: 'z-10',
  head: 'z-20',
  loadout: 'z-30',
}

function stressMotion(pendingCount) {
  if (pendingCount >= 5) {
    return {
      x: [0, -6, 6, -6, 6, 0],
      scale: [1, 1.02, 0.98, 1.02, 0.98, 1],
      filter: [
        'drop-shadow(0 0 0 transparent)',
        'drop-shadow(0 0 12px rgba(239,68,68,0.8))',
        'drop-shadow(0 0 4px rgba(239,68,68,0.4))',
        'drop-shadow(0 0 14px rgba(239,68,68,0.9))',
        'drop-shadow(0 0 6px rgba(239,68,68,0.5))',
        'drop-shadow(0 0 12px rgba(239,68,68,0.8))',
      ],
    }
  }
  if (pendingCount >= 4) {
    return {
      x: [0, -4, 4, -4, 0],
      filter: ['none', 'drop-shadow(0 0 8px rgba(239,68,68,0.5))', 'none'],
    }
  }
  if (pendingCount >= 3) {
    return { x: [0, -2, 2, -2, 0] }
  }
  return { x: 0 }
}

function stressTransition(pendingCount) {
  if (pendingCount >= 4) return { repeat: Infinity, duration: 0.25 }
  if (pendingCount >= 3) return { repeat: Infinity, duration: 0.5 }
  return { duration: 0.3 }
}

export default function PixelAvatar({
  avatar,
  pendingCount = 0,
  className = '',
  size = 'default',
}) {
  const { head, body, loadout } = avatar
  const sizeClass =
    size === 'small' ? 'h-28 w-28' : size === 'large' ? 'h-56 w-56' : 'h-40 w-40'

  const bgClass =
    pendingCount >= 5
      ? 'border-red-400/50 bg-red-100/90'
      : 'border-amber-800/25 bg-[#e8dcc8]'

  return (
    <motion.div
      className={`relative mx-auto ${sizeClass} ${className}`}
      animate={stressMotion(pendingCount)}
      transition={stressTransition(pendingCount)}
    >
      <div className={`absolute inset-0 rounded-lg border-2 ${bgClass}`} />

      <img
        src={avatarPartSrc('body', body)}
        alt=""
        className={`${LAYER_CLASS} ${LAYER_Z.body}`}
        draggable={false}
      />
      <img
        src={avatarPartSrc('head', head)}
        alt=""
        className={`${LAYER_CLASS} ${LAYER_Z.head}`}
        draggable={false}
      />
      <img
        src={avatarPartSrc('loadout', loadout)}
        alt=""
        className={`${LAYER_CLASS} ${LAYER_Z.loadout}`}
        draggable={false}
      />
    </motion.div>
  )
}
