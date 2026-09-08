import { useState } from 'react'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { trackEvent } from '../utils/analytics'

const initialForm = {
  name: '',
  email: '',
  company: '',
  budget: '',
}

const ContactForm = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }))
  }

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }

    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email.'
    }

    if (!form.company.trim()) {
      newErrors.company = 'Please enter your company name.'
    }

    if (!form.budget) {
      newErrors.budget = 'Please select your budget.'
    }

    return newErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      toast.error('Please check the highlighted fields.')
      return
    }

    setIsSubmitting(true)

    try {
      const lead = {
        ...form,
        submittedAt: new Date().toISOString(),
      }

      const existingLeads = JSON.parse(
        localStorage.getItem('digilabss_leads') || '[]'
      )

      localStorage.setItem(
        'digilabss_leads',
        JSON.stringify([...existingLeads, lead])
      )

      trackEvent('form_submit', {
        form_name: 'book_a_call',
        company: form.company,
        budget: form.budget,
      })

      console.log('DIGILABSS LEAD:', lead)

      await new Promise((resolve) => {
        setTimeout(resolve, 700)
      })

      setSubmitted(true)
      setForm(initialForm)

      toast.success('Thanks! Your request has been received.')
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Toaster position="bottom-right" />

      <section
        id="contact"
        className="relative overflow-hidden px-6 py-40 md:py-56"
      >

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.16, 0.06],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[400px]
            w-[400px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white
            blur-[140px]
          "
        />

        <div className="relative mx-auto max-w-2xl">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Start a Conversation
            </p>

            <h2 className="
              mt-8
              text-5xl
              font-semibold
              leading-[0.95]
              tracking-[-0.05em]
              md:text-7xl
            ">
              Tell us about
              <br />
              your business.
            </h2>

            <p className="
              mt-6
              max-w-lg
              text-sm
              leading-relaxed
              text-white/40
              md:text-base
            ">
              Tell us where you are today, where you want to go,
              and we&apos;ll figure out the fastest way to get there.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="
                mt-16
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.03]
                p-10
                text-center
                md:p-16
              "
            >
              <div className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-white
                text-2xl
                text-black
              ">
                ✓
              </div>

              <h3 className="mt-6 text-3xl font-semibold">
                Request received.
              </h3>

              <p className="
                mx-auto
                mt-4
                max-w-md
                text-sm
                leading-relaxed
                text-white/40
              ">
                Thanks for reaching out. We&apos;ll be in touch shortly.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="
                  mt-8
                  rounded-full
                  border
                  border-white/10
                  px-6
                  py-3
                  text-sm
                  transition
                  hover:bg-white
                  hover:text-black
                "
              >
                Submit another request
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="mt-16 space-y-6"
            >

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/30"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`
                    w-full rounded-2xl border bg-white/[0.03]
                    px-5 py-4 text-sm outline-none transition
                    placeholder:text-white/20
                    ${
                      errors.name
                        ? 'border-red-400/50'
                        : 'border-white/10 focus:border-white/30'
                    }
                  `}
                />

                {errors.name && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/30"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={`
                    w-full rounded-2xl border bg-white/[0.03]
                    px-5 py-4 text-sm outline-none transition
                    placeholder:text-white/20
                    ${
                      errors.email
                        ? 'border-red-400/50'
                        : 'border-white/10 focus:border-white/30'
                    }
                  `}
                />

                {errors.email && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/30"
                >
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className={`
                    w-full rounded-2xl border bg-white/[0.03]
                    px-5 py-4 text-sm outline-none transition
                    placeholder:text-white/20
                    ${
                      errors.company
                        ? 'border-red-400/50'
                        : 'border-white/10 focus:border-white/30'
                    }
                  `}
                />

                {errors.company && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.company}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/30"
                >
                  Monthly Ad Budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={`
                    w-full appearance-none rounded-2xl border
                    bg-white/[0.03] px-5 py-4 text-sm outline-none
                    ${
                      errors.budget
                        ? 'border-red-400/50'
                        : 'border-white/10 focus:border-white/30'
                    }
                  `}
                >
                  <option value="">Select your budget</option>
                  <option value="under-5k">Under $5K</option>
                  <option value="5k-10k">$5K – $10K</option>
                  <option value="10k-25k">$10K – $25K</option>
                  <option value="25k-plus">$25K+</option>
                </select>

                {errors.budget && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.budget}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className="
                  flex w-full items-center justify-center gap-3
                  rounded-2xl bg-white px-6 py-5
                  text-sm font-medium text-black
                  disabled:cursor-not-allowed disabled:opacity-50
                "
              >
                {isSubmitting ? (
                  <>
                    <span className="
                      h-4 w-4 animate-spin rounded-full
                      border-2 border-black/20 border-t-black
                    " />
                    Sending...
                  </>
                ) : (
                  <>
                    Book a Strategy Call
                    <span>→</span>
                  </>
                )}
              </motion.button>

              <p className="
                text-center
                text-[10px]
                leading-relaxed
                text-white/20
              ">
                By submitting this form, you agree to be contacted
                regarding your inquiry.
              </p>

            </motion.form>
          )}

        </div>
      </section>
    </>
  )
}

export default ContactForm