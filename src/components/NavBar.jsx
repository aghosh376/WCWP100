import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Home', end: true },
  { to: '/relevancy', label: 'Relevancy' },
  { to: '/systems', label: 'Systems' },
  { to: '/data', label: 'Data' },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="Main"
      >
        <span className="font-serif text-lg font-bold tracking-tight text-stone-900 sm:text-xl">
          Agency<span className="text-violet-700">/</span>Sold
        </span>
        <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
          {tabs.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                    isActive
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
