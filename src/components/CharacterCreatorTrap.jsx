import { useState } from 'react'
import AvatarBuilder from './game/AvatarBuilder'
import CharacterCreatorPhase from './game/CharacterCreatorPhase'
import FactionLobby from './game/FactionLobby'
import GameFrame from './game/GameFrame'
import SatClassroom from './game/SatClassroom'
import WorldMap from './game/WorldMap'
import { initialAvatar } from './game/avatarConstants'
import {
  FACTIONS,
  TOTAL_POINTS,
  initialSatForm,
  initialStats,
} from './game/constants'

export default function CharacterCreatorTrap() {
  const [phase, setPhase] = useState('creator')
  const [stats, setStats] = useState(initialStats)
  const [avatar, setAvatar] = useState(initialAvatar)
  const [username, setUsername] = useState('')
  const [factionId, setFactionId] = useState('')
  const [selectedCity, setSelectedCity] = useState(null)
  const [satForm, setSatForm] = useState(initialSatForm)

  const spent = Object.values(stats).reduce((a, b) => a + b, 0)
  const canStart = spent === TOTAL_POINTS
  const canEnter = username.trim().length > 0 && factionId !== ''
  const faction = FACTIONS.find((f) => f.id === factionId)

  const handleReset = () => {
    setPhase('creator')
    setStats(initialStats())
    setAvatar(initialAvatar())
    setUsername('')
    setFactionId('')
    setSelectedCity(null)
    setSatForm(initialSatForm())
  }

  if (phase === 'creator') {
    return (
      <section className="overflow-hidden rounded-xl border border-violet-500/40 bg-gradient-to-br from-zinc-900 via-violet-950/40 to-zinc-950 shadow-2xl shadow-violet-950/50">
        <CharacterCreatorPhase
          stats={stats}
          onChange={setStats}
          onStart={() => setPhase('avatar')}
          canStart={canStart}
        />
      </section>
    )
  }

  if (phase === 'avatar') {
    return (
      <section className="overflow-hidden rounded-xl border border-violet-500/40 bg-gradient-to-br from-zinc-900 via-violet-950/30 to-zinc-950 shadow-2xl">
        <div className="flex justify-end border-b border-violet-500/20 px-4 py-2">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-md border border-zinc-600 bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-700"
          >
            Reset
          </button>
        </div>
        <AvatarBuilder
          avatar={avatar}
          onChange={setAvatar}
          onContinue={() => setPhase('lobby')}
        />
      </section>
    )
  }

  if (phase === 'lobby') {
    return (
      <GameFrame onReset={handleReset} stats={stats}>
        <FactionLobby
          username={username}
          factionId={factionId}
          onUsernameChange={setUsername}
          onFactionSelect={setFactionId}
          onEnter={() => setPhase('worldmap')}
          canEnter={canEnter}
        />
      </GameFrame>
    )
  }

  if (phase === 'worldmap') {
    return (
      <GameFrame onReset={handleReset} stats={stats}>
        <WorldMap
          username={username}
          factionName={faction?.name}
          onSelectCity={(cityId) => {
            setSelectedCity(cityId)
            setPhase('classroom')
          }}
        />
      </GameFrame>
    )
  }

  return (
    <GameFrame onReset={handleReset} stats={stats} mutedStats>
      <SatClassroom
        cityId={selectedCity}
        username={username}
        satForm={satForm}
        onSatChange={setSatForm}
      />
    </GameFrame>
  )
}
