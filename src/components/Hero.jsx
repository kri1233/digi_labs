import { motion, useScroll, useTransform } from 'framer-motion'
import CampaignVisual from './CampaignVisual'
import { trackEvent } from '../utils/analytics'

const Hero = () => {
  const { scrollY } = useScroll()

  const heroScale = useTransform(scrollY, [0, 600], [1, 0.85])
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const visualY = useTransform(scrollY, [0, 700], [0, 100])

  const handleCTA = () => {
    trackEvent('cta_click', {
      cta_name: 'book_a_strategy_call',
      location: 'hero',
    })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          left-1/2
          top-[45%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          blur-[160px]
        "
      />

      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity,
        }}
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-6
          pt-28
        "
      >

        <div className="w-full max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-center"
          >
            <span className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/50
              backdrop-blur-md
            ">
              Performance Marketing Agency
            </span>
          </motion.div>

          <div className="overflow-hidden text-center">

            <motion.h1
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-[15vw]
                font-semibold
                leading-[0.82]
                tracking-[-0.07em]
                sm:text-[12vw]
                md:text-[10vw]
                lg:text-[9vw]
              "
            >
              Turn attention
              <br />

              <span className="text-white/30">
                into revenue.
              </span>
            </motion.h1>

          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="
              mx-auto
              mt-10
              max-w-xl
              text-center
              text-base
              leading-relaxed
              text-white/50
              md:text-lg
            "
          >
            We turn paid media, creative and strategy
            into a growth engine for ambitious brands.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
            }}
            className="mt-10 flex justify-center"
          >

            <motion.a
              href="#contact"
              onClick={handleCTA}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                bg-white/10
                px-7
                py-4
                text-sm
                font-medium
                text-white
              "
            >
              Book a Strategy Call

              <span className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              ">
                →
              </span>
            </motion.a>

          </motion.div>

          <motion.div
            style={{ y: visualY }}
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              mx-auto
              mt-20
              h-[360px]
              max-w-6xl
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.02]
              md:h-[500px]
            "
          >
            <CampaignVisual />
          </motion.div>

        </div>

      </motion.div>

      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          -translate-x-1/2
          text-[10px]
          uppercase
          tracking-[0.4em]
          text-white/40
        "
      >
        Scroll to explore
      </motion.div>

    </section>
  )
}

export default Hero