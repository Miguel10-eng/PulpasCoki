import { motion } from 'framer-motion'
import { Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { EMAIL, WHATSAPP_NUMBER, INSTAGRAM_URL, FACEBOOK_URL, TIKTOK_URL, MAPS_URL } from '../config'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 px-6 bg-coki-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <img src={`${import.meta.env.BASE_URL}icono-coki.png`} alt="Pulpas Coki" className="h-16 md:h-20 w-auto max-w-[180px] mx-auto mb-6 object-contain" />
          <h2 className="text-4xl md:text-5xl font-bold text-coki-black mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-coki-black/60 max-w-2xl mx-auto">
            ¿Pedido personalizado o preguntas? Estamos para ayudarte.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-apple p-6 text-center hover:border-[#25D366]/30 hover:shadow-apple-hover transition-all group"
          >
            <div className="w-14 h-14 rounded-apple bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-[#25D366]" />
            </div>
            <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-sm text-coki-black/70">Chatea con nosotros</p>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-apple p-6 text-center hover:border-pink-400/30 hover:shadow-apple-hover transition-all group"
          >
            <div className="w-14 h-14 rounded-apple bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Instagram className="w-7 h-7 text-pink-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Instagram</h3>
            <p className="text-sm text-coki-black/70">@pulpas_coki</p>
          </a>

          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-apple p-6 text-center hover:border-blue-500/30 hover:shadow-apple-hover transition-all group"
          >
            <div className="w-14 h-14 rounded-apple bg-blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Facebook className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Facebook</h3>
            <p className="text-sm text-coki-black/70">Pulpas Coki</p>
          </a>

          <a
            href={TIKTOK_URL || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`card-apple p-6 text-center transition-all group ${TIKTOK_URL ? 'hover:border-coki-black/20 hover:shadow-apple-hover' : 'opacity-70 cursor-default'}`}
            onClick={!TIKTOK_URL ? (e) => e.preventDefault() : undefined}
          >
            <div className="w-14 h-14 rounded-apple bg-coki-black/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <TikTokIcon />
            </div>
            <h3 className="font-semibold text-lg mb-2">TikTok</h3>
            <p className="text-sm text-coki-black/70">{TIKTOK_URL ? 'Síguenos' : 'Próximamente'}</p>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="card-apple p-6 text-center hover:border-coki-red/20 transition-colors group"
          >
            <div className="w-14 h-14 rounded-apple bg-coki-red/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-coki-red" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-sm text-coki-black/70 break-all">{EMAIL}</p>
          </a>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-apple p-6 text-center hover:border-coki-red/20 transition-colors group"
          >
            <div className="w-14 h-14 rounded-apple bg-coki-red/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7 text-coki-red" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
            <p className="text-sm text-coki-black/70">Villavicencio</p>
            <p className="text-xs text-coki-red font-medium mt-1">Ver en mapa</p>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
