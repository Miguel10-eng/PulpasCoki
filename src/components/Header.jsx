import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const navLinks = [
  { label: 'Productos', id: 'productos' },
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Quiénes somos', id: 'quienes-somos' },
  { label: 'Video', id: 'video' },
  { label: 'Contacto', id: 'contacto' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { cartCount } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar menú mobile al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const handleNavClick = (sectionId, closeMobile = false) => {
    if (closeMobile) setIsMobileMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSection(sectionId), 120)
    } else {
      scrollToSection(sectionId)
    }
  }

  const isHome = location.pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/8 shadow-[0_1px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}icono-coki.png`}
            alt="Pulpas Coki"
            className="h-9 sm:h-10 w-auto object-contain"
          />
          <span className="hidden sm:block text-white font-bold text-base tracking-tight">
            Pulpas <span className="text-coki-red">Coki</span>
          </span>
        </Link>

        {/* Nav desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="relative px-3.5 py-2 text-sm font-medium text-white/65 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/8 group"
            >
              {label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-coki-red rounded-full group-hover:w-4 transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Acciones derecha */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Carrito */}
          <Link
            to="/carrito"
            className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            <ShoppingCart className="w-4 h-4 text-white/80" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key="badge"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 bg-coki-red text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(230,57,70,0.6)]"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Botón CTA desktop */}
          <button
            onClick={() => handleNavClick('productos')}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-coki-red text-white text-sm font-semibold hover:bg-coki-red-dark shadow-[0_0_16px_rgba(230,57,70,0.3)] hover:shadow-[0_0_24px_rgba(230,57,70,0.5)] transition-all duration-200 hover:scale-[1.03] active:scale-95"
          >
            Pedir ahora
          </button>

          {/* Hamburguesa mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 transition-all duration-200"
            aria-label="Menú"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-4.5 h-4.5 text-white" />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-4.5 h-4.5 text-white" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Menú mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#111111]/98 backdrop-blur-xl border-t border-white/8"
          >
            <div className="px-5 pt-3 pb-5 flex flex-col gap-1">
              {navLinks.map(({ label, id }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  onClick={() => handleNavClick(id, true)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/8 font-medium text-sm transition-all duration-200 text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-coki-red/60 flex-shrink-0" />
                  {label}
                </motion.button>
              ))}

              <div className="mt-2 pt-3 border-t border-white/8 flex flex-col gap-2">
                <Link
                  to="/carrito"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/8 font-medium text-sm transition-all duration-200"
                >
                  <ShoppingCart className="w-4 h-4 text-coki-red" />
                  Carrito {cartCount > 0 && <span className="ml-auto bg-coki-red text-white text-xs font-bold px-2 py-0.5 rounded-full">{cartCount}</span>}
                </Link>
                <button
                  onClick={() => handleNavClick('productos', true)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-coki-red text-white font-semibold text-sm shadow-[0_0_20px_rgba(230,57,70,0.35)] hover:bg-coki-red-dark transition-all duration-200"
                >
                  Pedir ahora →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
