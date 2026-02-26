import { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, Truck, Heart } from 'lucide-react'

const highlights = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Pulpas elaboradas con frutas frescas, sin conservantes ni aditivos artificiales.',
    image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=600&h=400&fit=crop',
  },
  {
    icon: Truck,
    title: 'Distribución Villacense',
    description: 'Empresa orgullosamente villavicense, distribuyendo deliciosas pulpas en la región y todo el país.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    icon: Heart,
    title: 'Hecho con amor',
    description: 'Cada pulpa refleja nuestro compromiso con la calidad y el sabor auténtico tropical.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=400&fit=crop',
  },
]

export default function WhoWeAreSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="quienes-somos" className="py-24 px-6 bg-coki-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coki-black mb-4">
            Quiénes <span className="text-coki-red">somos</span>
          </h2>
          <p className="text-lg text-coki-black/60 max-w-3xl mx-auto leading-relaxed">
            Pulpas Coki es una empresa villacense dedicada a distribuir deliciosas pulpas de fruta.
            Nacidos en el corazón del Meta, llevamos el sabor auténtico de las frutas tropicales
            a hogares y negocios de todo Colombia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-apple-lg overflow-hidden shadow-apple-hover border border-coki-black/5 h-full min-h-[280px]">
              <motion.img
                key={activeIndex}
                src={highlights[activeIndex].image}
                alt={highlights[activeIndex].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full min-h-[280px] object-cover"
              />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {highlights.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-8 bg-coki-red'
                      : 'w-2 bg-coki-black/20 hover:bg-coki-black/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`flex gap-5 p-5 rounded-apple-lg border-2 transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? 'border-coki-red/40 bg-coki-red/5 shadow-apple'
                    : 'border-transparent bg-coki-black/[0.03] hover:bg-coki-black/[0.05] hover:border-coki-black/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-apple flex items-center justify-center flex-shrink-0 transition-colors ${
                  activeIndex === index ? 'bg-coki-red/20' : 'bg-coki-black/5'
                }`}>
                  <item.icon className={`w-6 h-6 ${activeIndex === index ? 'text-coki-red' : 'text-coki-black/70'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-lg mb-1 transition-colors ${activeIndex === index ? 'text-coki-red' : 'text-coki-black'}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-coki-black/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-8 py-6 rounded-apple-lg bg-coki-black text-white">
            <p className="text-lg font-medium text-center sm:text-left">
              Del corazón de Villavicencio al paladar de Colombia.
            </p>
            <span className="hidden sm:block w-px h-8 bg-white/20" />
            <span className="text-coki-red font-semibold whitespace-nowrap">Pulpas que saben a fruta real.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
