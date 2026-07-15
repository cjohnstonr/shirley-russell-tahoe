/*
  Round 3 client ask: a Q&A segment from her 14 real questions.

  Discipline (per BRIEF + Round 3 guardrail): where a genuinely accurate,
  evergreen answer exists, it is written in her operator/owner voice. Where an
  honest answer needs a specific fact that changes by jurisdiction or property
  (permit cost, transferability, exact income by bedroom count), the item is a
  `ask` item: an honest framing plus a "talk to Shirley" route, NOT a
  fabricated figure. Nothing here asserts a price, permit rule, or income
  number she would have to correct.
*/

export type Faq =
  | { q: string; a: string; ask?: never }
  | { q: string; ask: string; a?: never }

export type FaqGroup = {
  label: string
  items: Faq[]
}

export const faqGroups: FaqGroup[] = [
  {
    label: 'The Investment Case',
    items: [
      {
        q: 'Why is Lake Tahoe a prime area for short-term rental investment property?',
        a: 'Tahoe is a true four-season destination. Skiers and snow-seekers fill the winter, the lake and the trails carry the summer, and the shoulder seasons stay quiet and beautiful. That rare year-round demand, around a protected basin with limited housing and easy reach from the Bay Area and Reno, is what makes it one of the most resilient rental markets in the West.',
      },
      {
        q: 'What makes a property profitable and income-producing in Lake Tahoe?',
        a: 'The same things Shirley weighed for twenty years as an operator: location relative to the slopes and the water, a layout that sleeps guests comfortably, genuine four-season appeal, and above all whether it can be permitted for short-term rental. A beautiful home in the wrong zone cannot earn. An ordinary one in the right zone can. She reads a listing for its income the way she reads it for its views.',
      },
      {
        q: 'What is the most sought-after amenity in a short-term rental?',
        a: 'Guests book for the experience. A hot tub after a ski day, real proximity to the lake or the lifts, enough beds and baths for two families to travel together, dependable parking in the snow, and fast wifi for the ones who stay a week. The homes that check those boxes tend to stay booked.',
      },
      {
        q: 'How does income compare for a 1-bedroom versus a 3-bedroom?',
        ask: 'More bedrooms usually means a higher nightly rate and larger groups, but also more to furnish, clean, and manage, and the right answer depends entirely on the specific home and its permit. Rather than quote a number that will not fit your property, Shirley will run the real comparison on the homes you are weighing.',
      },
    ],
  },
  {
    label: 'Permits & Management',
    items: [
      {
        q: 'How do you apply for a short-term rental permit?',
        a: 'Every jurisdiction around the lake runs its own short-term-rental program. The City of South Lake Tahoe, El Dorado County, Douglas County, and Washoe County each have their own application, rules, and caps, and they change. It always starts with knowing which one your address falls under. Shirley steers you toward properties where a permit is realistic, then walks you through the current steps for that exact location.',
      },
      {
        q: 'What does a short-term rental permit cost?',
        ask: 'Permit fees vary by jurisdiction and are revised from time to time, so any figure printed here would be stale by the time you read it. Shirley will get you the current cost for the exact area you are considering.',
      },
      {
        q: 'Is a short-term rental permit transferable?',
        ask: 'Whether a permit carries over to a new owner, or has to be re-applied for, depends on the jurisdiction, and it is one of the most important things to settle before you buy. Shirley will confirm exactly how it works for the property you are looking at.',
      },
      {
        q: 'Is a property manager required?',
        a: 'Not automatically. Plenty of owners self-manage. That said, requirements vary by area, and running a short-term rental well is a real job: guest messages at all hours, turnovers between stays, maintenance, and staying inside the rules. Whether you need a manager is a separate question from whether you would benefit from one.',
      },
      {
        q: 'Why should you get a property manager?',
        a: 'A good manager protects both the guest experience and the asset. They handle bookings and reviews, coordinate cleaning and repairs, answer when something goes wrong at eleven at night, and keep the home compliant and cared for, which is what keeps it earning. For owners who do not live at the lake, it is often the difference between an investment and a second job.',
      },
    ],
  },
  {
    label: 'Life at the Lake',
    items: [
      {
        q: 'What is there to do in Lake Tahoe?',
        a: 'In winter, world-class skiing and snowboarding, plus snowshoeing, sledding, and the après by the fire. In summer, the lake itself: beaches, boating, paddleboarding, and kayaking, alongside hiking, biking, and golf. Year-round there is the dining, the Nevada-side entertainment, and some of the finest sunsets in the country. It is why guests come back.',
      },
      {
        q: 'What ski resorts are in Lake Tahoe?',
        a: 'The basin is ringed with them. Heavenly, Palisades Tahoe, Northstar, Kirkwood, Sierra-at-Tahoe, Mt. Rose, Diamond Peak, and Homewood are among the names guests know, from big-mountain terrain to family hills, most within a short drive of the shore.',
      },
      {
        q: 'Is there golf, 9-hole or 18-hole?',
        a: 'Both. The basin runs from championship 18-hole layouts, with Edgewood Tahoe right on the south shore as the marquee name, to relaxed mountain and 9-hole rounds around the lake. Plenty of options whether you play for the scorecard or the scenery.',
      },
      {
        q: 'What is the hiking like around the lake?',
        a: 'Endless. The Tahoe Rim Trail rings the entire basin, and from it branch trailheads for every level: gentle lakeside walks, the alpine lakes of Desolation Wilderness, and summit climbs like Mt. Tallac for the ambitious. Many of the best are minutes from the front door of the right home.',
      },
      {
        q: 'What about biking Lake Tahoe?',
        a: 'Paved shoreline paths for an easy cruise with the family, and serious mountain biking when you want it. The Flume Trail above the east shore is a Tahoe rite of passage, and resorts like Northstar run lift-served bike parks through the summer. Two very different rides, both here.',
      },
    ],
  },
]
