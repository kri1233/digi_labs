import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Strategy',
    text: 'We identify the audience, offer and growth opportunity before spending a single advertising dollar.',
  },
  {
    number: '02',
    title: 'Creative',
    text: 'We build high-impact creative designed to stop the scroll and communicate value instantly.',
  },
  {
    number: '03',
    title: 'Launch',
    text: 'Campaigns go live across the right channels with clear tracking and measurable conversion goals.',
  },
  {
    number: '04',
    title: 'Scale',
    text: 'We continuously test, learn and move budget toward the combinations that actually perform.',
  },
]

const Process = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden px-6 py-40 md:py-56"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            How it works
          </p>

          <h2 className="
            mt-8
            max-w-5xl
            text-5xl
            font-semibold
            leading-[0.9]
            tracking-[-0.05em]
            md:text-7xl
            lg:text-8xl
          ">
            From attention
            <br />
            <span className="text-white/25">
              to growth.
            </span>
          </h2>
        </motion.div>

        <div className="relative mt-24">

          {/* Connecting line */}
          <div className="
            absolute
            left-4
            top-0
            h-full
            w-px
            bg-white/10
            md:left-1/2
          " />

          <div className="space-y-16 md:space-y-24">

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                className="relative grid gap-8 pl-12 md:grid-cols-2 md:gap-20 md:pl-0"
              >

                <div
                  className={`
                    ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}
                  `}
                >
                  <span className="text-sm text-white/30">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
                    {step.title}
                  </h3>
                </div>

                <div
                  className={`
                    ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}
                  `}
                >
                  <p className="max-w-md text-base leading-relaxed text-white/40 md:text-lg">
                    {step.text}
                  </p>
                </div>

                {/* Timeline dot */}
                <motion.div
                  whileInView={{
                    scale: [0, 1.2, 1],
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="
                    absolute
                    left-0
                    top-1
                    h-8
                    w-8
                    rounded-full
                    border
                    border-white/20
                    bg-black
                    md:left-1/2
                    md:-translate-x-1/2
                  "
                >
                  <div className="absolute inset-2 rounded-full bg-white" />
                </motion.div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Process