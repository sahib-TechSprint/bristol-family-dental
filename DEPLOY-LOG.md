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

## Launch candidate revision, September 4, 2026

Client review round applied in full. Eight commits, pushed to main and auto deployed by Vercel.

### What the client asked for, and what shipped

- Every photograph of a person removed, generated and enhanced originals alike. The site now photographs spaces and craft: bright empty clinic interiors and blue clinical renders, all newly generated at high resolution in the brand palette. The disclaimer states plainly that interiors are representative renderings.
- Hero bar strip above the fold removed; the hero is now one bright treatment room photograph under the Bristol Smiles display type.
- Smile Gallery reworked as Cosmetic Dentistry with a reception lounge image and the same four service links.
- Visit Us and Office Hours cards removed from the homepage; that information lives in the footer and on Contact.
- Hours corrected sitewide to Monday through Friday 9 to 6, weekends closed, including the structured data.
- Every X-ray mention removed. Every pricing claim removed while keeping factual payment methods. Orthodontics promoted: homepage card, services page feature band with the aligner render, and an FAQ entry.
- About rebuilt: the doctor's name is the heading with Training and recognition as the subheader over prose, no timeline, and the four team member cards sit as text beside an office photo.
- Services, About, and Insurance heroes and sections carry the new imagery.
- The practice's real intake forms (English and Spanish scans, compressed from 8 MB to about 330 KB each) replaced the placeholders at the same URLs.
- The entire site now exists in Spanish under /es/ with a one button EN or ES switch in the top corner of the navbar on every page. The old /espanol page redirects to /es/. Every page pair carries reciprocal hreflang and both trees are in the sitemap.
- New legal pages in both languages: Privacy Policy and Disclaimer, and an Accessibility Statement, linked from the footer.
- Brand guide updated to v1.1 with the no people imagery direction.

### Compliance and QC results for this revision

- axe-core WCAG 2.1 AA: zero violations on all 19 pages (9 English, 9 Spanish, 404) at 360, 768, 1024, 1440, and 1920.
- Zero horizontal overflow anywhere. All JSON-LD parses (Dentist, Person, FAQPage on home and new patients in both languages). Every internal link and anchor resolves.
- Language toggle verified on every page in both directions, with correct hreflang pairs and html lang attributes.
- Booking endpoint end to end: valid 200, honeypot quiet 200, too fast 400, rate limit 429. Spanish booking form submitted through the real UI to the confirmation state.
- Splash, menu focus trap, Escape handling, and reduced motion behaviors all pass. Keyboard reaches the skip link first on a fresh load.
- Local Lighthouse mobile: accessibility, best practices, and SEO all 100 on home, Spanish home, services, and book; performance 89 to 94 locally with the font CDN blocked (production has run 2 to 7 points higher; re-verify with PageSpeed Insights after deploy).
- Integrity greps clean: no em or en dashes, no machine authorship references, no X-ray or Saturday or pricing leftovers, no stray palette classes.

### Known judgment calls

- "Orthopedics" in the client notes was confirmed with Sahib as orthodontics.
- The corner chip that read Free Consultation now reads Se Habla Español (English site) and Atención Bilingüe (Spanish site); free offers read as pricing claims.
- CareCredit copy says "manageable monthly payments" rather than repeating the zero interest claim.
- Reviews section stays as approved in the prior round, pending the manager's excerpt sign off.

### Client items before DNS cutover

1. Approve the live preview in both languages.
2. Sign off on the four review excerpts (listed in the prior section) and the Google badge at its current 3.8 rating.
3. Confirm the current staff roster for the About page names.
4. Have an attorney glance at the privacy, disclaimer, and accessibility pages; they are careful plain language drafts, not legal advice.
5. Optional but recommended: set RESEND_API_KEY in Vercel so booking requests arrive by email.
6. When approved, point the domain (steps in the launch guide and in the v1 section above).

## Final draft revision, September 8, 2026

The go live candidate. One coordinated push to main, auto deployed by Vercel.

### What changed and why

