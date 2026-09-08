# Claude instructions for this repository

Read `AGENTS.md` first and follow it completely. It is the single set of rules for this project (compliance limits, locked design tokens, bilingual content, quality gates, deploy procedure).

Notes specific to Claude sessions:

- Work on `main` only when the change is finished and every quality gate in `AGENTS.md` has passed. For anything larger than a copy fix, work on a short lived branch and merge it yourself after the gates pass.
- Before editing content, read the English file in `src/content/` and the matching Spanish export in `src/i18n/es.ts` (or `src/i18n/legal-es.ts`) so both languages change together.
- Run `npm run check` and `npm run build` after every set of edits. Serve `dist/` locally and run axe-core with Playwright at the five widths named in `AGENTS.md`; do not rely on a previous run.
- Use the practice facts in `src/content/practice.ts` as the source of truth. Do not look facts up elsewhere and paste them in.
- Never add analytics, forms, chat, or scripts from other hosts. If a request seems to need one, stop and report back instead of implementing it.
- Keep commit subjects and bodies plain and specific. Do not mention tools or models in code comments or copy.
