import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import heroPonderosa from '../assets/img/hero_ponderosa.jpg'
import { EASE, fadeUp, stagger } from '../lib/motion'
import Eyebrow from './Eyebrow'
import { site } from '../data/site'

/*
  Hero image: 100 Ponderosa Drive, Zephyr Cove — her own $3.4M SOLD lakefront
  listing. Chosen over the crisper Voight Canyon aerial because it is the
  thesis in one frame: Lake Tahoe + Sierra peaks + the home. The 1280px source
  is protected by object-position (58% 42% keeps lake/home, crops the MLS
  watermark and the neighboring construction at the frame edges), the heavy
  left scrim, the bottom vignette, and the site-wide film grain.
*/
export default function Hero() {
  const prefersReduced = useReducedMotion()
  const { scrollY } = useScroll()
  /* Slow parallax: image drifts at ~1/10 scroll speed. Gated manually because
     MotionConfig reducedMotion does not cover style-bound scroll transforms. */
  const parallaxY = useTransform(scrollY, [0, 900], [0, 90])

  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden bg-abyss">
      {/* Cinematic image: slow settle on load + scroll parallax (114% height = drift headroom) */}
      <motion.img
        src={heroPonderosa}
        alt="Lakefront home above Lake Tahoe at 100 Ponderosa Drive, Zephyr Cove"
        loading="eager"
        decoding="async"
        className="absolute inset-x-0 top-[-7%] h-[114%] w-full object-cover"
        style={{ objectPosition: '58% 42%', y: prefersReduced ? 0 : parallaxY }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.2, ease: EASE }}
      />

      {/* Scrims — left-anchored for the text column, bottom for grounding, all WCAG-AA rated.
          The via stop sits at 55% so the dark zone reaches past the italic line's last word */}
      <div className="absolute inset-0 bg-gradient-to-r from-abyss/85 from-12% via-abyss/45 via-55% to-abyss/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-abyss/30 to-abyss/35" />
      {/* Bottom vignette */}
      <div className="absolute inset-0 [background:radial-gradient(120%_75%_at_50%_112%,rgba(4,29,29,0.62),transparent_62%)]" />
      {/* Mobile safety veil — text spans the full width on small screens where the
          left gradient thins out; md+ removes it so the image breathes */}
      <div className="absolute inset-0 bg-abyss/30 md:bg-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-44 pb-24 md:px-10 md:pb-28">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={fadeUp}>
            <Eyebrow tone="ivory">{site.brokerage} · South Lake Tahoe</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 font-display text-[clamp(3rem,7.4vw,6.25rem)] leading-[1.02] font-medium tracking-[-0.01em] text-ivory [text-shadow:0_2px_28px_rgba(4,29,29,0.55),0_1px_3px_rgba(4,29,29,0.4)]"
          >
            Own your piece
            <br />
            of Lake Tahoe.
            <em className="mt-3 block font-normal italic md:mt-4">Then let it pay for itself.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-9 max-w-xl text-[1.0625rem] leading-relaxed text-ivory/[0.92] md:text-lg"
          >
            Shirley Russell spent twenty years inside Tahoe&rsquo;s vacation-rental world before she
            ever sold a home. Now she helps families and investors find the properties that earn
            their keep, on both sides of the lake.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-11 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn btn-solid">
              Schedule a Consultation
            </a>
            <a href="#owners" className="btn btn-ghost-light">
              How It Works
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Proof caption — the hero is not a stock photo, it is her sale */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
        className="microtype absolute right-24 bottom-9 z-10 hidden text-ivory/55 md:block"
      >
        100 Ponderosa Drive, Zephyr Cove · Sold at $3,400,000
      </motion.p>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        className="absolute right-8 bottom-0 z-10 hidden flex-col items-center gap-4 pb-8 md:flex"
        aria-hidden="true"
      >
        <span className="text-[9px] font-semibold tracking-[0.4em] uppercase text-ivory/55 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="relative block h-16 w-px overflow-hidden bg-ivory/20">
          <motion.span
            className="absolute top-0 left-0 h-6 w-px bg-ivory/80"
            animate={{ y: [-24, 64] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  )
}
