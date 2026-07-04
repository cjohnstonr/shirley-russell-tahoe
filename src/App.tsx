import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import StatBar from './components/StatBar'
import Story from './components/Story'
import Owners from './components/Owners'
import Reviews from './components/Reviews'
import Properties from './components/Properties'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    /* reducedMotion="user" makes every framer animation honor prefers-reduced-motion */
    <MotionConfig reducedMotion="user">
      <Nav />
      <main id="main">
        <Hero />
        <StatBar />
        <Story />
        <Owners />

        {/*
          ── V2 INSERTION POINT · <ManagementPartner /> ──────────────────────
          The management-partner band drops in HERE (after the owner value
          story, before social proof). Dark-section rhythm alternates cleanly:
          Owners(dark) → Partner(light) → Reviews(ivory). Do NOT render in V1.
        */}

        <Reviews />
        <Properties />

        {/*
          ── V2 INSERTION POINT · <InsightsJournal /> ────────────────────────
          Blog / Insights / Resources (SEO + AI-discoverability play) slots in
          HERE, between the property record and the consultation close. Do NOT
          render in V1.
        */}

        <Contact />
      </main>
      <Footer />
      <div className="grain" aria-hidden="true" />
    </MotionConfig>
  )
}
