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

## Final draft revision, August 19, 2026

Second production release: the launch approval draft. Eight commits, shipped to main and auto deployed by Vercel.

### What changed

- Hero structure: the three feature bars now sit flush inside one rounded container, so the bars and the hero card read as one continuous photograph. Verified seamless at 360, 768, 1440, 1568x690, and 1920.
- All lifestyle imagery regenerated as one warm studio shoot: hero and gallery subjects in navy and cobalt wardrobe, a tall patient portrait, and two blue tinted clinical implant renders. Native 2K, installed as optimized webp (96 to 172 KB each).
- Bristol blue rebrand from a single token block: navy #0E2A47 surfaces, cobalt #1D5FC2 reserved for interactive elements only, cobalt deep #164A99 hover, sky #EAF1FA and mist #D7E3F4 surfaces, paper #FBFAF7 page, ink #10161F text. Splash, navbar, forms, 404, favicons, and the Open Graph image all migrated. Contrast verified programmatically; muted ink floors are 60 percent on sky and 65 percent on mist.
- Real team on the site: enhanced originals from the practice (resample, sharpen, color only; faces never altered). New homepage team section, About page portraits and group photo, real names in alt text.
- Trust layer on the homepage: verified review badges, four verbatim patient quotes, and a five question booking FAQ with matching FAQPage structured data.
- Spanish page parity: team section and review badges in Spanish, including the one genuine Spanish quote found.
- Brand package versioned in brand/: client presentable guide PDF, tokens.css, tokens.json, BRAND.md.

### Review data, verified live on August 19, 2026

| Platform | Rating | Count | Source |
| --- | --- | --- | --- |
| Yelp | 4.0 | 51 reviews | yelp.com listing, read directly |
| Google | 3.8 | 38 reviews | Google Maps listing, read directly |
| Facebook | (recommends) | 29 reviews | Birdeye aggregator listing |

Note: Google now sits at 3.8, below the roughly 4.1 expected. The badge shows the honest live number. If the manager prefers to hold the Google badge until the rating recovers, removing it is a one line change in `src/content/reviews.ts`.

**Review excerpts pending manager sign off before public launch** (all verbatim, five star or recommended):

1. "I didn't feel pressured to get a bunch of unnecessary work done." (Krystian, Google)
2. "All the staff are outstanding and they truly care" (Rachael F., Yelp)
3. "Roxana, was incredibly helpful and provided me with a wealth of information" (Diaz Family, Google)
4. "Atención excelente tanto el proceso de limpieza y personal" (Connie, Facebook via Birdeye)

No Spanish language review was found on the first pages of Yelp or Google at build time; the Spanish quote above is from Facebook via Birdeye.

### Quality results for this revision

Local Lighthouse mobile on the production build (font CDN unreachable from the build sandbox, so these are the floor; v1 production measurements ran 2 to 7 points higher than local):

| Page | Performance | Accessibility | LCP | CLS |
| --- | --- | --- | --- | --- |
| Home | 90 | 100 | 2.9 s (local throttle) | 0 |
| Services | 94 | 100 | 2.8 s | 0 |
| Book | 95 | 100 | 2.7 s | 0 |
| About | 94 | 100 | 2.8 s | 0 |
| New Patients | 94 | 100 | 2.7 s | 0 |
| Espanol | 93 | 100 | 2.9 s | 0 |

PageSpeed Insights was quota limited on deploy day; re run it at pagespeed.web.dev against the production URL for the public numbers. Also verified this pass: axe WCAG 2.1 AA clean on all nine pages at five widths, zero horizontal overflow, JSON-LD parses (Dentist, Person, two FAQPage), every internal link and anchor resolves, booking endpoint end to end (valid 200 with email fallback log, too fast 400, honeypot quiet 200, rate limit 429), splash and menu and reduced motion behaviors pass, live production hero screenshot taken after deploy.

### Client items before public launch

1. Sign off on the four review excerpts above, and decide on the Google badge at 3.8.
2. Confirm the current staff roster. Recent reviews thank Dr. Jonathan Galvez, Leslie, and Lino, who are not on the published staff page the site was built from. Update `src/content/team.ts` if the roster changed.
3. Professional team photo shoot in brand wardrobe (navy and cobalt). Current photos are enhanced small originals; the section is built to swap files with no code changes.
4. Real new patient form PDFs to replace the placeholder forms in `public/forms/`.
5. Custom domain: point bristolfamilydentalcenter.com at Vercel when ready (steps in the v1 section above).
6. Optional: the practice's Facebook page URL for the Facebook badge, which currently links to the Birdeye listing where the count is verifiable.
7. Set `RESEND_API_KEY` in Vercel when the practice is ready to receive booking emails in the inbox.

### What to show the manager, five moments

1. Load the home page fresh: the navy counter splash, then the hero where the top bars and the big card reveal one continuous photograph.
2. Scroll to the smile gallery and implant sections: one photo seen through many windows, and the blue clinical renders that match the new brand.
3. The reviews block: real counts pulled live, real patient words, and the Spanish quote, every one linked to its platform.
4. The team section: the actual Bristol team, by name, with the group photo. Then open the About page for Dr. Begino's story with his portrait.
5. Open the site on a phone: tap the FAQ, tap Book, and send a test request. Then switch to Español and show the same care in Spanish.
