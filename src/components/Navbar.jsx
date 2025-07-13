import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkBase = 'block px-4 py-2 text-gray-700 hover:text-blue-600'
  const activeClass = 'font-bold text-blue-700 underline'

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Projets', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-blue-600">Guillaume</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? `${linkBase} ${activeClass}` : linkBase
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Burger Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? 'M6 18L18 6M6 6l12 12' // X
                  : 'M4 6h16M4 12h16M4 18h16' // Burger
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t px-4 pb-4">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? `${linkBase} ${activeClass}` : linkBase
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}