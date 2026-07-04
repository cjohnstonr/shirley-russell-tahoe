/*
  Verbatim client reviews — pulled from the live testimonial carousel on
  shirleyrussellrealtor.com (see assets/assets_manifest.md §3), which renders
  Google review data. NEVER invent or edit a review.

  Round 2: the featured quote is Sherwin Doladoh — market/area/advisor voice
  ("knows the housing market and the area... trusted real estate advisor"),
  on-thesis for the owner/investor positioning. The previous featured quote
  (Kamalakar, buyer-voiced) moves into the grid with serif emphasis.
*/

export type Review = {
  name: string
  text: string
  /** Editorial type variance: emphasized cards render in serif italic */
  emphasis?: boolean
  /** Editorial grid variance: wide cards span two columns */
  wide?: boolean
}

/* Count of unique client reviews harvested from her site's Google-review
   carousel (assets_manifest.md §3: 57 DOM nodes deduped to 28 by name+text;
   round-3 harvest verification confirmed all as five-star testimonials).
   A COUNT is provable; a precise aggregate star rating (e.g. "5.0") is not,
   so the credibility panel must never assert one. */
export const reviewCount = 28

export const heroReview: Review = {
  name: 'Sherwin Doladoh',
  text: 'Shirley is really helpful and patient with the whole home buying process. She really knows the housing market and the area (Lake Tahoe and surrounding cities). A trusted real estate advisor!',
}

export const reviews: Review[] = [
  {
    name: 'Kamalakar Pegadaraju',
    text: 'Working with Shirley was an absolute pleasure from start to finish. Her compassion, reliability, and deep expertise made the home-buying process feel seamless and stress-free. As a local Lake Tahoe realtor, her firsthand knowledge of the area gave us a true advantage in finding the right home.',
    emphasis: true,
    wide: true,
  },
  {
    name: 'Yan Monica Walls',
    text: 'Shirley made the whole process easy. She did the ground work so we can make informed decisions throughout the whole process. Highly recommend her for Lake Tahoe area real estate transactions.',
  },
  {
    name: 'Robert J Anderson',
    text: 'Shirley is very professional, efficient, detailed, knowledgeable, hard working and kind. We would highly recommend her to anyone interested in buying or selling a home.',
  },
  {
    name: 'Angela Gladden',
    text: 'Shirley was great to work with. She found us our dream cabin and made everything go smoothly. Very knowledgeable of the Tahoe area.',
    emphasis: true,
  },
  {
    name: 'Tamara McLevis',
    text: 'Shirley Russell is a highly attentive, responsive, and diligent real estate agent. She embodies the essence of professionalism!',
  },
  {
    name: 'Robert Fanning',
    text: 'Shirley has been great to work with and is very thoughtful. Shirley is very helpful with providing the most accurate information regarding the home and finding the right home for you.',
  },
  {
    name: 'Shamus McNutt',
    text: 'Shirley has been incredibly responsive and professional! I would HIGHLY recommend her to anyone looking to buy a house in Lake Tahoe!',
  },
  {
    name: 'Dorene Russell',
    text: 'I have known Shirley for many years and I know she goes the extra mile to make sure her clients are taken care of. She works hard and is very knowledgeable.',
  },
]
