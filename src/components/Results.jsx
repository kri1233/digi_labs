import { motion } from 'framer-motion'

const results = [
  {
    value: '3.2×',
    label: 'Average ROAS',
    description:
      'More revenue generated from every advertising dollar.',
  },
  {
    value: '47%',
    label: 'Higher CTR',
    description:
      'Creative built to earn attention instead of interrupting it.',
  },
  {
    value: '2.8M',
    label: 'People Reached',
    description:
      'Qualified audiences reached across high-intent channels.',
  },
]

const Results = () => {
  return (
    <section
      id="results"
      className="relative overflow-hidden px-6 py-40 md:py-56"
    >
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.04]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Proof
          </p>

          <h2 className="
            mt-8
            max-w-5xl
            text-5xl
            font-semibold
            leading-[0.92]
            tracking-[-0.05em]
            md:text-7xl
            lg:text-8xl
          ">
            Numbers that
            <br />

            <span className="text-white/25">
              speak louder.
            </span>
          </h2>
        </motion.div>

        <div className="
          mt-24
          grid
          gap-px
          overflow-hidden
          rounded-[2rem]
          border
          border-white/10
          bg-white/10
          md:grid-cols-3
        ">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              whileHover={{
                backgroundColor: 'rgba(255,255,255,0.08)',
              }}
              className="
                group
                min-h-[350px]
                bg-black
                p-8
                transition-colors
                duration-500
                md:p-10
              "
            >
              <div className="flex h-full flex-col justify-between">

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/30">
                    0{index + 1}
                  </span>

                  <span className="
                    text-white/20
                    transition-transform
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  ">
                    ↗
                  </span>
                </div>

                <div>
                  <motion.p
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + index * 0.15,
                    }}
                    className="
                      text-7xl
                      font-semibold
                      tracking-[-0.07em]
                      md:text-8xl
                    "
                  >
                    {result.value}
                  </motion.p>

                  <p className="mt-3 text-sm font-medium">
                    {result.label}
                  </p>

                  <p className="
                    mt-4
                    max-w-xs
                    text-sm
                    leading-relaxed
                    text-white/35
                  ">
                    {result.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <p className="
          mt-6
          text-right
          text-[10px]
          uppercase
          tracking-[0.2em]
          text-white/20
        ">
          Illustrative results for demonstration
        </p>
      </div>
    </section>
  )
}

export default Results