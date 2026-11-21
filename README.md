# MedSpore V1.0.0 — Modular Medical Learning PWA

**A new website based on the user-provided MedQ Daily ZIP.** The previous website was not modified. The new MedSpore project ships with a clean responsive light/dark interface, 19 separate subject data modules (10 sample MCQs per subject), a blog section (82 unique entries after removing duplicated source entries), 5 starter mnemonic flashcards and 3 free starter notes. NEET PG and INI-CET PYQ collections remain separate and **empty** until verified content is available.

## Deploy on Cloudflare Pages

1. Upload the **contents of this folder**, not a nested folder, to the root of the GitHub `medspore` repository. Preserve the existing Google Search Console verification HTML file from your current repository (it was not in the source ZIP).
2. In Cloudflare Pages use production branch `main`, framework preset `None`, build command `exit 0` (or leave blank), and output directory `/` (root). The pre-rendered pages are already included in this ZIP.
3. Test a preview branch first. Check homepage, subject pages, article pages, practice, settings, PWA, Firebase Auth and Firestore before replacing production.
4. **Firebase rules are not installed by uploading this ZIP.** Review and publish `firestore.rules` in Firebase Console → Firestore Database → Rules. Until published, Auth may work but progress sync and device token storage will be denied.
5. Enable Google and Email/Password providers in Firebase Authentication and make sure `medspore.pages.dev` is an Authorized Domain. Also review authorized OAuth domains and popup behavior.
6. Verify the `ca-pub-5839775677116272` AdSense publisher ID from the **old user-provided** `ads.txt` and source HTML belongs to your current account. The new pages contain a publisher verification meta tag but **no ad slot, Auto Ads script or ad placement**. Replace the tag with the exact verification code shown in your own AdSense account if different.
7. The website is **not pre-approved** for AdSense. Submit it for review only when content, legal and UX checks are satisfactory. Do not claim all legacy clinical content is medically audited.
8. After production is working, submit `https://medspore.pages.dev/sitemap.xml` to Search Console. Do not delete your existing verification file.

## Build and maintenance

Requires Node 20+ only when editing static SEO content. No npm dependencies are required.

```bash
node tools/build-legal.mjs
node tools/build-content.mjs
node tools/validate.mjs
node --no-warnings --experimental-loader ./tools/qa-loader.mjs tools/smoke.mjs
```

This regenerates article/subject HTML pages and sitemap from the underlying data. **Commit regenerated pages as well as content**. Cloudflare's `exit 0` does not regenerate anything.

| You want to change... | Edit here |
| --- | --- |
| Light color scheme | `css/light-theme.css` |
| Dark color scheme | `css/dark-theme.css` |
| Layout/navbar/sidebar | `css/layout.css`, `js/components/layout.js` |
| Mobile/tablet/desktop behavior | `css/responsive.css` |
| Quiz layouts and options | `css/quiz.css`, `js/features/practice.js` |
| Sound and feedback | `js/services/sounds.js` |
| 19 subject questions | **One** of `data/subjects/*.js`; keep ten in starter version |
| Subject topic taxonomy | `data/subjects/registry.js` |
| NEET PG/INI exam rules | `data/config/exams.js` (verify official bulletin each session) |
| Mock tests and section timer | `js/features/tests.js` |
| Article content | `data/articles/<article-slug>.json` then regenerate HTML |
| Article organization/search | `js/features/library.js`, `data/articles/index.json` |
| Free notes or flashcard mnemonics | `data/notes/notes.js`, `data/flashcards/cards.js` |
| Achievements & goal | `js/features/profile.js` and `js/core/storage.js` |
| Cloud sign-in/sync | `js/services/auth.js`, `firestore.rules` |
| In-app notifications, optional push | `js/services/notifications.js`, `sw.js` |
| App install | `manifest.webmanifest`, `js/services/install.js` |
| SEO HTML pages/sitemap | `tools/build-content.mjs` and generated `subjects/`, `articles/` |

## Question schema

Each of 19 `data/subjects/<id>.js` modules exports exactly 10 objects using:

