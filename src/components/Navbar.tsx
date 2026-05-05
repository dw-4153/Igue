import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const navLinks = [
  { href: '#funkcje', label: 'Możliwości' },
  { href: '#jak-dziala', label: 'Jak to działa' },
  { href: '#pricing', label: 'Cennik' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        aria-label="Główna nawigacja"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      >
        <div
          className={`w-full max-w-4xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/60 border border-slate-200/80'
              : 'bg-white/80 backdrop-blur-lg border border-slate-200/60 shadow-md shadow-slate-100/50'
          } rounded-2xl`}
        >
          <div className="flex items-center justify-between px-5 py-3">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <div className="size-7 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg className="size-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />
                </svg>
              </div>
              <span className="text-[15px] font-black tracking-tight text-slate-900">
                Ig<span className="text-blue-600">ue</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200 px-3.5 py-1.5 rounded-lg hover:bg-slate-100/80"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <a
                href="#generator"
                onClick={(e) => handleNavClick(e, '#generator')}
                className="text-sm font-semibold px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 shadow-sm shadow-blue-200"
              >
                Wypróbuj za darmo
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="md:hidden text-slate-600 hover:text-slate-900 transition-colors p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiOutlineX aria-hidden="true" size={22} /> : <HiOutlineMenu aria-hidden="true" size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/60 p-4 space-y-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <a
                href="#generator"
                onClick={(e) => handleNavClick(e, '#generator')}
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
              >
                Wypróbuj za darmo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
