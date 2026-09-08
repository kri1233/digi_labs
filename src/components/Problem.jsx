import { motion } from 'framer-motion'

const Problem = () => {
  return (
    <section className="relative overflow-hidden px-6 py-40 md:py-56">

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            The Problem
          </p>

          <h2 className="
            mt-8
            max-w-5xl
            text-5xl
            font-semibold
            leading-[0.95]
            tracking-[-0.05em]
            md:text-7xl
            lg:text-8xl
          ">
            Your customers are
            <br />
            <span className="text-white/25">
              already scrolling.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="
            relative
            mt-24
            h-[400px]
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-white/[0.02]
            md:h-[550px]
          "
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-72
              w-72
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/10
              blur-[100px]
            "
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">

              <motion.p
                animate={{
                  letterSpacing: ['-0.08em', '-0.03em', '-0.08em'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                  text-[17vw]
                  font-semibold
                  leading-none
                  text-white/[0.06]
                  md:text-[12vw]
                "
              >
                ATTENTION
              </motion.p>

              <p className="
                mt-[-2vw]
                text-xl
                font-medium
                text-white/70
                md:text-3xl
              ">
                is the new currency.
              </p>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Problem