```js
{
  id: 'ANA-Q-000001',                  // permanent unique id, never recycle after publication
  legacyId: 1001,                      // migration reference from the supplied ZIP
  subjectId: 'anatomy', subject: 'Anatomy',
  topic: 'General Anatomy', chapter: 'Osteology...', level: 'Easy',
  prompt: 'A clinical vignette...',
  options: ['A', 'B', 'C', 'D'], correctIndex: 1, // 0-based index
  questionType: 'single',
  media: {kind:'diagram',key:'metaphyseal-flow',alt:'...'},
  explanation: {
    quick: 'One-line takeaway',
    details: ['Focused detail 1', 'Focused detail 2'],
    ruleOut: ['Option A —...', 'Option C —...', 'Option D —...'],
    media: {kind:'image',src:'/assets/questions/diagram.webp',alt:'...'}
  },
  reviewStatus: 'legacy-sample-unverified'
}
```

- Keep **stable IDs**; increasing the numeric suffix beyond 001000 is safe. IDs are scoped by subject prefix. Use `NPG-PYQ-...` and `INI-PYQ-...` for truly verified PYQs. Do not label reconstructed sample MCQs as actual official PYQs.
- Media are optional; upload external images under `/assets/` and supply an `alt`. Code-rendered SVG diagrams live in `js/features/media.js`. Raw user HTML/SVG strings are not rendered.
- Subject topics are separate from data: `data/subjects/registry.js` includes ENT's expanded curriculum headings. If you add a new topic, update registry and assign that topic to appropriate MCQs, then regenerate static pages.
- The starter bank **reuses ten questions from each subject in the original user-provided ZIP**, reformatted for the new explanation structure. This is not a completed medical accuracy review.

## Examinations

- **NEET PG 2026 simulation:** 180 MCQs; five time-restricted sections ×36 questions ×42 minutes; +4/−1 scoring. This differs from older 200-question versions. Source: official NBEMS exam portal and 2026 published bulletin; check subsequent official sessions before updating.
- **INI-CET July 2026 simulation:** 200 questions, four sections ×50 questions ×45 minutes, +1/−⅓ scoring. Official INI-CET permits multiple-correct question types, but this starter database only contains single-best-answer questions. A full 200-question simulation is disabled until 200 distinct questions exist.
- Half mocks scale each exam's question count/duration; these are *practice approximations*, not official half-sized exams. Mini and 10–20-question custom tests avoid meaningless section splits.
- Timer and mock answers are device-local while an exam is in progress; refreshing should usually preserve the attempt. To reduce browser interruptions, consider keeping a single tab open during a test.

## Firebase & notifications

Firebase web config (client-side, public) is in `js/services/auth.js` and `sw.js`. Data is stored locally first; a signed-in user can sync to `users/{uid}/private/state` when the supplied rules are deployed. Google and email/password sign-in require enabled providers. Photo stays local. There is **no admin SDK, secret server credential, billing feature, or payment integration** in this ZIP.

Firebase Cloud Messaging device registration is opt-in, available on supported browsers with an authenticated user. A background `sw.js` handler and secure Firestore token location are provided, but **no trusted server-side scheduler or push sender is implemented**. The notification bell/in-app inbox works independently. Reminder settings show an in-app reminder when the user opens MedSpore after the chosen time; they do not schedule closed-browser notifications.

No Google Apps Script service is required for this static learning website as currently designed. If you later add admin content ingestion or bulk question management, deploy a separate authenticated script/backend instead of exposing editable admin endpoints in the browser.

## Privacy and security

- No ad placement/automatic ads script is included; the owner-provided AdSense publisher tag and ads.txt are used only for site verification/authorization.
- No password, Firebase service account key or API secret is included.
- Question notes and learning progress are stored in local browser data (and optionally synchronized after sign-in). The current cloud document snapshot architecture should be migrated to per-record collections **before very large-scale activity** to avoid Firestore's 1 MiB per-document limit; this V1 demo is not yet unlimited scale.
- Clinical articles may contain dated guidance. They are *editorially reformatted legacy articles*, not all individually medically validated. Have a medically qualified reviewer inspect important clinical protocols before publicly presenting them as verified guidance.
- User's prior Google Search Console verification file is **not inside the source ZIP**. Preserve it separately.

## Test before production

`node tools/validate.mjs` checks data shape, duplicate IDs and generated pages; the separate smoke script renders 22 important application views in a Node test harness. Manual mobile/desktop browser checks remain necessary, particularly Firebase auth, real device installation, cross-browser push permissions and AdSense site review. Review the deployment with sample users before making claims of comprehensive medical validation or official exam fidelity.
