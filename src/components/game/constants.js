export const STAT_KEYS = ['charisma', 'intelligence', 'rebellion', 'strength']
export const STAT_LABELS = {
  charisma: 'Charisma',
  intelligence: 'Intelligence',
  rebellion: 'Rebellion',
  strength: 'Strength',
}
export const STAT_ACCENTS = {
  charisma: 'from-rose-500 to-pink-400',
  intelligence: 'from-cyan-500 to-blue-400',
  rebellion: 'from-amber-500 to-orange-400',
  strength: 'from-emerald-500 to-lime-400',
}
export const TOTAL_POINTS = 25
export const MAX_PER_STAT = 10

export const FACTIONS = [
  {
    id: 'neon',
    name: 'Neon Syndicate',
    tagline: 'Signal thieves of the sprawl',
    accent: 'border-cyan-400/60 bg-cyan-950/40 hover:bg-cyan-900/50',
    selected: 'border-cyan-300 ring-2 ring-cyan-400/50 bg-cyan-900/60',
    glyph: '⌬',
  },
  {
    id: 'iron',
    name: 'Iron Covenant',
    tagline: 'Forge-first mercenary bloc',
    accent: 'border-amber-400/60 bg-amber-950/40 hover:bg-amber-900/50',
    selected: 'border-amber-300 ring-2 ring-amber-400/50 bg-amber-900/60',
    glyph: '⚙',
  },
  {
    id: 'dawn',
    name: 'Dawn Collective',
    tagline: 'Rebuilders of broken districts',
    accent: 'border-rose-400/60 bg-rose-950/40 hover:bg-rose-900/50',
    selected: 'border-rose-300 ring-2 ring-rose-400/50 bg-rose-900/60',
    glyph: '◐',
  },
  {
    id: 'void',
    name: 'Void Runners',
    tagline: 'Cartographers of forbidden servers',
    accent: 'border-violet-400/60 bg-violet-950/40 hover:bg-violet-900/50',
    selected: 'border-violet-300 ring-2 ring-violet-400/50 bg-violet-900/60',
    glyph: '∞',
  },
]

export const CITIES = [
  { id: 'nyc', name: 'New York', top: '30%', left: '82%' },
  { id: 'chicago', name: 'Chicago', top: '34%', left: '62%' },
  { id: 'la', name: 'Los Angeles', top: '52%', left: '14%' },
]

export const initialStats = () =>
  Object.fromEntries(STAT_KEYS.map((key) => [key, 0]))

export const initialSatForm = () => ({
  studentName: '',
  registrationId: '',
  sectionCode: '',
  agreed: false,
})
