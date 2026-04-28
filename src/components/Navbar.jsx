import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../constants/data'

export default function Navbar({ onScrollTo }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    onScrollTo(id)
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-[5%] transition-all duration-500 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[72px]">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer bg-transparent border-none"
        >
          <img src="/logo.png" alt="Novygo Tech" className="h-14 w-auto object-contain" />
          <div className="text-left">
            <div className="font-syne font-extrabold text-[18px] leading-none tracking-widest text-white">
              NOVYGO
            </div>
            <div className="font-syne font-extrabold text-[18px] leading-tight tracking-widest text-white">
              TECH
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <span
              key={link.id}
              className="nav-link"
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </span>
          ))}
        </div>

        <button
          className="btn-primary hidden md:block !py-2.5 !px-6 !text-[13px]"
          onClick={() => handleNav('kontak')}
        >
          Konsultasi Gratis
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-6 h-0.5 bg-white rounded-sm transition-all duration-300"
              style={{
                transform:
                  menuOpen && i === 0
                    ? 'rotate(45deg) translate(5px, 5px)'
                    : menuOpen && i === 2
                    ? 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-dark/[0.98] overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-[400px] pb-6' : 'max-h-0'
        }`}
      >
        <div className="px-[5%]">
          {NAV_LINKS.map((link) => (
            <div
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="nav-link block py-4 border-b border-white/[0.06] !text-base !border-b-0"
            >
              {link.label}
            </div>
          ))}
          <button
            className="btn-primary w-full mt-5"
            onClick={() => handleNav('kontak')}
          >
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </nav>
  )
}
