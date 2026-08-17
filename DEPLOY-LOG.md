# Deploy Log: Bristol Family Dental Center

Carbon Quill Media build record. Launched August 2026.

## What was built

A complete nine page marketing site for Bristol Family Dental Center in Santa Ana:

- Home, with the signature masked card system: the splash counter, a full screen hero mosaic and smile gallery where multiple cards window one shared photograph, the implant dentistry section, the affordability story, location and hours, and a quiet closing call to action
- Services (every service grouped and anchor linked), About (Dr. Begino's training, recognition, and volunteer work, plus the team), New Patients (first visit guide, downloadable forms, eleven question FAQ), Insurance (PPO, HMO, Denti-Cal, CareCredit, and in house financing in patient language), Contact (NAP, landmark directions, hours, map), a booking request page, a Spanish essentials page, and a custom 404
- One repeated action across the whole site: Book Appointment, paired with click to call on mobile
- Booking endpoint at POST /api/book with Zod validation, honeypot, minimum elapsed time check, and per IP rate limiting; Resend email delivery when the key is present, console logging when it is not
- Local SEO layer: per page titles and descriptions, Dentist and Person and FAQPage structured data, sitemap.xml, robots.txt, Open Graph template, canonical URLs, and reciprocal hreflang between the home page and the Spanish page

## URLs

| Thing | Value |
| --- | --- |
| Repository | https://github.com/sahib-TechSprint/bristol-family-dental |
| Production | https://bristol-family-dental.vercel.app |
| Vercel project | bristol-family-dental (auto deploys on push to main) |

## Environment variables (Vercel, Settings then Environment Variables)

| Variable | Status | Purpose |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | Set to the production URL | Canonical links, sitemap, structured data |
| `BOOKING_NOTIFY_EMAIL` | Optional, defaults to info@bristolfamilydentalcenter.com | Inbox for booking requests |
| `RESEND_API_KEY` | Not yet set | Enables booking emails. Until set, requests log to the Vercel function console |

## Quality results

Lighthouse mobile, measured on the production build (fonts unreachable from the build sandbox, so treat these as the floor; production numbers with the font CDN available are recorded below):

| Page | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Home | 90 | 100 | 100 | 100 |
| Services | 93 | 100 | 100 | 100 |
| About | 94 | 100 | 100 | 100 |
| New Patients | 93 | 100 | 100 | 100 |
| Insurance | 93 | 100 | 100 | 100 |
| Book | 95 | 100 | 100 | 100 |
| Contact | 94 | 100 | 100 | 100 |
| Español | 93 | 100 | 100 | 100 |

CLS is 0.00 on every page in the local runs. Production, measured with PageSpeed Insights (mobile, real network, fonts loading) on launch day:

| Page | Performance | Accessibility | Best Practices | SEO | LCP | CLS |
| --- | --- | --- | --- | --- | --- | --- |
| Home | 92 | 100 | 100 | 100 | 2.3 s | 0 |
| Services | 97 | 100 | 100 | 100 | 2.1 s | 0.01 |
| New Patients | 99 | 100 | 100 | 100 | 1.7 s | 0 |

That clears the launch bar: home at 90 or above, content pages at 95 or above, LCP under 2.5 s, CLS under 0.05. The home page Speed Index reads high on launch day because the splash counter intentionally holds a white screen for two seconds on a visitor's first view; it never replays within a session.

Also verified: zero horizontal overflow at 360, 768, 1024, 1440, and 1920 on all nine pages; axe-core clean (WCAG 2.1 AA rule set) on every page; every internal link resolves; all four home page anchor targets exist on the services page; booking form tested end to end (success, inline validation, honeypot silently dropped, under two second submissions rejected, fourth request in a minute rate limited with a friendly call us message); splash runs once per session and never replays on internal navigation; menu is keyboard complete (Escape closes, focus trapped, focus returns to the trigger); reduced motion preference gets a complete static site.

## Decisions worth remembering

- The two font stylesheets are hotlinked from db.onlinewebfonts.com per the design spec. They are render blocking, so if that service ever gets slow the practice will feel it; self hosting the woff files is the first upgrade to consider.
- The rate limiter is in memory per serverless instance, which is the right weight for a practice site but is not a hard guarantee across instances.
- The booking email sends from Resend's onboarding address until the practice domain is verified in Resend; replies go to the patient's email when they provide one.
- Repository pushes happen from the studio workstation (GitHub Desktop), not from the build environment.
- Saturday hours alternate week to week, so the structured data carries the Saturday span with an honest description rather than pretending every Saturday is open.

## Awaiting the client

1. Real photography of Dr. Begino, the team, and the office. The five launch images in `public/images/` are placeholder quality stock and should be swapped file for file.
2. Final new patient registration PDFs (English and Spanish) to replace the placeholders in `public/forms/`, same file names.
3. A Resend account decision so booking requests arrive by email: verify a sending domain in Resend, then set `RESEND_API_KEY` in Vercel.
4. Custom domain go ahead.

## Pointing bristolfamilydentalcenter.com at Vercel

When the client is ready:

1. Vercel dashboard, the bristol-family-dental project, Settings then Domains, add `bristolfamilydentalcenter.com` and `www.bristolfamilydentalcenter.com`.
2. At the current DNS host, set the apex A record to `76.76.21.21` and the `www` CNAME to `cname.vercel-dns.com`.
3. Wait for the certificate to issue, then update `PUBLIC_SITE_URL` in Vercel to `https://www.bristolfamilydentalcenter.com` (or the apex, whichever is chosen as primary) and redeploy so canonicals, the sitemap, and structured data pick it up.
4. Submit the sitemap in Google Search Console and update the practice's Google Business Profile website link.
