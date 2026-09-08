import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackEvent } from '../utils/analytics'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleCTA = () => {
    trackEvent('cta_click', {
      cta_name: 'navbar_book_call',
      location: 'navbar',
    })
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-6
        py-6
      ">

        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.2em]"
        >
          DIGILABSS
        </a>

        <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                text-xs
                text-white/40
                transition-colors
                hover:text-white
              "
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleCTA}
            className="
              rounded-full
              bg-white/10
              px-5
              py-2.5
              text-xs
              font-medium
              text-white
              transition-transform
              hover:scale-105
            "
          >
            Book a Call
          </a>

        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            md:hidden
          "
        >
          <span className="text-xl">
            {open ? '×' : '☰'}
          </span>
        </button>

      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="
              border-b
              border-white/10
              bg-black/95
              px-6
              pb-8
              backdrop-blur-xl
              md:hidden
            "
          >
            <div className="flex flex-col gap-6 pt-6">

              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-medium"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => {
                  setOpen(false)
                  handleCTA()
                }}
                className="
                  mt-3
                  rounded-full
                  bg-white/10
                  px-6
                  py-4
                  text-center
                  text-sm
                  font-medium
                  text-black
                "
              >
                Book a Strategy Call →
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar