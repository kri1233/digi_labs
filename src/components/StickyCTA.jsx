import { motion } from 'framer-motion'
import { trackEvent } from '../utils/analytics'

const StickyCTA = () => {
  const handleClick = () => {
    trackEvent('cta_click', {
      cta_name: 'sticky_book_call',
      location: 'floating_cta',
    })
  }

  return (
    <motion.a
      href="#contact"
      onClick={handleClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 2,
        duration: 0.6,
      }}
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="
        fixed
        bottom-5
        right-5
        z-40
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-white/10
        px-5
        py-3
        text-xs
        font-medium

        text-white/40
        shadow-2xl
        shadow-black/40
        md:bottom-7
        md:right-7
      "
    >
      Book a Call
      <span>→</span>
    </motion.a>
  )
}

export default StickyCTA