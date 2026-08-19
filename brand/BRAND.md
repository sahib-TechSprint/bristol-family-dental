# Bristol Family Dental Center Brand v1.0

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

Lifestyle photography reads as one shoot: warm soft daylight, a seamless warm
backdrop with soft leaf shadows, subjects in navy and cobalt wardrobe, honest
joyful smiles. Clinical illustrations are blue tinted renders on deep navy so
they sit inside the palette instead of fighting it. Real staff photos are
enhanced only (resample, sharpen, color) and never altered.

## Accessibility floors

Everything ships against WCAG 2.1 AA. Muted ink text needs at least 60
percent opacity on sky and 65 percent on mist. All shipped pairs were
verified programmatically; the matrix is in `tokens.json`.

## Open questions for the client

1. Google currently shows 3.8 stars (38 reviews), lower than Yelp. Keep the
   Google badge on the homepage, or drop it until the rating recovers?
2. Recent reviews thank Dr. Jonathan Galvez, Leslie, and Lino, who are not on
   the published staff page. Confirm the current roster before print
   collateral uses team photography.
3. The team photos on file are small. A professional photo shoot in brand
   wardrobe (navy and cobalt) would let the team section lead the homepage.
4. Is there an official Facebook page URL to link from the Facebook review
   badge? It currently links to the Birdeye listing where the count is
   verifiable.
