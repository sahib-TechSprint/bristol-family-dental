# Working agreement for this repository

This file is for every person and every coding agent (Claude, Codex, Copilot, Cursor, or anything else) that touches this repository. Read it fully before changing anything. `CLAUDE.md` points here; there is one set of rules.

## What you are working on

The public marketing website of Bristol Family Dental Center, a real dental practice in Santa Ana, California, owned by a licensed dentist. The site is bilingual (English at `/`, Spanish at `/es`), fully static, and collects no information from visitors. Carbon Quill Media builds and maintains it on the practice's behalf.

Because the client is a California healthcare provider, the site is held to a higher bar than a normal small business site. The rules below are not style preferences; most of them exist because of a law, a license term, or a signed client decision.

## Hard rules (never break these without a written client decision)

1. **No forms, no data collection, no tracking.** Do not add contact forms, chat widgets, booking tools, newsletter boxes, analytics (including Google Analytics or Vercel Analytics), pixels, tag managers, A/B testing, heatmaps, or any script that phones home. The only third party that loads is the Google Maps iframe on the contact pages, and the privacy policy discloses it. Adding any of these changes the site's HIPAA and CCPA posture and needs a separate, scoped project.
2. **Every primary action is a phone call.** The call button (`callHref` / `callLabel` in `src/content/nav.ts`, `callLabelEs` in `src/i18n/es.ts`) is the site's one CTA. Do not add "Book online" or similar until the practice has a compliant scheduling tool.
3. **No photography of people, patients, staff, or the premises** unless the practice supplies it in writing with the right to publish. Imagery is limited to clinical renders (teeth, implants, aligners, models, instruments) on deep navy, matching the existing set in `public/images/`. Interior or exterior "photos" of the clinic that were generated rather than taken are forbidden. Every render must be watermark free and stripped of metadata before it ships.
4. **No claims the practice cannot substantiate.** California Business and Professions Code 651 forbids claims of superiority, guaranteed or painless results, and images that imply results. Do not write "best", "top rated", "painless", "guaranteed", "instant", "permanent", "safest", "#1", "leading", "trusted dentist" as a title, or comparative claims against other providers or products. Do not mention prices, discounts, "free" anything, or financing terms beyond naming the payment methods the practice accepts. Do not add before and after images.
5. **No review text.** The site shows platform badges (name, rating, count, link) that are re-verified on a recorded date. It never reproduces a review's words. Do not add testimonials or quotes, invented or real.
6. **Licensing lines stay.** The footer, About page, and Terms carry the dentists' names, degree, and license type (Business and Professions Code 680.5) and the Dental Board of California consumer notice. Do not remove or bury them.
7. **Legal pages are drafts reviewed by the practice's attorney.** Change wording only when asked, update `legalEffectiveDate` (English) and `legalEffectiveDateEs` (Spanish) together, and tell the project lead so the attorney can re-read.
8. **English and Spanish ship together.** Every content change lands in both `src/content/*` and `src/i18n/*` in the same commit. Spanish uses the usted form and natural phrasing; do not machine translate and paste.
9. **No em dashes or en dashes** anywhere in code, copy, or docs. Use commas, periods, or parentheses.
10. **No references to tools or machine authorship** in code, comments, or content. Write like a person. (Commit trailers that your tooling adds automatically are fine; the commit subject and body still describe the change in plain language.)
11. **Design tokens are locked.** Palette (navy, cobalt, cobalt deep, sky, mist, paper, ink), the seven step type scale, Open Sauce One, the 4px spacing grid, rounded cards, and the "first paint is unanimated" rule for the hero and page heroes. Cobalt is reserved for things a visitor can press. Do not add shadows, new fonts, new colors, or icon libraries.
12. **Do not add dependencies** without a reason written in the commit message. The site currently has no runtime dependencies beyond Astro, React, and Tailwind.

## Content that must be kept true

These facts live in `src/content/practice.ts` and `src/i18n/es.ts` and are mirrored into structured data. When they change, change them there and nowhere else.

- Phone (714) 540-7101, fax (714) 540-6061, email info@bristolfamilydentalcenter.com
- Address 2618 S. Bristol St., Santa Ana, CA 92704
- Hours Monday to Friday 9:00 a.m. to 6:00 p.m., Saturday and Sunday closed
- Dentists: Ruben H. Begino, D.D.S. and Pablo Lazaro, D.D.S.
- Review counts and ratings in `src/content/reviews.ts` (with `reviewsVerifiedOn`) and the matching labels in `src/i18n/es.ts`

## Quality gates (every change, no exceptions)

Run these before committing. A change that fails any gate does not ship.

1. `npm run check` passes with zero errors.
2. `npm run build` succeeds.
3. Open the built site (`npm run preview`) in both languages at 360 and 1440 wide and look at what you changed.
4. Accessibility: axe-core (WCAG 2.1 A and AA rule set) reports zero violations on every page you touched, at 360, 768, 1024, 1440, and 1920 wide. Text placed over an image sits on a navy or white panel so contrast does not depend on the picture behind it. Keyboard: Tab reaches everything, the skip link is first, Escape closes the menu, focus returns to the trigger.
5. Every internal link and anchor resolves. Every image has a meaningful `alt` (or `alt=""` if purely decorative) and `width` and `height`.
6. Integrity greps are clean: no em or en dash characters (U+2014, U+2013), no `/book`, no "X-ray", no price or "free" language, no removed image names, no references to AI tools.
7. JSON-LD on every page parses and the practice facts in it match `practice.ts`.
8. Lighthouse mobile (local or PageSpeed Insights) stays at or above 90 performance and 100 accessibility, best practices, and SEO on the home page.
9. Commit message says what changed and why in plain language. Scope each commit to one topic.

## How to deploy

Production deploys automatically when `main` is pushed to GitHub. There is no staging branch by design; treat `main` as production and finish the quality gates first.

1. Commit on `main` (or merge a short lived branch into it).
2. Push. Vercel builds and deploys in about a minute.
3. Load the production URL in both languages, hard refresh, and click the thing you changed.
4. Record anything notable in `DEPLOY-LOG.md` under a dated heading.

Rollback: in Vercel, Deployments, pick the previous deployment, Promote to Production. Then fix forward on `main`.

## Files an agent should never touch without instruction

- `public/forms/*.pdf` (the practice's real intake forms)
- `brand/bristol-brand-guide.pdf`
- `vercel.json` (routing and security headers; changes need a header check on production)
- `src/content/legal.ts` and `src/i18n/legal-es.ts` (attorney reviewed drafts)

## When in doubt

Stop and ask the project lead at Carbon Quill Media. A question costs a minute; a compliance mistake on a healthcare site costs the client.
