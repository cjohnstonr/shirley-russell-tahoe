import { motion } from 'framer-motion'
import servicesBg from '../assets/img/services_bg.jpg'
import { fadeUp, stagger } from '../lib/motion'
import { areaSearches, pickOfTheWeek } from '../data/searches'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

/* Round 3 client ask: surface her five real RealScout saved searches as an
   intentional part of the page. Built on the SAME dark card-grid system as the
   Owners section (pine + services_bg texture + seafoam accents) so it reads as
   one hand. Four geographic searches as cards; the curated "Pick of the Week"
   as the closing feature row. Every card links out to RealScout in a new tab. */
export default function Explore() {
  return (
    <section id="explore" className="relative overflow-hidden bg-pine text-ivory">
      <img
        src={servicesBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        {/* Header: mirrors the Owners / Properties section-header rhythm */}
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Eyebrow tone="ivory">Explore the Market</Eyebrow>
            <h2 className="mt-7 font-display text-[clamp(2.25rem,4.2vw,3.6rem)] leading-[1.08] font-medium text-ivory">
              Find your corner
              <br />
              <em className="font-normal italic text-seafoam">of the lake.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="max-w-md text-lg leading-relaxed text-ivory/75">
              Browse live inventory the way Shirley’s buyers do. Curated searches
              across both shores, from the California south side to the Nevada
              north. Each opens her live listing feed.
            </p>
          </Reveal>
        </div>

        {/* Four geographic searches: same gap-px hairline grid as the Owners pillars */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-72px' }}
          className="mt-20 grid gap-px overflow-hidden border border-ivory/12 bg-ivory/12 md:grid-cols-2 xl:grid-cols-4"
        >
          {areaSearches.map((a) => (
            <motion.a
              key={a.href}
              href={a.href}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              className="group flex flex-col bg-pine p-9 pb-10 transition-colors duration-500 hover:bg-[#03403f] md:p-10 md:pb-12"
            >
              <div className="flex items-center gap-4">
                <span className="microtype text-seafoam/85">{a.region}</span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-ivory/15 transition-colors duration-500 group-hover:bg-seafoam/40"
                />
              </div>
              <h3 className="mt-10 font-display text-[1.75rem] leading-snug font-medium text-ivory">
                {a.name}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.8] text-mist">{a.blurb}</p>
              <span className="microtype mt-auto flex items-center gap-2 pt-8 text-seafoam">
                View listings
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Curated pick: the closing feature row, echoing the Owners closing CTA row */}
        <Reveal
          delay={0.1}
          className="mt-10 flex flex-col items-start justify-between gap-8 border border-seafoam/25 bg-abyss/40 p-9 md:flex-row md:items-center md:p-11"
        >
          <div className="max-w-xl">
            <p className="microtype text-seafoam/85">{pickOfTheWeek.label}</p>
            <p className="mt-4 font-display text-2xl leading-snug font-normal italic text-ivory md:text-[1.7rem]">
              {pickOfTheWeek.blurb}
            </p>
          </div>
          <a
            href={pickOfTheWeek.href}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost-light shrink-0"
          >
            View this week’s pick
          </a>
        </Reveal>
      </div>
    </section>
  )
}
