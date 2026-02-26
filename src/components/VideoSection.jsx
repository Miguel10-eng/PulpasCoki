import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function VideoSection() {
  // Placeholder: el usuario agregará el video más adelante
  // Para YouTube: usar iframe con src="https://www.youtube.com/embed/VIDEO_ID"
  // Para video local: usar <video> con src en public/
  const VIDEO_EMBED_URL = '' // Ejemplo: 'https://www.youtube.com/embed/VIDEO_ID'

  return (
    <section id="video" className="py-24 px-6 bg-coki-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conoce <span className="text-coki-red">Pulpas Coki</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Descubre cómo elaboramos nuestras deliciosas pulpas de fruta y nuestra historia villacense.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-apple-lg overflow-hidden bg-coki-black/80 border-2 border-white/10 shadow-apple-hover"
        >
          {VIDEO_EMBED_URL ? (
            <iframe
              src={VIDEO_EMBED_URL}
              title="Pulpas Coki - Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-24 h-24 rounded-full bg-coki-red/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Play className="w-12 h-12 text-coki-red fill-coki-red ml-2" />
              </div>
              <p className="text-xl font-semibold text-white/90 mb-2">Próximamente</p>
              <p className="text-white/60 max-w-md">
                Aquí verás el video de Pulpas Coki. Cuando esté listo, reemplaza VIDEO_EMBED_URL en{' '}
                <code className="text-coki-red/80 text-sm">src/components/VideoSection.jsx</code>{' '}
                con el enlace de tu video (YouTube, Vimeo, etc.).
              </p>
              <p className="text-sm text-white/40 mt-4">
                Ejemplo YouTube: https://www.youtube.com/embed/TU_VIDEO_ID
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
