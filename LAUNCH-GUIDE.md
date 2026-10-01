# Launch Guide: Bristol Family Dental Center

The path from "the site looks right" to "the site is live on the clinic's domain."
Work top to bottom; each step says who does it and how long it takes.

## 1. Confirm the site with the clinic (Carbon Quill + clinic, 30 minutes)

Walk the manager through the preview at https://bristol-family-dental.vercel.app:

1. Home, English: the opening card with the full practice name and the toothbrush render,
   the cosmetic and restorative sections, the review badges, the FAQ. Every button is a call button; tap one on a phone to show it dials.
2. Tap ES in the top corner: the entire site switches to Spanish; EN brings it back.
3. Services, About, New Patients (download both intake forms), Insurance, Contact (map).
4. Footer: hours, the dentist's name with license type, the Dental Board notice, and the
   Privacy, Terms, and Accessibility links.

Get these yeses in writing (a text message is fine):

- [ ] The site is approved as shown, in both languages.
- [ ] Pablo Lazaro, D.D.S. is the dentist of record named on the site (footer, About, Terms,
      structured data). No other dentist or team member is named, by the office's request,
      and dental implants are not mentioned anywhere until the office confirms a dentist who
      places them.
- [ ] Orthodontic care is presented as provided by Dr. Efrain Chara, orthodontist, of Chara
      Orthodontics (linked to https://charaorthodontics.com/), on the home, services, About,
      and Terms pages. The office confirmed the title "orthodontist" on October 1, 2026.
- [ ] The three review badges may stay, including Google at its current 3.8.
- [ ] "Most insurance accepted, including Denti-Cal", the PPO "preferred provider" line, the
      HMO assignment note, CareCredit, and in house financing are all accurate today.
- [ ] The practice's attorney has read the Privacy Policy, Terms of Use, and Accessibility
      Statement (they are careful plain language drafts, not legal advice).
- [ ] The practice holds a current Fictitious Name Permit from the Dental Board for
      "Bristol Family Dental Center" (required to practice under that name).

## 2. Lock the repository (Carbon Quill, 5 minutes)

The GitHub repository is public today. Before launch, make it private (GitHub, Settings,
Danger Zone, Change visibility). Vercel keeps deploying from a private repository without
any change. Then confirm the Vercel project has only the people who need it.

## 3. Point the domain (Carbon Quill + whoever holds the DNS login, 20 minutes plus propagation)

1. Vercel dashboard, project bristol-family-dental, Settings, Domains: add
   `bristolfamilydentalcenter.com` and `www.bristolfamilydentalcenter.com`. Pick one as
   primary (www is the usual choice); Vercel redirects the other to it.
2. At the current DNS host for bristolfamilydentalcenter.com:
   - Apex A record: `76.76.21.21`
   - `www` CNAME: `cname.vercel-dns.com`
   Leave the MX records exactly as they are so info@bristolfamilydentalcenter.com keeps working.
3. Wait for Vercel to show the certificate as issued (minutes to an hour).
4. Vercel, Settings, Environment Variables: set `PUBLIC_SITE_URL` to
   `https://www.bristolfamilydentalcenter.com` (or the apex if that was chosen) for
   Production, then Deployments, Redeploy the latest. Canonicals, hreflang, the sitemap,
   and structured data pick up the real domain.
5. Load the domain over a phone's cellular data and click through both languages. Confirm
   `https://www.bristolfamilydentalcenter.com/book` redirects to `/contact` and that the
   old site is gone.

## 4. Tell Google and the directories (Carbon Quill, 30 minutes, the week of launch)

1. Google Search Console: add the domain property, verify via DNS, submit
   `https://www.bristolfamilydentalcenter.com/sitemap.xml`.
2. Google Business Profile: update the website link, confirm hours read Monday to Friday
   9 to 6, and confirm the category is General Dentist.
3. Yelp: claim the listing (it shows Unclaimed today) and update the website link.
4. Birdeye lists the practice as "Pediatric Dentists" and shows "Claim this profile"; claim
   or correct it. Update any other directory that links to the old site.

## 5. First week after launch (Carbon Quill, an hour total)

- Run PageSpeed Insights against the live domain for the public performance report.
- Check the response headers once on the live domain (`curl -I`) to confirm the CSP, HSTS,
  and frame rules in `vercel.json` are being served.
- Ask the front desk whether calls mention the site and note anything confusing.
- Record the launch date and the PageSpeed numbers in `DEPLOY-LOG.md`.

## Small print worth remembering

- The clinical renders are digital illustrations, and the Terms page says so. When the
  clinic wants real photography, shoot the actual rooms bright and empty per the brand guide,
  get written permission for anyone who appears, and drop the files into `public/images/`.
- The intake form PDFs live at `public/forms/new-patient-en.pdf` and `new-patient-es.pdf`.
  Replace files, keep names.
- Review counts were verified September 8, 2026. Refresh the numbers in
  `src/content/reviews.ts` (and the labels in `src/i18n/es.ts`) every quarter and at each
  redesign, and update `reviewsVerifiedOn`.
- Hours, phone, and address live in `src/content/practice.ts` (English) and the hours labels
  in `src/i18n/es.ts` (Spanish).
- The legal pages carry an effective date in `src/content/legal.ts` and
  `src/i18n/legal-es.ts`. Change both when the wording changes.
