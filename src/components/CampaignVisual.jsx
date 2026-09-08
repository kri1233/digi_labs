import { motion } from 'framer-motion'

const dashboardImage =
  'https://images.unsplash.com/photo-1771923082503-0a3381c46cef?auto=format&fit=crop&fm=jpg&q=80&w=1600'

const CampaignVisual = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">

      {/* Background image */}
      <img
        src={dashboardImage}
        alt="Digital marketing analytics dashboard"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Animated gradient */}
      <motion.div
        animate={{
          x: [-100, 120, -100],
          y: [0, 80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/20
          blur-[120px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-50
          opacity-20
          [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* Main video window */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 10 }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[65%]
          w-[70%]
          -translate-x-1/2
          -translate-y-1/2
          overflow-hidden
          rounded-[1.5rem]
          border
          border-white/10
          bg-black
          shadow-2xl
        "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={dashboardImage}
          className="h-full w-full object-cover opacity-55"
        >
          <source
            src="https://coverr.co/s3/mp4/Lonely-Blue.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/45" />

        {/* Dashboard content */}
        <div className="absolute inset-2 p-5 md:p-8">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                Campaign Overview
              </p>

              <p className="mt-2 text-xl font-semibold md:text-3xl">
                $248,920
              </p>
            </div>

            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-300">
              +132%
            </div>
          </div>

          {/* Graph */}
          <div className="mt-8 flex h-24 items-end gap-2 md:h-36">
            {[25, 40, 32, 55, 48, 68, 60, 78, 72, 92].map(
              (height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                  }}
                  className="flex-1 rounded-t bg-white/30"
                />
              )
            )}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">

            <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
              <p className="text-[9px] uppercase tracking-wider text-white/30">
                ROAS
              </p>
              <p className="mt-1 text-lg font-semibold">
                3.2×
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
              <p className="text-[9px] uppercase tracking-wider text-white/30">
                Conversions
              </p>
              <p className="mt-1 text-lg font-semibold">
                12,432
              </p>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Floating ROAS card */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          right-[8%]
          top-[12%]
          z-20
          rounded-2xl
          border
          border-white/10
          bg-black/80
          p-4
          shadow-2xl
          backdrop-blur-xl
        "
      >
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
          ROAS
        </p>

        <p className="mt-1 text-2xl font-semibold">
          3.2×
        </p>

        <p className="mt-1 text-[10px] text-emerald-300">
          +48.2%
        </p>
      </motion.div>

      {/* Floating conversion card */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          bottom-[10%]
          left-[6%]
          z-20
          rounded-2xl
          border
          border-white/10
          bg-black/80
          p-4
          shadow-2xl
          backdrop-blur-xl
        "
      >
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
          Conversions
        </p>

        <p className="mt-1 text-2xl font-semibold">
          12,432
        </p>

        <p className="mt-1 text-[10px] text-white/40">
          This month
        </p>
      </motion.div>

      {/* Corner label */}
      <div className="absolute bottom-5 right-5 z-30">
        <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/40 backdrop-blur">
          Performance Engine
        </span>
      </div>

    </div>
  )
}

export default CampaignVisual