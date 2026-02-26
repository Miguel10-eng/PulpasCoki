import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { TYPES } from '../data/products'
import ProductModal from './ProductModal'

export default function ProductCard({ product, type, index }) {
  const [selectedSize, setSelectedSize] = useState(250)
  const [quantity, setQuantity] = useState(1)
  const [imageIndex, setImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addToCart } = useCart()

  const base = import.meta.env.BASE_URL
  const images = (product.images || [product.image]).map((p) => (p ? base + p.replace(/^\//, '') : ''))
  const prices = product[type]
  const formatPrice = (price) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(price)

  const handleAddToCart = (e) => {
    e.stopPropagation()
    if (!product.available) return
    addToCart({ ...product, image: images[0] }, { type, size: selectedSize, quantity })
  }

  const handleCardClick = () => {
    if (product.available) setIsModalOpen(true)
  }

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ y: -12, transition: { duration: 0.3 } }}
        onClick={handleCardClick}
        className={`group card-apple overflow-hidden flex flex-col cursor-pointer transition-all ${
          !product.available ? 'opacity-75 relative' : 'hover:shadow-apple-hover'
        }`}
      >
        {!product.available && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 rounded-apple-lg">
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-4 py-2 rounded-apple bg-white/95 text-coki-black font-semibold text-sm shadow-apple"
            >
              No disponible
            </motion.span>
          </div>
        )}

        <div
          className="relative aspect-square overflow-hidden bg-gradient-to-br from-coki-black/5 to-transparent"
          onMouseEnter={(e) => product.available && e.stopPropagation()}
        >
          <motion.img
            src={images[imageIndex]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {images.length > 1 && product.available && (
            <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setImageIndex(i) }}
                  className={`w-2 h-2 rounded-full transition-all ${imageIndex === i ? 'bg-white w-4' : 'bg-white/60 hover:bg-white/80'}`}
                />
              ))}
            </div>
          )}
          {product.available && (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="flex items-center gap-2 px-4 py-2 rounded-apple bg-white/95 text-coki-black font-medium text-sm">
                <Eye className="w-4 h-4" />
                Ver detalles
              </span>
            </motion.div>
          )}
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <span className="text-xs font-medium text-coki-red mb-1">{TYPES[type]}</span>
          <h3 className="font-semibold text-lg text-coki-black group-hover:text-coki-red transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-coki-black/60 mt-1 line-clamp-2">{product.description}</p>

          {product.available && (
            <>
              <div className="mt-4 space-y-3">
                <div className="flex gap-2">
                  {[250, 500].map((size) => (
                    <button
                      key={size}
                      onClick={(e) => { e.stopPropagation(); setSelectedSize(size) }}
                      className={`flex-1 py-2 px-3 rounded-apple text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-coki-red text-white shadow-apple'
                          : 'bg-coki-black/5 text-coki-black hover:bg-coki-black/10'
                      }`}
                    >
                      {size}g
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => { e.stopPropagation(); setQuantity((q) => Math.max(1, q - 1)) }}
                      className="w-8 h-8 rounded-apple bg-coki-black/5 hover:bg-coki-black/10 flex items-center justify-center text-sm font-semibold"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); setQuantity((q) => q + 1) }}
                      className="w-8 h-8 rounded-apple bg-coki-black/5 hover:bg-coki-black/10 flex items-center justify-center text-sm font-semibold"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-coki-black/60">{quantity} x {formatPrice(prices[selectedSize])}</p>
                    <p className="text-lg font-bold text-coki-red">{formatPrice(prices[selectedSize] * quantity)}</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="mt-4 w-full py-3 rounded-apple bg-coki-black text-white font-semibold flex items-center justify-center gap-2 hover:bg-coki-black/90 transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                Agregar al carrito
              </motion.button>
            </>
          )}
        </div>
      </motion.article>

      <AnimatePresence>
        {isModalOpen && (
          <ProductModal
            product={product}
            type={type}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
