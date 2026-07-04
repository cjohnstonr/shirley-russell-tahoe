import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import { heroReview, reviewCount, reviews } from '../data/reviews'
import { site } from '../data/site'

function Stars({ className = '' }: { className?: string }) {
  return (
    <span
      className={`text-[0.7rem] tracking-[0.32em] text-teal ${className}`}
      role="img"
      aria-label="Rated 5 out of 5 stars"
    >
      ★★★★★
    </span>
  )
}

function Attribution({ name, tone = 'light' }: { name: string; tone?: 'light' | 'dark' }) {
  return (
    <span className="flex flex-col gap-1">
      <span className={`microtype ${tone === 'light' ? 'text-slate' : 'text-mist'}`}>{name}</span>
      <span className="text-[10px] tracking-[0.14em] text-slate/60">via Google</span>
    </span>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <Reveal className="max-w-2xl">
          <Eyebrow>In Their Words</Eyebrow>
          <h2 className="mt-7 font-display text-[clamp(2.25rem,4.2vw,3.6rem)] leading-[1.08] font-medium text-ink">
            Five stars,
            <em className="font-normal italic text-teal"> over and over.</em>
          </h2>
        </Reveal>

        {/* Lead testimonial + credibility panel (fills the former right-half void) */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <Reveal delay={0.08} className="lg:col-span-7">
            <figure className="relative h-full">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -left-4 font-display text-[11rem] leading-none text-teal/10 select-none md:-left-8"
              >
                {'“'}
              </span>
              <blockquote className="relative">
                <p className="font-display text-[clamp(1.5rem,2.6vw,2.05rem)] leading-[1.4] font-normal text-charcoal">
                  {heroReview.text}
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-5">
                <Stars />
                <span className="h-px w-8 bg-linen" aria-hidden="true" />
                <Attribution name={heroReview.name} />
              </figcaption>
            </figure>
          </Reveal>

          {/* Credibility panel — per creative-director option B */}
          <Reveal delay={0.16} className="lg:col-span-4 lg:col-start-9">
            {/* Integrity rule: a COUNT of harvested reviews is provable; a precise
                aggregate star rating is not — never assert one here */}
            <aside className="flex h-full flex-col justify-center border border-linen bg-alabaster p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-6xl leading-none font-medium text-ink">
                  {reviewCount}
                </span>
                <Stars className="translate-y-[-4px]" />
              </div>
              <p className="microtype mt-4 text-slate">Five-Star Client Reviews</p>
              <p className="mt-1 text-[10px] tracking-[0.14em] text-slate/60">via Google</p>
              <span className="my-8 block h-px w-full bg-linen" aria-hidden="true" />
              <p className="font-display text-xl leading-snug font-normal italic text-ink">
                Four short-term-rental closings this month.
              </p>
              <p className="microtype mt-4 text-slate">Top Producer · Chase International</p>
            </aside>
          </Reveal>
        </div>

        {/* Editorial grid — one wide serif feature card + ragged natural heights,
            so it reads bespoke rather than a uniform testimonial grid */}
        <div className="mt-20 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={Math.min(i * 0.06, 0.3)}
              className={r.wide ? 'md:col-span-2' : ''}
            >
              <figure
                className={`border border-linen bg-alabaster transition-shadow duration-500 hover:shadow-[0_12px_40px_rgba(16,31,28,0.07)] ${
                  r.wide ? 'p-10 md:p-12' : r.emphasis ? 'p-9 md:p-10' : 'p-8'
                }`}
              >
                <Stars />
                <blockquote className="mt-5">
                  <p
                    className={
                      r.emphasis
                        ? `font-display leading-normal font-normal italic text-ink ${
                            r.wide ? 'text-[1.25rem] md:text-[1.4rem]' : 'text-[1.22rem]'
                          }`
                        : 'text-[0.96rem] leading-relaxed text-charcoal'
                    }
                  >
                    {'“'}
                    {r.text}
                    {'”'}
                  </p>
                </blockquote>
                <figcaption className="mt-6">
                  <Attribution name={r.name} />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Source strip */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-linen pt-10 md:flex-row md:items-center">
            <p className="microtype text-slate">Reviews shown verbatim, via Google</p>
            <p className="microtype text-slate">
              More reviews on{' '}
              <a
                href={site.socials.find((s) => s.label === 'Zillow')!.href}
                target="_blank"
                rel="noreferrer"
                className="text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:decoration-teal"
              >
                Zillow
              </a>{' '}
              and{' '}
              <a
                href={site.socials.find((s) => s.label === 'Yelp')!.href}
                target="_blank"
                rel="noreferrer"
                className="text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:decoration-teal"
              >
                Yelp
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
