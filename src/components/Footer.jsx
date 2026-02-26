import { motion } from 'framer-motion'

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
          <a href="#productos" className="hover:text-white transition-colors">Productos</a>
          <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
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
