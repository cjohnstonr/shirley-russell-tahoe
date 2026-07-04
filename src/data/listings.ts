/*
  Real listings — verbatim addresses, cities, prices, and specs from
  assets/assets_manifest.md §4 (active) and §5 (sold). NEVER invent a
  listing or a price.

  Round-2 imagery notes:
  - High-res photos from her own listings (assets/round2/) replace the low-res
    MLS thumbnails on every featured card.
  - photoCrop uses scale + transform-origin to push each photo's corner MLS
    watermark outside the card frame (director mandate: no watermarked pixels
    featured). origin-top-left crops right+bottom; origin-top-right crops
    left+bottom.
  - Wildwood (old photo carries the "LS2026" watermark, drab frame) and Barton
    Court (interior-only photo) are relegated to the ledgers per the same
    mandate — data retained, photos not featured.
  - "1200 Wildwood Avenue #44" appears twice on the live site (MLS re-list
    artifact) — deduped to one entry here.
  - Chamberlain Court is a land/lot listing (0 bed / 0 bath on source; round-2
    aerial confirms raw forested acreage) — labeled "Land / Lot", not blank.
*/

import cardVoightCanyon from '../assets/img/card_voight_canyon_hq.jpg'
import cardChamberlainLand from '../assets/img/card_chamberlain_land.jpg'
import cardKokanee from '../assets/img/card_kokanee_hq.jpg'
import cardNLakeBlvd from '../assets/img/card_n_lake_blvd.jpg'
import soldPonderosa from '../assets/img/sold_ponderosa.jpg'

export type Listing = {
  address: string
  locale: string
  price: number
  specs?: string
  photo?: string
  /** Tailwind transform classes that crop MLS watermarks out of the frame */
  photoCrop?: string
}

/* ── Active — featured with photography ── */
export const featuredActive: Listing[] = [
  {
    address: '2862 Voight Canyon Drive',
    locale: 'Genoa, NV',
    price: 1_097_000,
    specs: '4 Bed · 3 Full / 1 Partial Bath · 3,036 sqft',
    photo: cardVoightCanyon,
    photoCrop: 'scale-[1.12] origin-top-right',
  },
  {
    address: '121 Chamberlain Court',
    locale: 'Carson City, NV',
    price: 1_849_000,
    specs: 'Land / Lot',
    photo: cardChamberlainLand,
    photoCrop: 'scale-[1.14] origin-top-left',
  },
]

/* ── Active — additional availabilities (ledger) ── */
export const moreActive: Listing[] = [
  { address: '3237 Summit Camp, C31', locale: 'Carson City, NV', price: 675_000 },
  { address: '1200 Wildwood Avenue #44', locale: 'South Lake Tahoe, CA', price: 410_000 },
  { address: '15573 Glacier Way', locale: 'Truckee, CA', price: 399_000 },
  { address: '1662 Maiden Hair Court', locale: 'South Lake Tahoe, CA', price: 229_000 },
  { address: '210 Ninth Street', locale: 'Westwood, CA', price: 30_000 },
]

/* ── Sold — featured with photography ── */
export const featuredSold: Listing[] = [
  {
    address: '100 Ponderosa Drive',
    locale: 'Zephyr Cove, NV',
    price: 3_400_000,
    specs: '4 Bed · 3 Full / 2 Partial Bath · 5,444 sqft',
    photo: soldPonderosa,
    photoCrop: 'scale-[1.13] origin-top-left',
  },
  {
    address: '1961 Kokanee Way',
    locale: 'South Lake Tahoe, CA',
    price: 2_090_000,
    specs: '5 Bed · 3 Full Bath · 2,755 sqft',
    photo: cardKokanee,
    photoCrop: 'scale-[1.1] origin-top-left',
  },
  {
    address: '1877 North Lake Boulevard',
    locale: 'Tahoe City, CA',
    price: 1_610_000,
    specs: '3 Bed · 2.5 Bath · 2,028 sqft',
    photo: cardNLakeBlvd,
    photoCrop: 'scale-[1.05] origin-top',
  },
]

/* ── Sold — the record (ledger rows) ── */
export const moreSold: Listing[] = [
  { address: '337 Barton Court', locale: 'Stateline, NV', price: 2_125_000, specs: '4 Bed · 4 Full / 1 Partial Bath · 3,996 sqft' },
  { address: '1877 Normuk Street', locale: 'South Lake Tahoe, CA', price: 1_600_000, specs: '5 Bed · 4 Full Bath · 3,188 sqft' },
  { address: '4 Kent Court', locale: 'Zephyr Cove, NV', price: 1_400_000, specs: '3 Bed · 2 Full / 2 Partial Bath · 3,368 sqft' },
  { address: '539 Christie Drive', locale: 'South Lake Tahoe, CA', price: 1_190_000, specs: '3 Bed · 3 Full Bath · 1,612 sqft' },
  { address: '6491 Idlewood Road', locale: 'Tahoe Vista, CA', price: 1_180_000, specs: '3 Bed · 2.5 Bath · 2,539 sqft' },
  { address: '11467 Lausanne Way', locale: 'Truckee, CA', price: 1_150_000, specs: '3 Bed · 2 Bath · 2,340 sqft' },
  { address: '745 Chapel Lane', locale: 'Tahoe City, CA', price: 1_100_000, specs: '5 Bed · 3 Bath · 2,772 sqft' },
  { address: '2860 Voight Canyon', locale: 'Genoa, NV', price: 1_049_000, specs: '4 Bed · 2 Full / 1 Partial Bath · 3,207 sqft' },
  { address: '1468 Crystal Air Drive', locale: 'South Lake Tahoe, CA', price: 995_000, specs: '5 Bed · 3 Full Bath · 2,590 sqft' },
]

export const priceFmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

/* Derived, never fabricated: sum of the 12 real sold prices above.
   Floored (not rounded up) so the claim can never overstate. */
export const soldTotalLabel = (() => {
  const total = [...featuredSold, ...moreSold].reduce((sum, l) => sum + l.price, 0)
  return `$${(Math.floor(total / 100_000) / 10).toFixed(1)}M+`
})()
