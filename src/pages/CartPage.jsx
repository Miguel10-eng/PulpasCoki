import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Minus, Plus, ShoppingBag, ArrowLeft, MessageCircle, Phone, Mail } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { WHATSAPP_NUMBER, EMAIL } from '../config'
import { TYPES } from '../data/products'

export default function CartPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart()

  const formatPrice = (price) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(price)

  const getOrderMessage = () => {
    const lines = cart.map(
      (item) =>
        `• ${item.name} ${item.size}g (${TYPES[item.type]}) x ${item.quantity}: ${formatPrice(item.price * item.quantity)}`
    )
    const msg =
      '¡Hola! Quiero realizar un pedido en Pulpas Coki 🍓\n\n' +
      '*Productos:*\n' +
      lines.join('\n') +
      '\n\n*Total: ' +
      formatPrice(cartTotal) +
      '*\n\nGracias!'
    return encodeURIComponent(msg)
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${getOrderMessage()}`

  return (
    <div className="min-h-screen bg-coki-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-coki-black/70 hover:text-coki-red transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al inicio
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-coki-black mb-8"
        >
          Tu <span className="text-coki-red">carrito</span>
        </motion.h1>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-apple p-12 text-center"
          >
            <ShoppingBag className="w-20 h-20 text-coki-black/20 mx-auto mb-6" />
            <h2 className="text-xl font-semibold text-coki-black mb-2">Tu carrito está vacío</h2>
            <p className="text-coki-black/60 mb-8">Agrega pulpas deliciosas para comenzar tu pedido</p>
            <a href={`${import.meta.env.BASE_URL}#/#productos`} className="btn-apple-primary inline-flex items-center gap-2">
              Ver productos
            </a>
          </motion.div>
        ) : (
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div
                    key={item.cartItemId}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="card-apple p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                  >
                    <img
                      src={item.image ? import.meta.env.BASE_URL + item.image.replace(/^\//, '') : ''}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-apple flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-coki-black">{item.name}</h3>
                      <p className="text-sm text-coki-black/60 mt-0.5">
                        {item.size}g • {TYPES[item.type]}
                      </p>
                      <p className="text-lg font-bold text-coki-red mt-2">
                        {formatPrice(item.price)} / unidad
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="w-10 h-10 rounded-apple bg-coki-black/5 hover:bg-coki-black/10 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="w-10 h-10 rounded-apple bg-coki-black/5 hover:bg-coki-black/10 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-2 sm:flex-row sm:items-center">
                      <p className="text-xl font-bold text-coki-red">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-sm text-coki-red hover:underline font-medium"
                      >
                        Eliminar
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-apple p-8 border-2 border-coki-black/5"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-semibold text-coki-black">Total</span>
                <span className="text-3xl font-bold text-coki-red">{formatPrice(cartTotal)}</span>
              </div>

              <h3 className="font-semibold text-coki-black mb-4">¿Cómo deseas realizar tu pedido?</h3>
              <p className="text-sm text-coki-black/60 mb-6">
                Sin pasarela de pago. Envía tu pedido por WhatsApp o contáctanos por otros medios.
              </p>

              <div className="space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-apple-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border-2 border-[#25D366]/30 transition-all w-full"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-coki-black">Enviar pedido por WhatsApp</p>
                    <p className="text-sm text-coki-black/60">
                      Tu pedido se enviará formateado para confirmar rápidamente
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-4 p-4 rounded-apple-lg bg-coki-black/5 hover:bg-coki-black/10 border-2 border-coki-black/10 transition-all w-full"
                >
                  <div className="w-12 h-12 rounded-full bg-coki-red flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-coki-black">Llamar para pedido</p>
                    <p className="text-sm text-coki-black/60">Realiza tu pedido por teléfono</p>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 p-4 rounded-apple-lg bg-coki-black/5 hover:bg-coki-black/10 border-2 border-coki-black/10 transition-all w-full"
                >
                  <div className="w-12 h-12 rounded-full bg-coki-black flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-coki-black">Enviar pedido por correo</p>
                    <p className="text-sm text-coki-black/60">
                      Escribe a {EMAIL} con tu pedido
                    </p>
                  </div>
                </a>
              </div>

              <p className="text-xs text-coki-black/50 mt-6 text-center">
                Sin costos de pasarela de pago. Pago contra entrega o acordado directamente.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
