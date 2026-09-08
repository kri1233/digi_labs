import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Paid Media',
    description:
      'We put your brand in front of the right people, at the right moment, with campaigns built around measurable growth.',
  },
  {
    number: '02',
    title: 'Creative',
    description:
      'Scroll-stopping creative designed to earn attention, communicate value and turn viewers into customers.',
  },
  {
    number: '03',
    title: 'Conversion',
    description:
      'Every click has a destination. We optimize the journey from first impression to completed purchase.',
  },
  {
    number: '04',
    title: 'Growth',
    description:
      'We continuously test, learn and scale what works so your marketing becomes a predictable growth engine.',
  },
]

const Services = () => {
  return (
    <section
      id="services"
      className="relative px-6 py-40 md:py-56"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            The System
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
            One system.
            <br />

            <span className="text-white/25">
              Every growth lever.
            </span>
          </h2>
        </motion.div>

        <div className="
          mt-32
          grid
          gap-20
          lg:grid-cols-2
          lg:gap-24
        ">

          {/* Visual */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.02]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-20
                  [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
                  [background-size:50px_50px]
                "
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-56
                  w-56
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/20
                  md:h-72
                  md:w-72
                "
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-36
                  w-36
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/30
                  md:h-48
                  md:w-48
                "
              />

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-40
                  w-40
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-white/20
                  blur-[80px]
                "
              />

              <div className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              ">
                <div className="text-center">
                  <p className="
                    text-6xl
                    font-semibold
                    tracking-[-0.07em]
                    md:text-8xl
                  ">
                    01—04
                  </p>

                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/30">
                    Growth System
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  group
                  border-t
                  border-white/10
                  py-10
                  md:py-14
                "
              >
                <div className="flex gap-6">
                  <span className="pt-2 text-xs text-white/30">
                    {service.number}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="
                        text-3xl
                        font-medium
                        tracking-tight
                        transition-transform
                        duration-500
                        group-hover:translate-x-2
                        md:text-5xl
                      ">
                        {service.title}
                      </h3>

                      <span className="
                        text-2xl
                        text-white/30
                        transition-transform
                        duration-500
                        group-hover:translate-x-2
                      ">
                        ↗
                      </span>
                    </div>

                    <p className="
                      mt-5
                      max-w-lg
                      text-sm
                      leading-relaxed
                      text-white/40
                      md:text-base
                    ">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="border-t border-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services