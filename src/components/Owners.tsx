import { motion } from 'framer-motion'
import servicesBg from '../assets/img/services_bg.jpg'
import { fadeUp, stagger } from '../lib/motion'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

/* The owner/STR value proposition. Audience per BRIEF.md: mostly families and
   couples who want to enjoy the home AND offset costs; some pure investors. */
const PILLARS = [
  {
    n: '01',
    title: 'Rental-first property search',
    text: 'Not every Tahoe home makes a good short-term rental. Shirley evaluates location, layout, sleeping capacity, and four-season appeal the way an operator would, because for twenty years she was one.',
  },
  {
    n: '02',
    title: 'Permitting, demystified',
    text: 'Short-term-rental rules change from block to block between South Lake Tahoe, El Dorado County, and the Nevada side. Shirley steers you toward properties where the permits and the numbers can actually work.',
  },
  {
    n: '03',
    title: 'Honest income thinking',
    text: 'Clear conversations about seasonality, occupancy, and what a Tahoe home can genuinely earn. An operator’s math, not brochure math.',
  },
  {
    n: '04',
    title: 'Enjoy it. Offset it.',
    text: 'Most of her clients are families and couples who want to use the home themselves and rent it when they are away, letting Tahoe help pay for Tahoe. Pure investors are welcome too; the discipline is the same.',
  },
]

export default function Owners() {
  return (
    <section id="owners" className="relative overflow-hidden bg-pine text-ivory">
      {/* Whisper of real texture from her brand asset set */}
      <img
        src={servicesBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow tone="ivory">For Owners &amp; Future Owners</Eyebrow>
            <h2 className="mt-7 font-display text-[clamp(2.25rem,4.2vw,3.6rem)] leading-[1.08] font-medium text-ivory">
              A home that
              <br />
              <em className="font-normal italic text-seafoam">earns its keep.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7 lg:self-end">
            <p className="max-w-lg text-lg leading-relaxed text-ivory/75">
              The right Tahoe property is more than a getaway. Bought well, it hosts your family
              in July, skiers in January, and helps carry its own mortgage in between. Shirley
              guides you through all four steps of getting there.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-72px' }}
          className="mt-20 grid gap-px overflow-hidden border border-ivory/12 bg-ivory/12 md:grid-cols-2 xl:grid-cols-4"
        >
          {PILLARS.map((p) => (
            <motion.article
              key={p.n}
              variants={fadeUp}
              className="group flex flex-col bg-pine p-9 pb-12 transition-colors duration-500 hover:bg-[#03403f] md:p-10 md:pb-14"
            >
              <div className="flex items-center gap-5">
                <span className="font-display text-[2.6rem] leading-none font-normal italic text-seafoam/85">
                  {p.n}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-ivory/15 transition-colors duration-500 group-hover:bg-seafoam/40"
                />
              </div>
              <h3 className="mt-10 font-display text-[1.6rem] leading-snug font-medium text-ivory">
                {p.title}
              </h3>
              <p className="mt-5 text-[0.95rem] leading-[1.85] text-mist">{p.text}</p>
            </motion.article>
          ))}
        </motion.div>

        <Reveal delay={0.1} className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <p className="max-w-xl font-display text-xl font-normal italic text-ivory/85 md:text-2xl">
            Whether it becomes your family&rsquo;s basecamp or a pure investment, the goal is the
            same: a home you love, that pays its own way.
          </p>
          <a href="#contact" className="btn btn-ghost-light shrink-0">
            Start the Conversation
          </a>
        </Reveal>
      </div>
    </section>
  )
}
