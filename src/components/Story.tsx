import headshot from '../assets/img/headshot.jpg'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import { site } from '../data/site'

/* Facts sourced from her verbatim bio (assets_manifest.md §6):
   30+ years living/working in the High Sierra; vacation-rental operations and
   owner liaison at Tahoe Keys Resort; management/sales-trainer/marketing roles
   with promotions and awards; now a Realtor with Chase International. */
const TIMELINE = [
  {
    era: 'Tahoe Keys Resort',
    text: 'Owner liaison and vacation-rental operations. Two decades of rentals, acquisitions, management logistics, and the care of owners who trusted her with their homes.',
  },
  {
    era: 'Chase International',
    text: 'Realtor, CA and NV. Top producer serving Lake Tahoe, Carson Valley, Washoe, and Reno.',
  },
  {
    era: 'Today',
    text: 'The Sierra’s short-term-rental specialist. Four STR closings this month alone.',
  },
]

export default function Story() {
  return (
    <section id="story" className="bg-alabaster">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Portrait */}
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-32">
              <figure className="relative inline-block">
                <span
                  aria-hidden="true"
                  className="absolute -top-4 -left-4 h-full w-full border border-teal/30"
                />
                <img
                  src={headshot}
                  alt="Shirley Russell"
                  width={418}
                  height={420}
                  loading="lazy"
                  decoding="async"
                  className="relative block w-full max-w-[380px] rounded-[2px] object-cover"
                />
                <figcaption className="mt-5 flex flex-col gap-1">
                  <span className="font-display text-xl font-medium text-ink">
                    {site.name}
                    <span className="font-normal italic text-slate">, {site.credentials}</span>
                  </span>
                  <span className="microtype text-slate">{site.licenses}</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <Eyebrow>The Story</Eyebrow>
              <h2 className="mt-7 font-display text-[clamp(2.25rem,4.2vw,3.6rem)] leading-[1.08] font-medium text-ink">
                Twenty years running Tahoe rentals.
                <br />
                <em className="font-normal italic text-teal">Then she started selling them.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-9 max-w-xl text-lg leading-relaxed text-charcoal">
                Most agents learn short-term rentals from a seminar. Shirley ran them. For more
                than thirty years she has lived and worked in the High Sierra, twenty of them at
                Tahoe Keys Resort as owner liaison, running the unglamorous machinery of vacation
                rentals: bookings, acquisitions, management logistics, and the trust of the owners
                behind every door.
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal">
                That operator&rsquo;s eye is now her edge as a top-producing realtor with Chase
                International. She knows which homes will book and which will sit, what a permit is
                worth, and what ownership actually costs, because she has managed all of it.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <blockquote className="relative mt-14 max-w-xl border-l-2 border-teal pl-8">
                <p className="font-display text-2xl leading-snug font-normal italic text-ink md:text-[1.7rem]">
                  {'“'}
                  {site.quote}
                  {'”'}
                </p>
                <cite className="microtype mt-5 block not-italic text-slate">
                  Shirley Russell
                </cite>
              </blockquote>
            </Reveal>

            {/* Timeline */}
            <Reveal delay={0.2}>
              <ol className="mt-16 max-w-xl">
                {TIMELINE.map((t) => (
                  <li
                    key={t.era}
                    className="grid gap-2 border-t border-linen py-7 md:grid-cols-[180px_1fr] md:gap-8"
                  >
                    <span className="microtype pt-1 text-teal">{t.era}</span>
                    <span className="text-[0.98rem] leading-relaxed text-slate">{t.text}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
