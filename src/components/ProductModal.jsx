import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ShoppingCart, Minus, Plus } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { TYPES } from '../data/products'

export default function ProductModal({ product, type, onClose }) {
  const [imageIndex, setImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState(250)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const base = import.meta.env.BASE_URL
  const images = (product.images || [product.image]).map((p) => (p ? base + p.replace(/^\//, '') : ''))
  const prices = product[type]
  const formatPrice = (p) =>
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(p)

  const handleAddToCart = () => {
    addToCart({ ...product, image: images[0] }, { type, size: selectedSize, quantity })
    onClose()
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!product || !product.available) return null

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        className="relative z-[101] w-full sm:max-w-[42rem] bg-white sm:rounded-[20px] rounded-t-[24px] shadow-2xl flex flex-col max-h-[92dvh] sm:max-h-[calc(100vh-2rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle visible solo en mobile */}
        <div className="sm:hidden flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors text-coki-black"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Área scrollable */}
        <div className="overflow-y-auto flex-1 min-h-0">
          <div className="flex flex-col sm:flex-row sm:items-stretch">
            {/* Imagen */}
            <div className="relative w-full sm:w-[280px] flex-shrink-0 h-[200px] sm:h-auto bg-gray-100 flex items-center justify-center p-4">
              <img
                key={imageIndex}
                src={images[imageIndex]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setImageIndex((i) => (i === 0 ? images.length - 1 : i - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
                  >
                    <ChevronLeft className="w-4 h-4 text-coki-black" />
                  </button>
                  <button
                    onClick={() => setImageIndex((i) => (i === images.length - 1 ? 0 : i + 1))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
                  >
                    <ChevronRight className="w-4 h-4 text-coki-black" />
                  </button>
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImageIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${imageIndex === i ? 'w-5 bg-white' : 'w-1.5 bg-white/60'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Información del producto */}
            <div className="flex-1 min-w-0 p-4 sm:p-6 flex flex-col">
              <span className="text-xs font-medium text-coki-red mb-1">{TYPES[type]}</span>
              <h2 id="modal-title" className="text-lg sm:text-xl font-bold text-coki-black mb-2">{product.name}</h2>
              <p className="text-sm text-coki-black/70 mb-3">{product.description}</p>

              <div className="mb-3">
                <h3 className="font-semibold text-coki-black mb-1 text-xs sm:text-sm">Beneficios</h3>
                <ul className="space-y-0.5 text-xs sm:text-sm text-coki-black/70">
                  {product.benefits?.slice(0, 3).map((b, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-coki-red flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 p-3 rounded-[14px] bg-coki-red/5 border border-coki-red/20">
                <p className="text-xs text-coki-black leading-relaxed">
                  <span className="text-coki-red font-semibold">Por qué comprarla: </span>
                  {product.reasonToBuy}
                </p>
              </div>

              <div className="pt-4 space-y-3 border-t border-gray-100">
                <div>
                  <p className="text-xs font-medium text-coki-black mb-1.5">Gramaje</p>
                  <div className="flex gap-2">
                    {[250, 500].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`flex-1 py-2 px-3 rounded-[14px] text-xs font-medium transition-all ${selectedSize === size ? 'bg-coki-red text-white' : 'bg-gray-100 text-coki-black hover:bg-gray-200'}`}
                      >
                        {size}g
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium text-coki-black mb-1">Cantidad</p>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="w-8 h-8 rounded-[12px] bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{quantity}</span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-8 h-8 rounded-[12px] bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-coki-black/60 uppercase tracking-wide">Total</p>
                    <p className="text-lg font-bold text-coki-red">{formatPrice(prices[selectedSize] * quantity)}</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handleAddToCart}
                  className="w-full py-3 rounded-[14px] bg-coki-red text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-coki-red-dark transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Agregar {quantity} al carrito — {formatPrice(prices[selectedSize] * quantity)}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
