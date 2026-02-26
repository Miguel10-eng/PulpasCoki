import { motion } from 'framer-motion'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const fruits = ['🥭', '🍓', '🍍', '🫐', '🍈', '🍋']

const badges = [
  { label: '100% Natural', color: 'bg-emerald-500/15 text-emerald-700 border-emerald-500/20' },
  { label: 'Sin conservantes', color: 'bg-amber-500/15 text-amber-700 border-amber-500/20' },
  { label: 'Fruta real', color: 'bg-coki-red/10 text-coki-red border-coki-red/20' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20">
      {/* Fondo con gradiente y malla */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(230,57,70,0.25),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orbes de color flotantes */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[8%] w-72 h-72 bg-coki-red/20 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 right-[8%] w-64 h-64 bg-orange-500/15 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-[100px]"
      />

      {/* Emojis de frutas flotando */}
      {fruits.map((fruit, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl select-none pointer-events-none hidden md:block"
          style={{
            left: `${10 + i * 14}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [-5, 5, -5],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + i * 0.7,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        >
          {fruit}
        </motion.span>
      ))}

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {badges.map(({ label, color }) => (
            <span
              key={label}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${color}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 120 }}
          className="mb-6"
        >
          <img
            src={`${import.meta.env.BASE_URL}icono-coki.png`}
            alt="Pulpas Coki"
            className="h-24 md:h-36 w-auto mx-auto object-contain drop-shadow-[0_0_40px_rgba(230,57,70,0.4)]"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight"
        >
          La fruta en su{' '}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coki-red via-orange-400 to-coki-red">
              estado puro
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-coki-red to-orange-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Pulpas de fruta tropicales, frescas y sin conservantes.
          Del corazón del Meta a tu mesa.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <button
            onClick={() => scrollTo('productos')}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-coki-red text-white font-semibold text-base overflow-hidden shadow-[0_0_30px_rgba(230,57,70,0.4)] hover:shadow-[0_0_50px_rgba(230,57,70,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-coki-red to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Ver productos</span>
            <span className="relative text-lg">→</span>
          </button>
          <button
            onClick={() => scrollTo('nosotros')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white/80 font-semibold text-base backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Conoce más
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
          {[
            { value: '9+', label: 'Sabores' },
            { value: '100%', label: 'Natural' },
            { value: '250g', label: 'Desde' },
          ].map(({ value, label }, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-extrabold text-white">{value}</p>
              <p className="text-xs text-white/50 font-medium uppercase tracking-widest mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-coki-red" />
        </motion.div>
      </motion.div>
    </section>
  )
}
