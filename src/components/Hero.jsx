import { motion } from 'framer-motion'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const fruits = ['🥭', '🍓', '🍍', '🫐', '🍈', '🍋']

const badges = [
  { label: '100% Natural', color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
  { label: 'Sin conservantes', color: 'bg-amber-500/15 text-amber-400 border-amber-500/25' },
  { label: 'Fruta real', color: 'bg-coki-red/15 text-coki-red border-coki-red/25' },
]

const stats = [
  { value: '9+', label: 'Sabores' },
  { value: '100%', label: 'Natural' },
  { value: '250g', label: 'Desde' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-16">
      {/* Fondo: gradiente radial rojo desde arriba */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(230,57,70,0.28),transparent)]" />

      {/* Malla de cuadrícula */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />

      {/* Orbes flotantes */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[6%] w-56 h-56 md:w-72 md:h-72 bg-coki-red/20 rounded-full blur-[70px]"
      />
      <motion.div
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 right-[6%] w-48 h-48 md:w-64 md:h-64 bg-orange-500/15 rounded-full blur-[70px]"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-rose-600/8 rounded-full blur-[90px]"
      />

      {/* Emojis flotantes — solo desktop */}
      {fruits.map((fruit, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl md:text-3xl select-none pointer-events-none hidden lg:block"
          style={{
            left: `${8 + i * 15}%`,
            top: `${12 + (i % 3) * 26}%`,
          }}
          animate={{ y: [0, -12, 0], rotate: [-4, 4, -4], opacity: [0.2, 0.45, 0.2] }}
          transition={{ repeat: Infinity, duration: 4 + i * 0.7, delay: i * 0.4, ease: 'easeInOut' }}
        >
          {fruit}
        </motion.span>
      ))}

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8"
        >
          {badges.map(({ label, color }) => (
            <span
              key={label}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border backdrop-blur-sm ${color}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80 flex-shrink-0" />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 110 }}
          className="mb-5 sm:mb-6"
        >
          <img
            src={`${import.meta.env.BASE_URL}icono-coki.png`}
            alt="Pulpas Coki"
            className="h-20 sm:h-28 md:h-36 w-auto mx-auto object-contain drop-shadow-[0_0_36px_rgba(230,57,70,0.45)]"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-[2.1rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight"
        >
          La fruta en su{' '}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coki-red via-orange-400 to-coki-red">
              estado puro
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-coki-red to-orange-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.75, delay: 0.85 }}
            />
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32 }}
          className="text-base sm:text-lg md:text-xl text-white/55 max-w-sm sm:max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Pulpas de fruta tropicales, frescas y sin conservantes.
          Del corazón del Meta a tu mesa.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.46 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto mb-10 sm:mb-14"
        >
          <button
            onClick={() => scrollTo('productos')}
            className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-full bg-coki-red text-white font-semibold text-sm sm:text-base overflow-hidden shadow-[0_0_28px_rgba(230,57,70,0.4)] hover:shadow-[0_0_48px_rgba(230,57,70,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-coki-red to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Ver productos</span>
            <span className="relative text-base">→</span>
          </button>
          <button
            onClick={() => scrollTo('nosotros')}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-full border border-white/20 text-white/75 font-semibold text-sm sm:text-base backdrop-blur-sm hover:bg-white/10 hover:border-white/35 hover:text-white transition-all duration-300 hover:scale-[1.03] active:scale-95"
          >
            Conoce más
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.6 }}
          className="inline-flex items-center justify-center gap-5 sm:gap-10 px-5 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
          {stats.map(({ value, label }, i) => (
            <div key={i} className="text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">{value}</p>
              <p className="text-[10px] sm:text-xs text-white/45 font-medium uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-coki-red" />
        </motion.div>
      </motion.div>
    </section>
  )
}
