# Launch Guide: Bristol Family Dental Center

The path from "the site looks right" to "the site is live on the clinic's domain."
Work top to bottom; each step says who does it and how long it takes.

## 1. Confirm the look with the clinic (Sahib + clinic, 30 minutes)

Walk the manager through the preview at https://bristol-family-dental.vercel.app:

1. Home page, English: the bright hero, cosmetic dentistry, implants, reviews, FAQ.
2. Tap the ES button in the top corner: the entire site switches to Spanish, and the
   EN button brings it back. Show it on a phone too.
3. Services: the orthodontics band and specialist network.
4. New Patients: download both real intake forms and confirm they are the right ones.
5. About: the doctor's name with Training and recognition, and the team names.
6. Footer: hours show Monday to Friday 9 to 6, weekends closed. Confirm that is right.

Get four yeses in writing (a text message is fine):

- [ ] The four review quotes on the homepage are approved as shown.
- [ ] Keeping the Google badge at its current 3.8 rating is approved (or ask us to remove it, a one line change).
- [ ] The staff names on the About page are the current roster.
- [ ] The privacy, disclaimer, and accessibility pages are approved (an attorney read is recommended; they are careful drafts, not legal advice).

## 2. Turn on booking emails (Sahib, 15 minutes, recommended before launch)

Today, form submissions log to the Vercel function console. To deliver them to the
clinic inbox:

1. Create a free account at resend.com and copy an API key.
2. Vercel dashboard, project bristol-family-dental, Settings, Environment Variables:
   add `RESEND_API_KEY` with that key for Production.
3. Optional: add `BOOKING_NOTIFY_EMAIL` if the clinic wants a different inbox than
   info@bristolfamilydentalcenter.com.
4. Redeploy (Deployments, latest, Redeploy), then send a test booking from /book and
   confirm it arrives.

## 3. Point the domain (Sahib + whoever holds the DNS login, 20 minutes plus propagation)

1. Vercel dashboard, project bristol-family-dental, Settings, Domains: add
   `bristolfamilydentalcenter.com` and `www.bristolfamilydentalcenter.com`. Pick which
   one is primary (www is the usual choice); Vercel will redirect the other to it.
2. At the current DNS host for bristolfamilydentalcenter.com:
   - Apex A record: `76.76.21.21`
   - `www` CNAME: `cname.vercel-dns.com`
3. Wait for Vercel to show the certificate as issued (minutes to an hour).
4. Back in Vercel, Settings, Environment Variables: change `PUBLIC_SITE_URL` to
   `https://www.bristolfamilydentalcenter.com` (or the apex if that was chosen) and
   redeploy, so canonicals, the sitemap, and structured data carry the real domain.
5. Load the domain over your phone's cellular data and click through both languages.

## 4. Tell Google (Sahib, 20 minutes, the week of launch)

1. Google Search Console: add the domain property, verify via DNS, and submit
   `https://www.bristolfamilydentalcenter.com/sitemap.xml`.
2. Google Business Profile: update the website link to the new domain, and while
   there confirm the hours read Monday to Friday 9 to 6.
3. Yelp: update the website link on the listing.

## 5. First week after launch (Sahib, an hour total)

- Run PageSpeed Insights against the live domain for the public performance report.
- Send one real booking through each language and confirm the clinic received both.
- Check the Vercel function logs once for any form errors.
- Ask the front desk whether calls mention the site, and note anything confusing.

## Small print worth remembering

- The interior photographs are representative renderings, and the site's disclaimer
  says so. When the clinic wants real photography, shoot the actual rooms bright and
  empty per the brand guide, drop the files into `public/images/` under the same
  names, and push.
- The intake form PDFs live at `public/forms/new-patient-en.pdf` and
  `new-patient-es.pdf`. Replace files, keep names.
- Review counts were verified September 4, 2026. Refresh the numbers in
  `src/content/reviews.ts` (and the two labels in `src/i18n/es.ts`) at each redesign.
- Hours, phone, and address live in `src/content/practice.ts` (English) and the
  hours labels in `src/i18n/es.ts` (Spanish).
