# MedSpore — Tablet-First Redesign Release

## Contents
- Full static website in a single GitHub-ready folder, including 19 medical subjects, 1,380 question-bank MCQs (1,200 Microbiology), 200 published article pages, article quizzes, saved articles, flashcards, starter notes, SEO and sitemap.
- Responsive phone/tablet/desktop home, sidebar/bottom navigation, clickable insights panels, multi-subject/topic QBank builder, instructions-before-tests, hidden answers before test submission, progress/resume, test result/review/history, saved/wrong question practice, date-wise insights, profile preferences and account login UI.
- Native install prompt when the browser permits it; iOS Safari home-screen instructions; branded 9:16 Story PNG for article and MCQ sharing, plus direct shareable SEO links to the article/question.
- Versioned network-first service worker and no-cache data/JS headers intended to prevent the old ten-question Microbiology module from continuing to display after deployment.
- One-command rebuild (`npm run build`) regenerates article data index, prerendered pages, shared-question SEO pages and sitemap; GitHub Actions workflow can regenerate when source data changes.

## Deploy and test
1. Keep a backup of the existing GitHub `medspore` repository. Prefer a new test/preview branch for the first deployment.
2. Copy the **contents** of this package into your repository root, without creating an extra nested folder. Never delete the `.git` directory. Review unexpected deletions and account-related files before commit.
3. Run `npm run build` and `npm test` with Node.js 20+ locally if available. Cloudflare Pages can use `npm run build` and the website root as output directory.
4. On HTTPS, test Home, 19 subjects, especially 1,200 Microbiology MCQs, the 200 articles, QBank topic combinations, instruction screen, exams and hidden feedback, resume/history, theme/sound, article/MCQ share preview and PWA install on a real mobile browser. A successful static build does not prove all browser interactions.
5. Ensure Firebase Auth providers, authorized domains, Firestore security rules and optional notification sender are correctly configured before claiming account sync or background notifications work.

## Important limitations
- The existing question and article content has **not** been medically peer-reviewed by a qualified specialist in this packaging process. Verify clinical facts, diagnostic thresholds, doses and guidelines independently before relying on them for patient care or publishing claims of peer review.
- The 200 article pages are complete static pages, but some contain relatively short clinical study summaries; they are not 200 comprehensive textbook chapters. Article-specific quiz count varies.
- Non-Microbiology subject banks currently have 10 questions each; five unique 20-question subject mocks cannot be generated for those subjects without adding questions. Test presets warn rather than silently duplicate questions.
- The two official PYQ collections are empty; no generated or guessed question is represented as a verified past-paper question.
- A website cannot guarantee a native PWA install prompt on every browser/device. Instagram Story image files are not themselves clickable; use the platform's link sticker with the supplied URL.
- Google/email login requires a live Firebase project with enabled providers, domain authorization and security rules. Closed-browser push requires a separately secured sender. AdSense approval is not guaranteed.
- Browser-based end-to-end QA and medically qualified fact checking remain outstanding. Existing automated build, content-schema and smoke rendering tests are not substitutes.
