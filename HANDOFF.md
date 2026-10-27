# Handoff: how this website works and how to change it

Written for whoever maintains the Bristol Family Dental Center website next: a Carbon Quill Media team member, a TechSprint engineer, or an AI coding agent working for either. Open this file in VS Code and read it top to bottom once; it takes ten minutes. After that, `AGENTS.md` is the rulebook and this file is the map.

Last revised October 26, 2026 (launch candidate).

## 1. What this is, in one paragraph

A bilingual (English and Spanish) marketing website for a dental practice in Santa Ana, California. It is a static site: at build time a generator turns a folder of content files and templates into plain HTML, CSS, and a little JavaScript, and a hosting service serves those files from a CDN. There is no database, no server code, no admin login, no form handler, and no analytics. Every "Call" button is a `tel:` link that dials the front desk. That is deliberate: the client is a healthcare provider, and a site that collects nothing has nothing to protect.

## 2. The three places the site lives

| Place | What it is | Address |
| --- | --- | --- |
| GitHub repository | The source of truth. Every file on the site is in git. If it is not committed and pushed here, it does not exist. | https://github.com/sahib-TechSprint/bristol-family-dental |
| Vercel project | The host. It watches the `main` branch; every push builds the site and publishes it in about a minute. | Project `bristol-family-dental` in Sahib's Vercel account (team `sahibjohal-6987`, Hobby plan) |
| Working copy | A clone of the repository on a computer, where edits are made and tested. | On Sahib's workstation: `Desktop\TECHSPRINT MASTER FOLDER\Carbon Quill Media\Bristol Family Dental\bristol-family-dental` |

Public URL today: https://bristol-family-dental.vercel.app (review URL). At launch the practice's domain, bristolfamilydentalcenter.com, points at the same Vercel project; `LAUNCH-GUIDE.md` has the steps.

