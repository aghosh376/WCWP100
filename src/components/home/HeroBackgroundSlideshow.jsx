import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const base = import.meta.env.BASE_URL

/** Hero slides in public/images/ */
export const HERO_IMAGES = [
  { src: `${base}images/hero-tension1.jpg`, alt: 'Real-world tension' },
  { src: `${base}images/hero-cocoon1.jpg`, alt: 'The cocoon' },
  { src: `${base}images/hero-virtual1.jpg`, alt: 'Virtual escape' },
]

function useSlideshowIndex(length, intervalMs) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (length <= 1) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % length), intervalMs)
    return () => clearInterval(timer)
  }, [length, intervalMs])
  return index
}

function CrossfadeLayers({ images, index }) {
  return (
    <>
      {images.map((img, i) => (
        <motion.img
          key={img.src}
          src={img.src}
          alt={i === index ? img.alt : ''}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          initial={{ opacity: i === index ? 1 : 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{ zIndex: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        />
      ))}
    </>
  )
}

/** Full-bleed auto-playing carousel — parent must be `relative` with fixed height */
export default function HeroBackgroundSlideshow({ intervalMs = 5000, className = '' }) {
  const index = useSlideshowIndex(HERO_IMAGES.length, intervalMs)

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden bg-zinc-950 ${className}`.trim()} aria-hidden>
      <CrossfadeLayers images={HERO_IMAGES} index={index} />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}
