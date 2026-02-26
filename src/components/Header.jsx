import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}icono-coki.png`}
            alt="Pulpas Coki"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href={`${import.meta.env.BASE_URL}#/#productos`} className="text-coki-black/80 hover:text-coki-red transition-colors font-medium">
            Productos
          </a>
          <a href={`${import.meta.env.BASE_URL}#/#nosotros`} className="text-coki-black/80 hover:text-coki-red transition-colors font-medium">
            Nosotros
          </a>
          <a href={`${import.meta.env.BASE_URL}#/#quienes-somos`} className="text-coki-black/80 hover:text-coki-red transition-colors font-medium">
            Quiénes somos
          </a>
          <a href={`${import.meta.env.BASE_URL}#/#video`} className="text-coki-black/80 hover:text-coki-red transition-colors font-medium">
            Video
          </a>
          <a href={`${import.meta.env.BASE_URL}#/#contacto`} className="text-coki-black/80 hover:text-coki-red transition-colors font-medium">
            Contacto
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/carrito"
            className="relative p-2.5 rounded-apple bg-coki-black/5 hover:bg-coki-black/10 transition-all duration-300"
          >
            <ShoppingCart className="w-5 h-5 text-coki-black" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-coki-red text-white text-xs font-semibold rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-apple bg-coki-black/5"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/5"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href={`${import.meta.env.BASE_URL}#/#productos`} onClick={() => setIsMobileMenuOpen(false)} className="font-medium">
                Productos
              </a>
              <a href={`${import.meta.env.BASE_URL}#/#nosotros`} onClick={() => setIsMobileMenuOpen(false)} className="font-medium">
                Nosotros
              </a>
              <a href={`${import.meta.env.BASE_URL}#/#quienes-somos`} onClick={() => setIsMobileMenuOpen(false)} className="font-medium">
                Quiénes somos
              </a>
              <a href={`${import.meta.env.BASE_URL}#/#video`} onClick={() => setIsMobileMenuOpen(false)} className="font-medium">
                Video
              </a>
              <a href={`${import.meta.env.BASE_URL}#/#contacto`} onClick={() => setIsMobileMenuOpen(false)} className="font-medium">
                Contacto
              </a>
              <Link to="/carrito" onClick={() => setIsMobileMenuOpen(false)} className="font-medium flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Carrito {cartCount > 0 && `(${cartCount})`}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
