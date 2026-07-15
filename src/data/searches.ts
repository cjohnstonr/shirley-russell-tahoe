/*
  Shirley's five real RealScout saved searches (Round 3 client ask).
  URLs are client-specific tracking links, verbatim from her 2026-07-07 email,
  do NOT alter. Descriptors are deliberately NEUTRAL and evergreen: they name
  the places the search covers without asserting a market/price/tax claim we
  can't stand behind (per the no-fabrication rule).
*/

export type AreaSearch = {
  region: string
  name: string
  blurb: string
  href: string
}

export const areaSearches: AreaSearch[] = [
  {
    region: 'California · South Shore',
    name: 'South Lake Tahoe',
    blurb: 'The California south shore, the lake’s year-round heart.',
    href: 'https://shirleyrussell.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yNDQzMg==',
  },
  {
    region: 'Nevada · Short-Term Rental',
    name: 'Summit Village',
    blurb: 'A Nevada-side search focused on short-term-rental homes.',
    href: 'https://shirleyrussell.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yNDQzMw==',
  },
  {
    region: 'California · North Shore',
    name: 'The North Shore',
    blurb: 'Kings Beach, Tahoe City, Tahoe Vista & Carnelian Bay.',
    href: 'https://shirleyrussell.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yNDQzNA==',
  },
  {
    region: 'Nevada · North Shore',
    name: 'Incline Village',
    blurb: 'North Shore living on the Nevada side of the lake.',
    href: 'https://shirleyrussell.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yNDQzNQ==',
  },
]

/* The curated pick: distinct from the geographic searches, refreshed weekly. */
export const pickOfTheWeek = {
  label: 'Property Pick of the Week',
  blurb: 'Shirley’s hand-picked Tahoe listing, refreshed each week.',
  href: 'https://shirleyrussell.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yNDQzNg==',
}
