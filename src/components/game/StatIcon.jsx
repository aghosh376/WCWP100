const glyphIcons = {
  intelligence: '◈',
  strength: '▣',
}

const svgIcons = {
  charisma: {
    viewBox: '0 0 24 24',
    path: (
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    ),
  },
  rebellion: {
    viewBox: '0 0 24 24',
    path: (
      <path d="M6 3h-.5v18H6V3zm0 0h10.5c1.2 0 1.8 1.4 1 2.3l-3.2 3.6 3.2 3.6c.8.9.2 2.3-1 2.3H6V3z" />
    ),
  },
}

export default function StatIcon({ stat, className = 'h-5 w-5' }) {
  const glyph = glyphIcons[stat]
  if (glyph) {
    return (
      <span
        className={`inline-flex items-center justify-center font-bold leading-none ${className}`}
        style={{ fontSize: '1.1rem' }}
        aria-hidden
      >
        {glyph}
      </span>
    )
  }

  const icon = svgIcons[stat]
  if (!icon) return null

  return (
    <svg viewBox={icon.viewBox} className={className} aria-hidden fill="currentColor">
      {icon.path}
    </svg>
  )
}
