import HeroSection from '../components/HeroSection'
import CharacterCreatorTrap from '../components/CharacterCreatorTrap'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="mb-10 max-w-2xl text-center text-sm text-stone-500 lg:mx-auto">
          Try the mini-game below — it mirrors how virtual worlds invite choice,
          then real systems render that choice irrelevant.
        </p>
        <CharacterCreatorTrap />
      </div>
    </>
  )
}
