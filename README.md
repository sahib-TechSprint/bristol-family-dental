# Bristol Family Dental Center

Marketing site for Bristol Family Dental Center, a bilingual family dental practice in Santa Ana, California. Designed and built by Carbon Quill Media.

Production: https://bristol-family-dental.vercel.app (moves to the practice domain at launch)

## What this site is

A fully static, bilingual (English and Spanish) marketing site with no forms, no accounts, no analytics, and no third party scripts. Every primary action is a phone call to the front desk. That design is deliberate: the practice is a California healthcare provider, and a site that collects nothing has nothing to protect. Online intake or scheduling is a separate, HIPAA-scoped project if the practice ever wants it.

## Stack

Astro 7, Tailwind CSS 4, TypeScript (strict), and two small React islands (the navbar menu and the masked card cosmetic section on the home page). Fonts are self hosted (Open Sauce One, SIL Open Font License, see `public/fonts/OFL.txt`). Hosting is Vercel, deploying from the `main` branch of this repository; production routing and security headers live in `vercel.json`.

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`. Node 22 or newer (Astro 7 requires it).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run check` | Type checking and Astro diagnostics |
| `npm run generate:og` | Regenerate the Open Graph image and raster favicons |

## Where things live

All practice content lives in typed modules under `src/content/` (English) and `src/i18n/` (Spanish). Components contain no copy, so text changes never require touching markup.

| File | What it holds |
| --- | --- |
| `src/content/practice.ts` | Name, phone, fax, email, address, hours, map links, social profiles. Structured data reads from here. |
| `src/content/nav.ts` | Navigation labels and the one primary action (the call button). |
| `src/content/home.ts` | Home page copy, section by section. |
| `src/content/services.ts` | Every service, grouped, with anchor ids. |
| `src/content/team.ts` | The dentist's name, role, license line, and About page copy. No other team members are named. |
| `src/content/faq.ts` | The new patient FAQ. |
| `src/content/reviews.ts` | Review platform badges with the date they were verified, plus the home page FAQ. |
| `src/content/pages.ts` | About, new patients, insurance, contact, and 404 copy. |
| `src/content/legal.ts` | Privacy policy, terms of use, and accessibility statement. |
| `src/content/seo.ts` | Per page titles and meta descriptions. |
| `src/i18n/es.ts` | Everything above in Spanish, shape for shape. |
| `src/i18n/legal-es.ts` | The legal pages in Spanish. |
| `public/images/` | Clinical renders (webp). No photography of people or premises. |
| `public/forms/` | The practice's real new patient forms (PDF, English and Spanish). Replace files, keep names. |
| `brand/` | Brand guide PDF, tokens, and working notes. |

## Working on the site

Read `AGENTS.md` before making changes. It holds the rules that keep the site compliant and on brand, the quality gates every change has to pass, and the deploy procedure. `CLAUDE.md` points there too.

Short version: edit content in the files above, run `npm run check` and `npm run build`, open the preview in both languages, then commit on `main` and push. Vercel builds and deploys in about a minute.

## Environment variables

One variable, set in Vercel (Settings, Environment Variables) and in `.env` for local work if needed:

| Variable | Purpose |
| --- | --- |
| `PUBLIC_SITE_URL` | Canonical URL for links, sitemap, hreflang, and structured data. Change it when the practice domain goes live. |

## Records

- `DEPLOY-LOG.md` is the build record: what shipped in each revision and the QC results.
- `LAUNCH-GUIDE.md` is the path from approved preview to the practice domain.
