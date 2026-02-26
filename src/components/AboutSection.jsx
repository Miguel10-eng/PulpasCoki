import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 px-6 bg-coki-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              La esencia de la <span className="text-coki-red">fruta</span> en cada bocado
            </h2>
            <p className="text-lg text-white/80 mb-6">
              En Pulpas Coki seleccionamos las mejores frutas para crear pulpas 100% naturales,
              sin conservantes ni aditivos artificiales. Cada producto refleja nuestro compromiso
              con la calidad y el sabor auténtico.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Procesamos nuestra fruta con tecnología que preserva los nutrientes y el sabor,
              para que disfrutes de jugos, batidos y postres con el verdadero gusto tropical.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-apple bg-white/10 text-sm font-medium">
                100% Natural
              </span>
              <span className="px-4 py-2 rounded-apple bg-white/10 text-sm font-medium">
                Sin conservantes
              </span>
              <span className="px-4 py-2 rounded-apple bg-white/10 text-sm font-medium">
                Fresco siempre
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-apple-lg bg-gradient-to-br from-coki-red/20 to-coki-red/5 border border-white/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl font-bold text-coki-red mb-2">8+</p>
                <p className="text-white/80 font-medium">Sabores únicos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
