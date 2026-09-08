import { motion } from 'framer-motion'
import { trackEvent } from '../utils/analytics'

const CTA = () => {
  const handleClick = () => {
    trackEvent('cta_click', {
      cta_name: 'book_a_call',
      location: 'final_cta',
    })
  }

  return (
    <section className="relative overflow-hidden px-6 py-40 md:py-56">

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.2, 0.08],
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
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          blur-[150px]
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="
          relative
          mx-auto
          max-w-5xl
          overflow-hidden
          rounded-[2rem]
          border
          border-white/10
          bg-white/[0.02]
          p-10
          text-center
          md:p-24
        "
      >

        <p className="text-xs uppercase tracking-[0.3em] text-white/30">
          Ready?
        </p>

        <h2 className="
          mt-7
          text-5xl
          font-semibold
          leading-[0.9]
          tracking-[-0.05em]
          md:text-7xl
        ">
          Let's build
          <br />
          <span className="text-white/30">
            something that grows.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-lg text-sm leading-relaxed text-white/40 md:text-base">
          Tell us where you are today and where you want to go.
          We'll help you find the fastest path forward.
        </p>

        <motion.a
          href="#contact"
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-white/40
            px-7
            py-4
            text-sm
            font-medium
            text-white
          "
        >
          Book a Strategy Call
          <span>→</span>
        </motion.a>

      </motion.div>
    </section>
  )
}

export default CTA