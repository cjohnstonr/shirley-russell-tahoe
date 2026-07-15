import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from '../lib/motion'

const LINKS = [
  { label: 'The Story', href: '#story' },
  { label: 'For Owners', href: '#owners' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Properties', href: '#properties' },
  { label: 'Explore', href: '#explore' },
  { label: 'Q&A', href: '#questions' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const light = !scrolled && !open

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-linen/70 bg-alabaster/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
          <a href="#top" className="group leading-none" aria-label="Shirley Russell — back to top">
            <span
              className={`font-display text-[1.45rem] font-medium tracking-[0.02em] transition-colors duration-500 ${
                light ? 'text-ivory' : 'text-ink'
              }`}
            >
              Shirley Russell
            </span>
            <span
              className={`mt-1 block text-[9px] font-semibold tracking-[0.34em] uppercase transition-colors duration-500 ${
                light ? 'text-ivory/60' : 'text-slate'
              }`}
            >
              Lake Tahoe · Carson Valley · Reno
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Primary">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`microtype transition-colors duration-300 ${
                  light ? 'text-ivory/85 hover:text-ivory' : 'text-charcoal hover:text-teal'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`btn !px-6 !py-3 ${light ? 'btn-ghost-light' : 'btn-solid'}`}
            >
              Schedule a Consultation
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
          >
            <span
              className={`block h-px w-7 transition-all duration-300 ${
                light && !open ? 'bg-ivory' : open ? 'translate-y-1 rotate-45 bg-ivory' : 'bg-ink'
              }`}
            />
            <span
              className={`block h-px w-7 transition-all duration-300 ${
                light && !open ? 'bg-ivory' : open ? '-translate-y-[7px] -rotate-45 bg-ivory' : 'bg-ink'
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-end bg-pine px-8 pb-16 lg:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: EASE }}
                  className="font-display text-4xl font-medium text-ivory"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42, ease: EASE }}
                className="btn btn-ghost-light mt-8 self-start"
              >
                Schedule a Consultation
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
