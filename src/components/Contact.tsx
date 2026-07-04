import { useState, type FormEvent } from 'react'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import { site } from '../data/site'

/* The form is intentionally backend-free for V1: submit composes a real
   mailto: draft to Shirley's actual address, so nothing is silently dropped. */
export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    const subject = encodeURIComponent(`Consultation request — ${get('name') || 'via website'}`)
    const body = encodeURIComponent(
      [
        `Name: ${get('name')}`,
        `Email: ${get('email')}`,
        `Phone: ${get('phone')}`,
        `Interested in: ${get('interest')}`,
        '',
        get('message'),
      ].join('\n'),
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="bg-sand">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Invitation + direct lines */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Schedule a Consultation</Eyebrow>
              <h2 className="mt-7 font-display text-[clamp(2.25rem,4.2vw,3.6rem)] leading-[1.08] font-medium text-ink">
                Begin with a<br />
                <em className="font-normal italic text-teal">conversation.</em>
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-charcoal">
                Tell Shirley what you are dreaming about: a family basecamp, an income property, or
                both. She will tell you what is realistic, what it could earn, and where to begin.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-12">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="microtype text-slate">Call or text</p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 inline-block font-display text-3xl font-medium text-ink transition-colors duration-300 hover:text-teal md:text-4xl"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="microtype text-slate">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-block font-display text-xl font-medium break-all text-ink transition-colors duration-300 hover:text-teal md:text-2xl"
                  >
                    {site.email}
                  </a>
                </div>
                <div className="border-t border-ink/10 pt-6">
                  <p className="microtype text-slate">Office</p>
                  <p className="mt-1 text-[0.98rem] text-charcoal">
                    {site.brokerage} · {site.office}
                  </p>
                  <p className="microtype mt-3 text-slate/80">Licensed {site.licenses}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <form
              onSubmit={onSubmit}
              className="border border-linen bg-alabaster p-8 shadow-[0_24px_80px_rgba(16,31,28,0.08)] md:p-12"
            >
              <div className="grid gap-9 md:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className="microtype block text-slate">
                    Name
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className="input-line mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="cf-email" className="microtype block text-slate">
                    Email
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="input-line mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="cf-phone" className="microtype block text-slate">
                    Phone
                  </label>
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Optional"
                    className="input-line mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="cf-interest" className="microtype block text-slate">
                    I&rsquo;m interested in
                  </label>
                  <select id="cf-interest" name="interest" className="input-line mt-2 cursor-pointer">
                    <option>Buying a vacation-rental home</option>
                    <option>Selling a property</option>
                    <option>Both</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="cf-message" className="microtype block text-slate">
                    Message
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    placeholder="Tell Shirley a little about what you have in mind"
                    className="input-line mt-2 resize-none"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-solid mt-12 w-full">
                Request Consultation
              </button>

              {sent && (
                <p role="status" className="mt-6 text-center text-[0.9rem] text-teal">
                  Your email draft to Shirley has opened. Prefer to talk now? Call or text{' '}
                  <a href={site.phoneHref} className="underline underline-offset-4">
                    {site.phoneDisplay}
                  </a>
                  .
                </p>
              )}

              <p className="mt-6 text-center text-[0.72rem] tracking-[0.06em] text-slate/70">
                Direct to srussell@chaseinternational.com. No lists, no spam.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