- Imagery: every generated interior (hero, gallery lounge, treatment room, consultation room, waiting area, front desk, check in counter) is gone. The practice has no approved photography of its own rooms, and a generated room presented as the clinic would be misleading. Clinical renders stay and six new ones were added in the same blue studio style (veneers and crown, teaching model on an articulator, mirror and explorer, instrument set, braces model, lower jaw model). All renders re-encoded to webp with metadata stripped and checked for watermarks.
- Home page: the hero is now typographic (sky card, display wordmark, three plain facts, the call button, a faint tooth mark). No image request sits in front of the largest paint. The cosmetic section masks the veneers render behind navy glass panels so contrast never depends on the picture; a portrait crop serves the stacked mobile layout. The implant section uses the teaching model render in the tall card.
- Booking: the form, its API endpoint, the Resend dependency, and the two booking pages are removed. Every Book button is now a Call button (`tel:` link with the number as its label). `/book` and `/es/book` redirect permanently to the contact pages. The site is now fully static with no server code and collects nothing.
- Reviews: the four quoted excerpts are removed. The three platform badges stay, re-verified live today (Yelp 4.0, 51 reviews; Google 3.8, 38 reviews; Facebook 29 reviews via Birdeye) and linked out. Review text belongs to its authors and the platforms' terms restrict republishing it.
- Legal: privacy policy rewritten for a no-form site (hosting logs, session storage flag, Google Maps cookies, CCPA and CalOPPA language, Do Not Track statement, HIPAA and CMIA note for calls and email). New Terms of Use and Disclaimer page in both languages (informational only, imagery notice, reviews notice, no warranties, California law). Accessibility statement updated. Footer now carries the dentists' names, degree, and license type per Business and Professions Code 680.5, plus the Dental Board of California consumer notice.
- Claims: "virtually all insurance" is now "most insurance"; "trusted dentist" headings replaced with plain descriptions; CareCredit "approval is often instant" removed; "every member of our team is bilingual" softened to "our team is bilingual"; outcome language in services and FAQ softened ("permanent", "never slip", "safely", "works better than", "quick and comfortable"). Spanish mirrors every change.
- Fonts: Open Sauce One is self hosted (four woff2 files, 14 KB each) under the SIL Open Font License with the license text shipped beside them. The db.onlinewebfonts.com hotlink is gone, which removes the site's only third party script origin and a render blocking request.
- Hosting: the Vercel adapter is removed (nothing needs a server). `vercel.json` now owns production routing (no trailing slashes, permanent redirects) and security headers (CSP, HSTS, nosniff, frame denial, referrer and permissions policies, cache rules). Canonicals, hreflang, and the sitemap all use one URL form.
- Map: the Google Maps iframe stays by client decision, with a cookie disclosure beneath it and in the privacy policy, and a `strict-origin-when-cross-origin` referrer policy.
- Docs: `AGENTS.md` and `CLAUDE.md` added so any person or agent working on the repository inherits the same rules and quality gates.

### QC record for this revision

- `astro check`: 0 errors. Build: clean, 22 HTML pages (19 real pages plus three redirect stubs).
- axe-core, WCAG 2.1 A/AA plus best practice rules: 0 violations on all 19 pages at 360, 768, 1024, 1440, and 1920 (95 page and width combinations). Zero horizontal overflow anywhere.
- Contrast: every palette pair used for text verified programmatically (lowest pair in use: ink at 60 percent on sky, 4.53:1; cobalt on mist, 4.67:1). Text over imagery sits on navy glass at 80 to 85 percent, which is 7.5:1 or better even over pure white.
- Keyboard: skip link is the first Tab stop and becomes visible on focus; every control reachable; menu opens with Enter, traps focus, closes on Escape, returns focus to its trigger (desktop and mobile); FAQ accordions toggle with Enter; 2px focus ring on every control.
- Links: every internal link and anchor resolves; every page has exactly one h1; every image has alt text and dimensions; JSON-LD parses on every page (25 blocks).
- Lighthouse mobile, local build: home 92 / 100 / 100 / 100 (LCP 1.8 s, CLS 0, TBT 0 ms), services 97, Spanish home 93, contact 99; accessibility, best practices, and SEO 100 on all four.
- Integrity greps clean: no dashes, no booking paths, no removed image names, no third party scripts, no price or "free" language, no superlatives.
- Third party inventory: one iframe (Google Maps, contact pages only, disclosed). No scripts, styles, or fonts from other hosts.

### Awaiting the client before DNS cutover

See `LAUNCH-GUIDE.md`. The short list: approve the preview in both languages, attorney glance at the three legal pages, confirm the roster and the two dentists' names as shown, and the domain login.

## Roster and offering update, October 1, 2026

Requested by the agency after the office's changes: the dentist who placed implants has left, no other team members are to be named, and the practice's full name goes wherever the site says who it is. One push to main, auto deployed by Vercel.

### What changed and why

