import { site } from '../data/site'

const NAV = [
  { label: 'The Story', href: '#story' },
  { label: 'For Owners', href: '#owners' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Properties', href: '#properties' },
  { label: 'Explore', href: '#explore' },
  { label: 'Q&A', href: '#questions' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-pine text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand lockup */}
          <div className="lg:col-span-6">
            <p className="font-display text-4xl font-medium text-ivory md:text-5xl">
              Shirley Russell
              <span className="font-normal italic text-seafoam">.</span>
            </p>
            <p className="microtype mt-5 max-w-md !leading-loose text-mist">{site.roleLine}</p>
            <p className="microtype mt-3 text-seafoam/80">{site.credentials}</p>
            <a
              href={site.phoneHref}
              className="mt-8 inline-block font-display text-2xl font-medium text-ivory transition-colors duration-300 hover:text-seafoam"
            >
              {site.phoneDisplay}
            </a>
          </div>

          {/* Explore */}
          <nav className="lg:col-span-3" aria-label="Footer">
            <p className="microtype text-seafoam/70">Explore</p>
            <ul className="mt-6 flex flex-col gap-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.95rem] text-ivory/80 transition-colors duration-300 hover:text-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <div className="lg:col-span-3">
            <p className="microtype text-seafoam/70">Elsewhere</p>
            <ul className="mt-6 flex flex-col gap-3">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.95rem] text-ivory/80 transition-colors duration-300 hover:text-ivory"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-20 border-t border-ivory/12 pt-8">
          <div className="flex flex-col gap-2 text-[0.72rem] leading-relaxed tracking-[0.04em] text-mist/80">
            <p>
              Shirley Russell, Realtor · {site.licenses} · {site.brokerageLicenses}
            </p>
            <p>{site.mlsLine}</p>
            <p>© 2026 Shirley Russell. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
