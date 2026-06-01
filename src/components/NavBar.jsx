import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/relevancy', label: 'Relevancy' },
  { to: '/systems', label: 'The Systems' },
  { to: '/data', label: 'Data' },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        <NavLink to="/" className="font-serif text-lg font-semibold tracking-tight text-slate-900">
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
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
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
