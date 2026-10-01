# Bristol Family Dental Center Brand v1.2

Working notes behind the brand system. The client facing walkthrough lives in
`bristol-brand-guide.pdf`; the machine readable values live in `tokens.css`
and `tokens.json`. The site itself compiles against the `@theme` block in
`src/styles/global.css`, which these files mirror.

## Why blue

The practice sits on Bristol Street and serves working families in Santa Ana.
The brand needed to feel like the practice: honest, calm, and established.
Deep navy (#0E2A47) carries trust and steadiness without the coldness of
black. Cobalt (#1D5FC2) is reserved exclusively for things a patient can
press: buttons, links, focus rings, and rating stars. That single rule keeps
every page scannable, because color means action. The light surfaces (sky,
mist, paper) keep the site bright and airy so photography and type do the
work.

## The wordmark

The wordmark is typographic: BRISTOL FAMILY / DENTAL CENTER stacked in Open
Sauce One Bold, uppercase, tight leading, with the tagline YOUR CARE IS OUR
CONCERN letterspaced beneath. It renders in ink on light surfaces and white
on navy. The tooth mark from the favicon can stand alone at small sizes.

## Type

One family, Open Sauce One, in two weights. A strict seven step scale
(display, h2, h3, eyebrow, body-lg, body, small) is defined in
`src/styles/global.css`; components never invent sizes. Two display moments
(the home hero and the gallery card) sit above the scale by design.

## Imagery

The site carries no photography of people or premises. Until the practice
supplies its own photographs with permission to publish, imagery is limited to
clinical renders: teeth, veneers, crowns, bridges, dentures, aligners, braces,
retainers, toothbrushes, teaching models, and instruments, rendered in cool
white and steel on deep navy with a soft floor reflection, so they sit inside
the palette instead of fighting it. Renders of dental implants are set aside
while the office does not offer them. The home page opens on the practice's
full name beside one render (three toothbrushes in three sizes, the family in
one picture without a face in it); the type never waits for the picture.
Interior or exterior views of a clinic that were generated rather than
photographed are not used anywhere, because a room presented as the practice
must be the practice. Every render ships as webp with metadata stripped and
is checked for watermarks before it is committed. `brand/renders.md` records
every render in use with its prompt and generation job id.

Text placed over a render sits on a navy glass panel (80 to 85 percent) or a
white card, never directly on the picture, so contrast never depends on what
is behind it.

## Accessibility floors

Everything ships against WCAG 2.1 AA. Muted ink text needs at least 60
percent opacity on sky and 65 percent on mist. All shipped pairs were
verified programmatically; the matrix is in `tokens.json`.

## Open questions for the client

1. Google currently shows 3.8 stars (38 reviews), lower than Yelp. Keep the
   Google badge on the homepage, or drop it until the rating recovers?
2. The site names one dentist, Pablo Lazaro, D.D.S., and no other team
   members, by the office's request in October 2026. Confirm when the roster
   should be published again.
3. When the practice is ready, a professional shoot of the real office in
   the brand's bright light, with written permission from anyone who
   appears, would let true photography join the renders.
4. Is there an official Facebook page URL to link from the Facebook review
   badge? It currently links to the Birdeye listing where the count is
   verifiable.
