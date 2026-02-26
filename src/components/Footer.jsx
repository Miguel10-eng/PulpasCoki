import { motion } from 'framer-motion'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const links = [
  { label: 'Productos', id: 'productos' },
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Contacto', id: 'contacto' },
]

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-coki-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <span className="text-xl font-bold">Pulpas</span>
          <span className="text-xl font-bold text-coki-red">Coki</span>
        </motion.div>
        <div className="flex gap-8 text-sm text-white/70">
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="hover:text-white transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50"
      >
        © {new Date().getFullYear()} Pulpas Coki. Todos los derechos reservados.
      </motion.div>
    </footer>
  )
}
