const base = import.meta.env.BASE_URL

export const AVATAR_PARTS = {
  head: { label: 'Head', min: 1, max: 3 },
  body: { label: 'Body', min: 1, max: 3 },
  loadout: { label: 'Loadout', min: 1, max: 3 },
}

export const initialPixelAvatar = () => ({
  head: 1,
  body: 1,
  loadout: 1,
})

export function avatarPartSrc(slot, index) {
  return `${base}images/avatar/${slot}-${index}.png`
}
