import { motion } from 'framer-motion'

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.5,
      }}
      className="
        pointer-events-none
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black
      "
    >
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          text-sm
          font-semibold
          tracking-[0.3em]
        "
      >
        DIGILABSS
      </motion.p>
    </motion.div>
  )
}

export default PageLoader