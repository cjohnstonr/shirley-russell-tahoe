import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../lib/motion'
import { faqGroups } from '../data/faqs'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

/* A + that becomes a − when open (the vertical bar collapses). */
function PlusMinus({ open }: { open: boolean }) {
  return (
    <span className="relative mt-[0.45rem] block h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-teal" />
      <span
        className={`absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-teal transition-transform duration-300 ${
          open ? 'scale-y-0' : 'scale-y-100'
        }`}
      />
    </span>
  )
}

/* Round 3 client ask: her 14 real questions as a Q&A. Two-column layout mirrors
   the Story section (sticky intro + reading column) so it reads as one hand.
   Single-open accordion; answers where evergreen, an "Ask Shirley" route where a
   figure would have to be invented (see data/faqs.ts for the discipline). */
export default function Questions() {
  const reduce = useReducedMotion()
  const [openId, setOpenId] = useState('0-0') // first question open by default

  return (
    <section id="questions" className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Sticky intro */}
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-32">
              <Eyebrow>Questions, Answered</Eyebrow>
              <h2 className="mt-7 font-display text-[clamp(2.25rem,4.2vw,3.6rem)] leading-[1.08] font-medium text-ink">
                The questions
                <br />
                buyers <em className="font-normal italic text-teal">actually ask.</em>
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-charcoal">
                Straight answers from someone who ran Tahoe rentals for twenty years. When a
                question turns on the specifics of your property, she will get you the real number
                rather than a guess.
              </p>
              <a href="#contact" className="btn btn-ghost-dark mt-10">
                Ask Shirley Directly
              </a>
            </Reveal>
          </div>

          {/* Grouped accordion */}
          <div className="lg:col-span-7 lg:col-start-6">
            {faqGroups.map((group, gi) => (
              <div key={group.label} className={gi === 0 ? '' : 'mt-16'}>
                <Reveal>
                  <p className="microtype text-teal">{group.label}</p>
                  <div className="mt-6 border-t border-linen">
                    {group.items.map((item, ii) => {
                      const id = `${gi}-${ii}`
                      const open = openId === id
                      return (
                        <div key={id} className="border-b border-linen">
                          <button
                            type="button"
                            id={`faq-btn-${id}`}
                            aria-expanded={open}
                            aria-controls={`faq-panel-${id}`}
                            onClick={() => setOpenId((cur) => (cur === id ? '' : id))}
                            className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                          >
                            <span className="font-display text-[1.3rem] leading-snug font-medium text-ink transition-colors duration-300 group-hover:text-teal md:text-[1.45rem]">
                              {item.q}
                            </span>
                            <PlusMinus open={open} />
                          </button>

                          <AnimatePresence initial={false}>
                            {open && (
                              <motion.div
                                key="panel"
                                id={`faq-panel-${id}`}
                                role="region"
                                aria-labelledby={`faq-btn-${id}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: reduce ? 0 : 0.42, ease: EASE }}
                                className="overflow-hidden"
                              >
                                {'a' in item ? (
                                  <p className="max-w-xl pb-8 text-[1rem] leading-relaxed text-charcoal">
                                    {item.a}
                                  </p>
                                ) : (
                                  <div className="max-w-xl pb-8">
                                    <p className="text-[1rem] leading-relaxed text-charcoal">
                                      {item.ask}
                                    </p>
                                    <a
                                      href="#contact"
                                      className="group/cta mt-4 inline-flex items-center gap-2 font-sans text-[0.82rem] font-semibold tracking-[0.16em] text-teal uppercase transition-colors duration-300 hover:text-teal-deep"
                                    >
                                      Ask Shirley Directly
                                      <span
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover/cta:translate-x-1"
                                      >
                                        &rarr;
                                      </span>
                                    </a>
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
