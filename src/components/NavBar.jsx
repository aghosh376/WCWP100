import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/relevancy', label: 'Relevancy' },
  { to: '/systems', label: 'The Systems' },
  { to: '/topics', label: 'Topics' },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          className="font-serif text-lg font-semibold tracking-tight text-zinc-100"
        >
          Virtual Agency
        </NavLink>
        <ul className="flex flex-wrap gap-1">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-violet-600 text-white'
                      : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'
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