- Dental implants are hidden until the office confirms a dentist who places them. The home page implant section is now a restorative dentistry section (crowns, bridges, and dentures, with the same three step strip), the services page lists no implant item, the "Dental Implants" gallery card is now "Clear Aligners", and the extractions, restorative, FAQ, legal imagery notice, and search descriptions no longer mention implants in either language. The two implant renders stay in `public/images/` unreferenced. There is no `#implants` anchor left; the services page keeps `#restorative`, `#crowns`, `#bridges`, and `#dentures`.
- Ruben H. Begino, D.D.S. is removed entirely, with the team roster. Pablo Lazaro, D.D.S. is the one dentist named (footer, About, Terms, Person structured data at `/about#dentist`). The About page is rebuilt around three cards: the dentist, orthodontics with Dr. Efrain Chara, and one office for the whole family. `src/content/team.ts` now exports `dentist` and `bilingualNote` only.
- Orthodontics is presented as provided by Dr. Efrain Chara, orthodontist, of Chara Orthodontics, with a link to https://charaorthodontics.com/ (new tab, `rel="noopener"`, screen reader label). The services page gains a full orthodontics section: a band with the three plain points, his card with the biography stated on his own site, and six service cards (consultation, braces, clear aligners, early evaluation, adult treatment, retainers). The word "orthodontist" appears only beside his name, which keeps the site inside Business and Professions Code 651(h)(5): the practice itself never claims the specialty. The office confirmed the title on October 1, 2026.
- The practice's full name everywhere: the home hero heading reads "Bristol Family Dental Center" on two lines in both languages (the screen reader heading is unchanged), the "Why Bristol" label is "Why Bristol Family Dental Center", and the page titles and descriptions use the full name.
- Imagery: the home hero now carries a render (three toothbrushes in three sizes in a frosted cup), preloaded from the head with a phone crop and a wide crop so it is the first paint's largest element without delaying the type. Five more renders in the house style: a three unit bridge and a denture model for the restorative section, a crown beside a mirror on About, and a clear retainer on the services page. Prompts and job ids are in `brand/renders.md`. All six inspected for watermarks, flattened, re-encoded as webp, metadata stripped.
- Motion: a scroll driven depth layer in pure CSS (`@supports (animation-timeline: view())`): render cards tilt up from the floor as they enter, renders inside overflow hidden cards drift against the scroll, and the hero render eases away as the visitor scrolls past it. The individual transform properties compose with the existing reveal transition. Browsers without scroll timelines and visitors who prefer reduced motion get the static layout; the first paint is unanimated (verified by diffing a motion and a reduced motion capture at scroll 0).
- Footer: the Privacy, Terms, and Accessibility links are 24 px tall targets (WCAG 2.2 target size, which the earlier audit did not cover).
- Dependencies: Astro 5.13 to 7.3.5, `@astrojs/react` 4 to 7, `sharp` 0.35, Tailwind 4.3, TypeScript 5.9, plus `npm audit fix` for the transitive advisories. `npm audit` was reporting one critical and five high advisories in the old line, all fixed only by the major upgrade. The site uses no Astro API that changed (no content collections, no view transitions, no SSR), the build output is the same set of 19 pages plus 3 redirect stubs, and both React islands hydrate and behave as before (menu open, focus trap, Escape, focus return). `engines.node` is set to 22.x for the host.
- Docs: `AGENTS.md` (imagery rule, facts block), `README.md`, `LAUNCH-GUIDE.md` (client checklist), and `brand/BRAND.md` updated to match.

### QC record for this revision

- `astro check`: 0 errors, 0 warnings. Build: clean, 22 HTML files (19 pages plus the three redirect stubs), sitemap and robots present.
- axe-core, WCAG 2.0/2.1/2.2 A and AA plus best practice rules: 0 violations on all 19 pages at 360, 768, 1024, 1440, and 1920 (95 combinations), motion settled before each run.
- Lighthouse mobile, local build, median of three: home 97 / 100 / 100 / 100 (LCP 1.86 s, CLS 0, TBT 0 ms); services 97 (LCP 2.41 s); Spanish home 97 (LCP 1.96 s); About 98 (LCP 2.35 s). Accessibility, best practices, and SEO 100 on all four.
- Islands: Splash, Navbar, and GallerySection hydrate with no console errors on the home page in both languages; the menu opens, traps focus, closes on Escape, and returns focus to its trigger.
- Integrity greps clean on the built HTML: no "implant" in any language, no "Begino", no dashes, no tool names, no price or "free" language, no superlatives; every "orthodontist" and "ortodoncista" sits beside Dr. Chara's name; every image path on every page resolves; "Bristol Family" appears alone only as the first line of the two line wordmark.
- `npm audit`: 0 vulnerabilities.
- Live check after the push, both languages: the full name in the hero heading, the toothbrush render served and preloaded with both crops, no "implant" or "Begino" on any page, "Pablo Lazaro, D.D.S." on About and in the footer, Dr. Chara's card with the new tab link on the services page, the Terms dated October 1, 2026, `/book` redirecting to the contact page, the sitemap at 18 URLs, the three islands hydrated, headers unchanged (CSP, HSTS, DENY, nosniff). Two things the live check caught and a second push fixed: the build's CSS minifier had folded `animation-timeline` into the `animation` shorthand (browsers reject it, so nothing moved), and a render inside an overflow hidden card cannot read its own `view()` progress because the clipped card is a scroll container; the timelines now sit in their own rules and the clipped renders follow a named view timeline on the card or the hero section. Verified live: the hero render moves from rest to 5 percent and 1.12 scale as the opening card leaves, the restorative cards tilt from 12 degrees to flat as they enter, and the clipped renders drift from minus 5 to plus 5 percent across the scroll. A third push gave the services page the `#orthodontics` anchor the About page links to.

### Awaiting the client

See the updated checklist in `LAUNCH-GUIDE.md`: approve the preview in both languages, confirm Pablo Lazaro, D.D.S. as the dentist of record, confirm that the orthodontics presentation of Dr. Chara is as the office wants it, and tell the agency when a dentist who places implants joins so the implant content can return.
