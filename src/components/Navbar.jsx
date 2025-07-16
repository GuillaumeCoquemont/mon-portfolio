import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Projets', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-darkGray/80 backdrop-blur shadow-md' : 'bg-transparent'}`}>
      <nav className="flex items-center justify-between px-6 py-4 text-lg text-darkGray">
        <h1 className={`text-xl font-bold text-green transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>Guillaume</h1>
        <button className="ml-auto w-10 h-10 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      { (
        <div className={`fixed top-0 right-0 w-full h-full bg-white z-50 flex justify-end transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="w-full sm:w-full md:w-full h-full bg-white px-0 py-0 flex flex-col justify-between shadow-md relative">
            {/* Bouton fermer */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-6 w-10 h-10 flex items-center justify-center text-4xl font-light text-darkGray z-10"
            >
              &times;
            </button>
            <div className="flex items-center justify-between px-6 py-4">
              <h1 className={`text-xl font-bold text-green transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>Guillaume</h1>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-6 text-lg text-darkGray text-center">
              {navItems.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `hover:text-green transition ${isActive ? 'font-semibold text-green' : ''}`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}