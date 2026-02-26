import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { products, TYPES } from '../data/products'

export default function ProductsSection() {
  return (
    <section id="productos" className="py-24 px-6 bg-coki-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coki-black mb-4">
            Nuestras <span className="text-coki-red">Pulpas</span>
          </h2>
          <p className="text-lg text-coki-black/60 max-w-2xl mx-auto">
            Selección premium de pulpas de fruta tropical. Disponible en presentaciones de 250g y 500g
            para compradores al por mayor y al detal.
          </p>
        </motion.div>

        {(['wholesale', 'retail']).map((type, typeIndex) => (
          <motion.div
            key={type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: typeIndex * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <h3 className="text-2xl font-bold text-coki-black mb-2 flex items-center gap-2">
              <span className="w-1 h-8 bg-coki-red rounded-full" />
              {TYPES[type]}
            </h3>
            <p className="text-coki-black/60 mb-8">
              {type === 'wholesale'
                ? <>Precios especiales para compras al por mayor. Ideal para negocios y emprendimientos. <span className="font-semibold text-coki-red">A partir de 15 unidades de pulpa.</span></>
                : 'Compra al detal con la calidad que nos caracteriza.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={`${product.id}-${type}`}
                  product={product}
                  type={type}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