The folder one level up (`Bristol Family Dental\internal\`) holds the agency's private notes: playbook, QC report, maintenance runbook, client questions, access register. Nothing in `internal/` is in the repository or goes to the client.

## 3. How the "back end" works

People ask where the back end is. For this site the back end is the build pipeline, not a server:

1. **Content** lives in typed TypeScript modules under `src/content/` (English) and `src/i18n/` (Spanish). A file like `src/content/pages.ts` is just an object with the words on the Insurance page. Components contain no copy, so changing text never means touching layout.
2. **Templates** are Astro files in `src/pages/` (one per URL, `src/pages/es/` for Spanish) and `src/components/`. Two small React components run in the browser (the navbar menu and the masked card section on the home page); everything else is rendered to static HTML at build time.
3. **Build**: `npm run build` runs Astro, which reads the content, renders every page in both languages, generates `sitemap.xml`, `robots.txt`, and the JSON-LD structured data from `src/content/practice.ts`, and writes the result to `dist/`.
4. **Host**: Vercel runs that same build command on every push to `main` and serves `dist/`. `vercel.json` holds the production rules: redirects, security headers (Content Security Policy, HSTS, frame denial), cache rules, and the review-mode `X-Robots-Tag` header described below.
5. **Review switch**: one environment variable, `PUBLIC_SITE_URL`, decides whether the site is in review or launched. While it is unset or points at a `vercel.app` host, every page carries `noindex`, `robots.txt` disallows crawling, and Vercel adds a `noindex` header, so search engines ignore the preview. When it is set to the practice domain and the site is redeployed, the canonical links, hreflang alternates, sitemap, and structured data all switch to that domain and the site opens to search. Nothing else changes.
6. **Files the practice gave us**: the real new patient intake PDFs in `public/forms/` (English and Spanish). Replace the files, keep the names, and the download links keep working.
7. **Images**: clinical renders in `public/images/` as WebP, generated on the agency's Higgsfield workspace and stripped of metadata. No photographs of people or rooms (see `AGENTS.md`). `brand/renders.md` records every render's prompt.

## 4. Frameworks and tools

| Tool | Version | What it does here |
| --- | --- | --- |
| Astro | 7.3 | The static site generator. Renders `.astro` templates to HTML at build time. |
| React | 19 | Used for two interactive islands only (navbar menu, masked card section). |
| Tailwind CSS | 4.3 | Utility classes for layout. The palette, type scale, and spacing are locked tokens in `src/styles/global.css` and `brand/tokens.css`. |
| TypeScript | 5.9 | Content modules are typed, so a missing Spanish field or a typo in a key fails `npm run check` before it reaches the site. |
| Node.js | 22 LTS | Runtime for the build. Astro 7 needs 22.12 or newer. |
| npm | 10 | Package manager. `package-lock.json` pins every dependency; always `npm ci` on a fresh machine. |
| Open Sauce One | | The typeface, self hosted under `public/fonts/` with its SIL Open Font License. |
| sharp | | Image processing for `npm run generate:og` (Open Graph card and favicons). |
| Playwright + axe-core | | Dev only. `npm run audit` serves the build and runs the accessibility, link, SEO, and integrity gates at five screen widths. |
| Vercel | | Hosting and continuous deployment from GitHub. Free (Hobby) plan today. |
| GitHub | | Source control. Pushes to `main` deploy to production. |
| GitHub Desktop or VS Code | | Either is fine for committing and pushing. Sahib uses GitHub Desktop on techsprint-sj. |

No other runtime dependency exists. Adding one needs a written reason in the commit message (`AGENTS.md`, rule 12).

## 5. Getting access

Ask Sahib (sahibjohal99@gmail.com) for the two that matter, and record the grant in `internal/06-ACCESS-REGISTER.md` the same day:

1. **GitHub**: collaborator with Write on `sahib-TechSprint/bristol-family-dental`. For an AI agent or a script, a fine grained personal access token scoped to this one repository, Contents read and write, 90 day expiry. Never paste a token into a file in the repository.
2. **Vercel**: member of the project, only if you need to change environment variables, domains, or roll back a deployment. Day to day maintenance never needs the Vercel dashboard; pushing to `main` is the deploy.

The repository is public today and will be made private before launch (`LAUNCH-GUIDE.md`, step 2). Vercel keeps deploying from a private repository without any change.

## 6. Plugging in on a new computer

```
git clone https://github.com/sahib-TechSprint/bristol-family-dental.git
cd bristol-family-dental
npm ci
npm run dev            # http://localhost:4321, both languages, live reload
```

Needs Node 22 (https://nodejs.org, LTS) and git. On Windows, install Git for Windows or GitHub Desktop (which includes git). VS Code with the Astro and Tailwind CSS IntelliSense extensions is the recommended editor; open the repository folder, not a parent folder, so the TypeScript checks resolve.

For the audit, once per machine: `npx playwright install chromium`.

## 7. Making a change

The loop, every time:

```
git pull                      # start from what is live
# edit the content or template
npm run check                 # types and Astro diagnostics: 0 errors
npm run build                 # must succeed
npm run preview               # look at both languages at phone and desktop width
npm run audit                 # accessibility, links, SEO, integrity: must pass
git add -A
git commit -m "What changed and why, in plain language"
git push                      # Vercel builds and deploys in about a minute
# open the live URL, hard refresh, click the thing you changed, in both languages
```

Add a dated note to `DEPLOY-LOG.md` for anything beyond a typo.

Where common changes go (every change lands in English and Spanish in the same commit):

| Change | English | Spanish |
| --- | --- | --- |
| Phone, fax, email, address, hours, map link | `src/content/practice.ts` | hours labels in `src/i18n/es.ts` |
| Home page copy | `src/content/home.ts` | `heroEs`, `galleryEs`, `whyEs` ... in `src/i18n/es.ts` |
| Services list and descriptions | `src/content/services.ts` | `serviceGroupsEs` in `src/i18n/es.ts` |
| Insurance and payment text | `src/content/pages.ts` (`insurance`) and the badge list at the top of `src/pages/insurance.astro` | `insuranceEs` in `src/i18n/es.ts` and `src/pages/es/insurance.astro` |
| About page, new patients, contact, 404 | `src/content/pages.ts` | `aboutEs`, `newPatientsEs`, `contactEs`, `notFoundEs` in `src/i18n/es.ts` |
| FAQ | `src/content/faq.ts`, home FAQ in `src/content/reviews.ts` | `faqEs`, `homeFaqEs` in `src/i18n/es.ts` |
| Review badges (quarterly refresh) | `src/content/reviews.ts` and `reviewsVerifiedOn` | `reviewCountLabelsEs` in `src/i18n/es.ts` |
| Page titles and search descriptions | `src/content/seo.ts` (titles under 61 characters, descriptions under 156) | `seoEs` in `src/i18n/es.ts` |
| Privacy, terms, accessibility | `src/content/legal.ts` and `legalEffectiveDate` | `src/i18n/legal-es.ts` and `legalEffectiveDateEs` (attorney reviewed; change only when asked) |
| Intake form PDFs | replace `public/forms/new-patient-en.pdf` and `new-patient-es.pdf`, same names | |
| A new render | add the WebP to `public/images/`, record the prompt in `brand/renders.md`, reference it with `width`, `height`, and real `alt` text in both languages | |
| Navigation labels, the call button | `src/content/nav.ts` | `navLinksEs`, `callLabelEs` in `src/i18n/es.ts` |

Rules that are not negotiable are in `AGENTS.md`: no forms or tracking, every primary action is a phone call, no photos of people or premises, no superlatives or price claims, no review quotes, licensing lines stay, no em or en dashes, locked design tokens. Read it before the first edit.

## 8. Committing and deploying

- `main` is production. There is no staging branch by design. Finish the gates, then push.
- For anything bigger than a copy fix, work on a short lived branch (`git checkout -b insurance-copy`), push it, and Vercel builds a preview URL for that branch. Merge into `main` when it looks right.
- Commit messages say what changed and why, scoped to one topic per commit. Trailers your tooling adds are fine; the subject still reads like a person wrote it.
- Rollback: Vercel dashboard, Deployments, choose the previous deployment, Promote to Production. Then fix forward on `main`. Never edit files in the Vercel dashboard.
- GitHub Desktop users: Fetch origin, make the change, write the summary, Commit to main, Push origin. Same loop, different buttons.

## 9. For AI coding agents (Claude, Codex, Copilot, Cursor, or any other)

Paste this at the start of a session, after giving the agent access to the repository folder:

```
You are maintaining the Bristol Family Dental Center website for Carbon Quill Media.
Read HANDOFF.md, then AGENTS.md, in the repository root before changing anything.
Facts about the practice come only from src/content/practice.ts; never look them up elsewhere.
Every content change lands in English (src/content/) and Spanish (src/i18n/) in the same commit.
Before committing run: npm run check, npm run build, npm run audit. All three must pass.
Never add forms, analytics, chat, booking tools, or scripts from other hosts.
Never add photographs of people or rooms, superlatives, prices, review quotes, or em or en dashes.
Do not touch public/forms, brand/bristol-brand-guide.pdf, vercel.json, or the legal content files unless the task says so.
Commit with a plain, specific message. If anything is unclear, stop and ask the project lead.
```

Agents commit through whatever git credential the human running them has: GitHub Desktop's login on Sahib's machine, or a fine grained token on another machine. Agents never receive the Vercel login.

## 10. Launch

`LAUNCH-GUIDE.md` is the checklist: client approvals, make the repository private, add the domain in Vercel, set the DNS records (A and CNAME only; leave MX alone so the office email keeps working), set `PUBLIC_SITE_URL` to the practice domain, redeploy, confirm `robots.txt` says `Allow` and the `noindex` tag is gone, submit the sitemap in Search Console, update the Google Business Profile link.

## 11. Parked content and pending client items

- **Denti-Cal.** Removed from the site on October 26, 2026 at the agency's request while the office completes its provider enrollment. When the office is cleared, bring it back in one commit: the hero fact in `src/content/home.ts` (`facts`), the third insurance card in `src/content/pages.ts` (`insurance.plans`), the home FAQ answer in `src/content/reviews.ts`, the badge list in `src/pages/insurance.astro`, the home and insurance descriptions in `src/content/seo.ts`, the third party names line in `src/content/legal.ts`, and every Spanish mirror in `src/i18n/es.ts` and `src/i18n/legal-es.ts`. The October 1 commit history has the exact previous wording. Remove the Denti-Cal line from the integrity greps in `scripts/audit.mjs` at the same time.
- **Dental implants.** Hidden until the office confirms a dentist who places them. Two renders wait unreferenced in `public/images/`.
- **Team roster.** Only Pablo Lazaro, D.D.S. is named, by the office's request. Orthodontics is credited to Dr. Efrain Chara of Chara Orthodontics.
- **Reviews.** Badges were verified September 8, 2026; re-verify before the domain cutover and quarterly after.
- **Legal pages.** Careful drafts awaiting the practice's attorney.

The full client list is in `internal/05-CLIENT-QUESTIONS.md`.

## 12. Who to ask

Project lead: Sahib Johal, Carbon Quill Media / TechSprint Consulting Group, sahibjohal99@gmail.com. Client relationship: Neil Harrington. The practice's front desk: (714) 540-7101 (for facts only; never for technical questions).
