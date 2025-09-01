import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(entry.intersectionRatio < 1);
      },
      {
        threshold: [1]
      }
    );

    if (sections.length > 0) {
      observer.observe(sections[0]);
    }

    return () => observer.disconnect();
  }, [])

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Projets', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-green/80 backdrop-blur shadow-md' : 'bg-transparent'}`}>
      <nav className={`flex items-center justify-between px-6 py-4 text-lg transition-colors duration-300 ${scrolled ? 'text-white' : 'text-darkGray'}`}>
        <NavLink to="/" className={`text-xl font-bold transition-opacity duration-300 ${scrolled ? 'text-white' : 'text-green'} ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          Guillaume
        </NavLink>
        <button className="ml-auto w-10 h-10 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
          <svg className={`w-8 h-8 transition-colors duration-300 ${scrolled ? 'text-white' : 'text-green'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className={`fixed top-0 left-0 w-full min-h-screen z-50 flex flex-col transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${scrolled ? 'bg-green text-white' : 'bg-white text-darkGray'}`}>
          {/* Bouton fermer */}
          <button
            onClick={() => setIsOpen(false)}
            className={`absolute top-4 right-6 w-10 h-10 flex items-center justify-center text-4xl font-light z-10 ${scrolled ? 'text-white' : 'text-green'}`}
          >
            &times;
          </button>
          
          <div className="flex items-center justify-between px-6 py-4">
            <NavLink to="/" className={`text-xl font-bold transition-opacity duration-300 ${scrolled ? 'text-white' : 'text-green'}`}>
              Guillaume
            </NavLink>
          </div>
          
          <nav className={`flex-1 flex flex-col items-center justify-center gap-6 text-lg text-center z-20 ${scrolled ? 'text-white' : 'text-darkGray'}`}>
            {navItems.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition ${scrolled ? 'text-white hover:text-green-200' : 'text-darkGray hover:text-green'} ${isActive ? `font-semibold ${scrolled ? 'text-green-200' : 'text-green'}` : ''}`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}