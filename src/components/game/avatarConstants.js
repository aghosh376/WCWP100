export const SKIN_OPTIONS = [
  { id: 'porcelain', label: 'Porcelain', color: '#fde8d8' },
  { id: 'fair', label: 'Fair', color: '#f5d0b5' },
  { id: 'medium', label: 'Medium', color: '#d4a574' },
  { id: 'olive', label: 'Olive', color: '#b8956a' },
  { id: 'tan', label: 'Tan', color: '#a67c52' },
  { id: 'deep', label: 'Deep', color: '#6b4423' },
  { id: 'ebony', label: 'Ebony', color: '#3d2914' },
]

export const HAIR_OPTIONS = [
  { id: 'bald', label: 'Bald' },
  { id: 'buzz', label: 'Buzz' },
  { id: 'short', label: 'Short' },
  { id: 'medium', label: 'Medium' },
  { id: 'long', label: 'Long' },
  { id: 'ponytail', label: 'Ponytail' },
  { id: 'mohawk', label: 'Mohawk' },
  { id: 'curly', label: 'Curly' },
]

export const EYE_OPTIONS = [
  { id: 'amber', label: 'Amber', iris: '#f59e0b', pupil: '#1c1917' },
  { id: 'blue', label: 'Blue', iris: '#3b82f6', pupil: '#0f172a' },
  { id: 'green', label: 'Green', iris: '#22c55e', pupil: '#14532d' },
  { id: 'violet', label: 'Violet', iris: '#8b5cf6', pupil: '#2e1065' },
  { id: 'gray', label: 'Gray', iris: '#94a3b8', pupil: '#1e293b' },
  { id: 'crimson', label: 'Crimson', iris: '#ef4444', pupil: '#450a0a' },
]

export const BUILD_OPTIONS = [
  { id: 'lean', label: 'Lean' },
  { id: 'balanced', label: 'Balanced' },
  { id: 'athletic', label: 'Athletic' },
  { id: 'brawny', label: 'Brawny' },
]

export const EQUIPMENT_HEAD = [
  { id: 'none', label: 'None' },
  { id: 'hood', label: 'Shadow Hood' },
  { id: 'circlet', label: 'Arc Circlet' },
  { id: 'helm', label: 'Iron Helm' },
]

export const EQUIPMENT_TORSO = [
  { id: 'none', label: 'None' },
  { id: 'jacket', label: 'Street Jacket' },
  { id: 'plate', label: 'Battle Plate' },
  { id: 'robes', label: 'Mystic Robes' },
]

export const EQUIPMENT_WEAPON = [
  { id: 'none', label: 'None' },
  { id: 'dagger', label: 'Dagger' },
  { id: 'sword', label: 'Longsword' },
  { id: 'staff', label: 'Channel Staff' },
]

export const initialAvatar = () => ({
  hair: 'short',
  skin: 'medium',
  height: 52,
  weight: 48,
  build: 'balanced',
  eyes: 'amber',
  equipment: {
    head: 'none',
    torso: 'none',
    weapon: 'none',
  },
})
