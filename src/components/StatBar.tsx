import Reveal from './Reveal'

/* Credibility strip directly under the hero.
   Facts per BRIEF.md: 20 yrs VR ops, 4 STR closings this month,
   CA + NV licensed, top-producing Chase International realtor. */
const STATS = [
  { value: '20+', label: 'Years running Tahoe vacation rentals' },
  { value: '4', label: 'Short-term-rental closings this month' },
  { value: 'CA + NV', label: 'Licensed on both sides of the lake' },
  { value: 'Top Producer', label: 'Chase International' },
]

export default function StatBar() {
  return (
    <section className="border-b border-linen bg-ivory" aria-label="Credentials at a glance">
      {/* gap-px over a linen base = crisp hairline dividers at every breakpoint */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-linen lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="bg-ivory px-6 py-10 md:px-10 md:py-14">
            <div className="font-display text-[2rem] leading-none font-medium text-ink md:text-[2.6rem]">
              {s.value}
            </div>
            <div className="mt-3 text-[10.5px] font-semibold tracking-[0.2em] uppercase text-slate">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
