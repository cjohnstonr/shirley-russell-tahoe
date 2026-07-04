import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import {
  featuredActive,
  featuredSold,
  moreActive,
  moreSold,
  priceFmt,
  soldTotalLabel,
  type Listing,
} from '../data/listings'

function PhotoCard({
  listing,
  status,
  aspect = 'aspect-[4/3]',
}: {
  listing: Listing
  status: 'active' | 'sold'
  aspect?: string
}) {
  return (
    <article className="group">
      <div className={`relative overflow-hidden bg-sand ${aspect}`}>
        {/* Hover zoom lives on the wrapper so it stacks with the static
            watermark-crop transform on the img itself */}
        <div className="h-full w-full transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
          <img
            src={listing.photo}
            alt={`${listing.address}, ${listing.locale}`}
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-cover ${listing.photoCrop ?? ''}`}
          />
        </div>
        <span
          className={`microtype absolute top-4 left-4 rounded-[2px] px-3 py-1.5 ${
            status === 'active' ? 'bg-alabaster/95 text-teal' : 'bg-pine/95 text-ivory'
          }`}
        >
          {status === 'active' ? 'Active' : 'Sold'}
        </span>
      </div>
      <div className="flex items-baseline justify-between gap-4 pt-6">
        <h3 className="font-display text-[1.35rem] leading-tight font-medium text-ink">
          {listing.address}
        </h3>
        <span className="shrink-0 font-display text-[1.35rem] font-medium text-teal">
          {priceFmt(listing.price)}
        </span>
      </div>
      <p className="microtype mt-2 text-slate">
        {listing.locale}
        <span className="normal-case tracking-normal">
          {' '}
          · {listing.specs ?? 'Contact for details'}
        </span>
      </p>
    </article>
  )
}

function Ledger({ rows, label }: { rows: Listing[]; label: string }) {
  return (
    <div>
      <p className="microtype text-slate">{label}</p>
      <ul className="mt-5 border-t border-linen">
        {rows.map((l) => (
          <li
            key={l.address}
            className="grid grid-cols-1 gap-1 border-b border-linen py-5 transition-colors duration-300 hover:bg-sand/40 sm:grid-cols-[1.4fr_1fr_auto] sm:items-baseline sm:gap-6"
          >
            <span className="font-display text-lg font-medium text-ink">{l.address}</span>
            <span className="text-[0.8rem] tracking-[0.08em] text-slate uppercase">{l.locale}</span>
            <span className="font-display text-lg font-medium text-charcoal sm:text-right">
              {priceFmt(l.price)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Properties() {
  const [leadActive, secondActive] = featuredActive
  return (
    <section id="properties" className="bg-alabaster">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        {/* ── Active ── */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <Eyebrow>Featured Properties</Eyebrow>
            <h2 className="mt-7 font-display text-[clamp(2.25rem,4.2vw,3.6rem)] leading-[1.08] font-medium text-ink">
              Currently
              <em className="font-normal italic text-teal"> represented.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-slate lg:text-right">
              A selection of Shirley&rsquo;s active listings across the Tahoe basin, Carson Valley,
              and the Nevada side.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric editorial pair — the Sierra aerial leads at scale */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <PhotoCard listing={leadActive} status="active" aspect="aspect-[3/2]" />
          </Reveal>
          <Reveal delay={0.09} className="lg:col-span-5">
            <PhotoCard listing={secondActive} status="active" />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16">
          <Ledger rows={moreActive} label="Additional availabilities" />
        </Reveal>

        {/* ── Sold ── */}
        <div className="mt-32 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <Eyebrow>The Record</Eyebrow>
            <h2 className="mt-7 font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.08] font-medium text-ink">
              Recently <em className="font-normal italic text-teal">sold.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="lg:text-right">
              <div className="font-display text-4xl font-medium text-ink md:text-[2.75rem]">
                {soldTotalLabel}
              </div>
              <div className="microtype mt-2 text-slate">Across the closed sales shown here</div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {featuredSold.map((l, i) => (
            <Reveal key={l.address} delay={i * 0.09}>
              <PhotoCard listing={l} status="sold" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <Ledger rows={moreSold} label="And the rest of the record" />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 text-[0.72rem] leading-relaxed tracking-[0.04em] text-slate/80">
            Listing and sold data as shown on shirleyrussellrealtor.com. Sold data: IDX - South
            Tahoe MLS, Tahoe MLS, Northern Nevada Regional MLS.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
