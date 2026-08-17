# Bristol Family Dental Center

Marketing site for Bristol Family Dental Center, a bilingual family dental practice in Santa Ana, California. Designed and built by Carbon Quill Media.

Live site: https://bristol-family-dental.vercel.app

## Stack

Astro 5, Tailwind CSS 4, TypeScript (strict), and React islands for the pieces that need client state: the splash counter, the navbar menu, the masked card home page sections, and the booking form. Every page ships as static HTML; the one server endpoint is `POST /api/book`, which handles booking requests.

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`. The booking endpoint works out of the box: without a `RESEND_API_KEY` it logs requests to the console instead of sending email.

## Editing content

All practice content lives in typed modules under `src/content/`. Components contain no copy, so text changes never require touching markup.

| File | What it holds |
| --- | --- |
| `practice.ts` | Name, phone, fax, email, address, hours, map links, social profiles |
| `services.ts` | Every service, grouped, with descriptions and anchor ids |
| `team.ts` | Dr. Begino's bio and the team roster |
| `faq.ts` | The new patient FAQ |
| `home.ts` | Home page copy, section by section |
| `pages.ts` | About, new patients, insurance, contact, book, and 404 copy |
| `espanol.ts` | The Spanish essentials page |
| `seo.ts` | Per page titles and meta descriptions |
| `nav.ts` | Navigation labels |
| `bookForm.ts` | Booking form labels and messages |

## Environment variables

Copy `.env.example` to `.env` for local work. In production these are set in Vercel project settings.

| Variable | Purpose |
| --- | --- |
| `PUBLIC_SITE_URL` | Canonical URL for links, sitemap, and structured data |
| `RESEND_API_KEY` | Enables booking notification emails through Resend |
| `BOOKING_NOTIFY_EMAIL` | Inbox that receives booking requests |

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build (static output plus the booking function) |
| `npm run preview` | Preview the production build |
| `npm run check` | Type checking |
| `npm run generate:og` | Regenerate the Open Graph image and raster favicons |

## Deploying

The repo deploys on Vercel with the `@astrojs/vercel` adapter. Pushing to `main` triggers a production build. See `DEPLOY-LOG.md` for the launch record, environment details, and the checklist for pointing the practice domain at Vercel.

## Replacing placeholder assets

Two things ship as placeholders and should be swapped when the practice provides finals, keeping the same file names:

- `public/forms/new-patient-en.pdf` and `public/forms/new-patient-es.pdf` (registration forms)
- The five launch photos in `public/images/` (replace with photography of Dr. Begino, the team, and the office)
