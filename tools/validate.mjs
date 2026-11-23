// MedSpore V1 static / schema / routing validation. No npm dependencies.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { subjects } from '../data/subjects/registry.js';
import { EXAMS, getTestPreset } from '../data/config/exams.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const failures=[],warnings=[],metrics={};
const check=(condition,message)=>{if(!condition)failures.push(message)};
const has=p=>fs.existsSync(path.join(root,p));
const contents=p=>fs.readFileSync(path.join(root,p),'utf8');
const walk=(dir)=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(path.join(dir,x.name)):[path.join(dir,x.name)]);
const files=walk(root).map(x=>path.relative(root,x).split(path.sep).join('/'));
const idset=new Set();const originalIds=new Set();let mcqs=0,media=0,topicsUsed=new Set();
check(subjects.length===19,`Expected 19 subjects, got ${subjects.length}`);
const subjectIds=new Set();
for(const s of subjects){
 check(!subjectIds.has(s.id),`Duplicate subject id ${s.id}`);subjectIds.add(s.id);
 check(has(`data/subjects/${s.id}.js`),`Missing subject file: ${s.id}`);
 if(!has(`data/subjects/${s.id}.js`))continue;
 const qs=(await import(`../data/subjects/${s.id}.js`)).default;
 check(Array.isArray(qs)&&qs.length===(s.id==='microbiology'?1200:10),`${s.id} expected ${s.id==='microbiology'?1200:10} MCQs, got ${qs?.length}`);
 check(new Set(s.topics).size===s.topics.length,`${s.id} duplicates topic names`);
 for(const [i,q] of qs.entries()){
  mcqs++;
  check(typeof q.id==='string'&&/^[A-Z]{2,6}-Q-\d{6,}$/.test(q.id),`${s.id}[${i}] invalid stable ID ${q.id}`);
  check(!idset.has(q.id),`Duplicate question id ${q.id}`);idset.add(q.id);
  check(q.subjectId===s.id,`${q.id} wrong subject ${q.subjectId}`);
  check(q.subject===s.name,`${q.id} name mismatch`);
  check(Array.isArray(q.options)&&q.options.length===4&&q.options.every(x=>typeof x==='string'&&x.trim()),`${q.id} invalid options`);
  check(Number.isInteger(q.correctIndex)&&q.correctIndex>=0&&q.correctIndex<4,`${q.id} invalid correctIndex`);
  check(typeof q.prompt==='string'&&q.prompt.length>=30,`${q.id} short/invalid question`);
  check(['Easy','Moderate','Hard'].includes(q.level),`${q.id} invalid level: ${q.level}`);
  check(typeof q.topic==='string'&&q.topic.length>0,`${q.id} missing topic`);
  if(!s.topics.includes(q.topic))warnings.push(`${q.id} topic '${q.topic}' not listed in registry`);
  check(q.explanation&&typeof q.explanation.quick==='string'&&q.explanation.quick.length>10,`${q.id} missing quick explanation`);
  check(q.explanation&&Array.isArray(q.explanation.details)&&q.explanation.details.length>0,`${q.id} missing detailed explanation`);
  check(q.explanation&&Array.isArray(q.explanation.ruleOut)&&q.explanation.ruleOut.length>=1,`${q.id} no ruled-out options`);
  if(q.media){media++;check(['diagram','image'].includes(q.media.kind),`${q.id} unsupported media kind`)}
  if(q.legacyId!=null){const k=`${q.legacyId}`;check(!originalIds.has(k),`${q.id} duplicated legacy id ${k}`);originalIds.add(k)}
  topicsUsed.add(`${q.subjectId}/${q.topic}`);
 }
 check(has(`subjects/${s.slug}/index.html`),`Missing subject SEO page: ${s.slug}`);
}
metrics.questions=mcqs;metrics.subjects=subjects.length;metrics.questionMedia=media;metrics.activeTopicGroups=topicsUsed.size;
for(const [p,slug] of [['data/pyq/neetpg.js','neetpg'],['data/pyq/inicet.js','inicet']]){
 check(has(p),`Missing PYQ file ${p}`);if(has(p)){const data=(await import(`../data/pyq/${slug}.js`)).default;check(Array.isArray(data)&&data.length===0,`${slug} PYQ samples must remain empty unless verified`)}}
check(EXAMS.neetpg.fullQuestions===180&&EXAMS.neetpg.sections===5&&EXAMS.neetpg.fullMinutes===210,'NEET PG 2026 preset mismatch');
check(EXAMS.inicet.fullQuestions===200&&EXAMS.inicet.sections===4&&EXAMS.inicet.fullMinutes===180,'INI-CET 2026 preset mismatch');
check(getTestPreset('neetpg','half').count===90,'NEET PG half mock 90 mismatch');
check(getTestPreset('inicet','mini').count===50,'INI-CET mini mock 50 mismatch');
const articles=JSON.parse(contents('data/articles/index.json'));
check(articles.length>=150,`Expected at least 150 unique source articles; found ${articles.length}`);
const slugs=new Set(),articleIds=new Set();
for(const a of articles){
 check(!slugs.has(a.slug),`Duplicate article slug ${a.slug}`);slugs.add(a.slug);
 check(!articleIds.has(a.id),`Duplicate article id ${a.id}`);articleIds.add(a.id);
 const file=`data/articles/${a.slug}.json`;
 check(has(file),`Missing article JSON ${file}`);
 check(has(`articles/${a.slug}/index.html`),`Missing article HTML ${a.slug}`);
 if(has(file)){
  const article=JSON.parse(contents(file));
  check(article.id===a.id&&article.slug===a.slug,`Metadata mismatch for ${a.slug}`);
  check(typeof article.title==='string'&&article.title.length>=4,`Invalid article title ${a.slug}`);
  const contentText=[article.preview,...(article.quickRevision||[]),...(article.sections||[]).map(x=>(x.html||x.text||'')+' '+(x.points||[]).join(' '))].join(' ').replace(/<[^>]+>/g,' ');check(contentText.length>=360,`Article study content too short: ${a.slug}`);check(Array.isArray(article.quiz)&&article.quiz.length>=1,`Missing article quiz: ${a.slug}`);for(const q of article.quiz||[])check(q.options?.length===4&&Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4&&q.explanation?.length>25,`Invalid quiz item: ${a.slug}`);
 }
}
metrics.articles=articles.length;
for(const [mod,count,name] of [['data/flashcards/cards.js',5,'flashcards'],['data/notes/notes.js',3,'notes']]){
 check(has(mod),`Missing ${name}`);if(has(mod)){const data=(await import(`../${mod}`)).default;check(Array.isArray(data)&&data.length===count,`${name} expected ${count}, got ${data.length}`);metrics[name]=data.length}}
const pages=['/','/daily/','/practice/','/qbank/','/tests/','/exam/','/result/','/review/','/insights/','/profile/','/saved/','/mistakes/','/history/','/settings/','/articles/','/flashcards/','/notes/','/pyq/','/help/','/question/','/404/'];
for(const page of pages){const relative=page==='/'?'index.html':`${page.slice(1)}index.html`;check(has(relative),`Missing page ${relative}`)}
for(const file of ['manifest.webmanifest','sw.js','offline.html','ads.txt','robots.txt','sitemap.xml','firestore.rules','README.md','about.html','contact.html','privacy-policy.html','terms.html','css/light-theme.css','css/dark-theme.css','js/services/sounds.js','js/services/auth.js','js/services/notifications.js','assets/icons/icon-192.png','assets/icons/icon-512.png','assets/favicon.svg','assets/og-cover.png'])check(has(file),`Missing core asset ${file}`);
check(!contents('index.html').includes('noindex'), 'Homepage incorrectly noindex');
check(contents('exam/index.html').includes('noindex'), 'Personal exam screen should noindex');
const robots=contents('robots.txt');check(robots.includes('Sitemap:'),'robots.txt sitemap missing');
const sitemap=contents('sitemap.xml');let urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);metrics.sitemapUrls=urls.length;
check(urls.length===articles.length+29,`Expected ${articles.length+29} sitemap URLs but got ${urls.length}`);
check(new Set(urls).size===urls.length,'Duplicate sitemap urls');
for(const u of urls){check(u.startsWith('https://medspore.pages.dev/'),`Wrong canonical origin ${u}`);const route=u.replace('https://medspore.pages.dev/','');const p=route? (route.endsWith('.html')?route:`${route}index.html`):'index.html';check(has(p),`Sitemap references missing HTML: ${p}`)}
check(contents('index.html').includes('google-adsense-account'),'AdSense verification publisher meta missing');
check(!contents('index.html').includes('adsbygoogle.js'),'Auto Ads snippet unexpectedly included');
const manifest=JSON.parse(contents('manifest.webmanifest'));
check(manifest.name?.includes('MedSpore'),'PWA manifest name incorrect');
check(manifest.icons?.length>=2,'PWA icons missing');
// Every CSS/JS static import must point to an existing local module (or a trusted external CDN).
for(const f of files.filter(x=>x.endsWith('.js')||x.endsWith('.mjs'))){
 const text=contents(f);
 for(const match of text.matchAll(/(?:\bimport\s*(?:[^'";]*?\sfrom\s*)?|\bimport\s*\()\s*['"]([^'"]+)['"]/g)){
  const spec=match[1];if(spec.startsWith('node:')||/^https?:\/\//.test(spec))continue;
  if(spec.startsWith('./')||spec.startsWith('../')){const target=path.normalize(path.join(path.dirname(f),spec));check(has(target),`Broken import in ${f}: ${spec}`)}
  else if(spec.startsWith('/'))check(has(spec.slice(1)),`Broken absolute import in ${f}: ${spec}`);
 }
}
for(const f of files.filter(x=>x.endsWith('.js')||x.endsWith('.mjs'))){const res=spawnSync(process.execPath,['--check',path.join(root,f)],{encoding:'utf8'});check(res.status===0,`JavaScript syntax error ${f}: ${res.stderr.trim().slice(0,300)}`)}
metrics.files=files.length;
const lines=[
'# MedSpore V1 QA Report',
'',
'Generated by `node tools/validate.mjs`. This is a static/data/schema check, **not** a real-browser, authenticated Firebase, security audit, or medical peer review.',
'',
'## Checks',
'',
`- Result: **${failures.length?'FAIL':'PASS'}** (${failures.length} errors, ${warnings.length} non-blocking warnings)`,
`- 19 subject banks = **${mcqs}** MCQs (1,200 Microbiology + 18 starter sets), unique IDs verified`,
`- ${articles.length} unique source articles with generated individual HTML pages`,
`- ${metrics.flashcards||0} starter flashcards, ${metrics.notes||0} starter notes`,
`- 2 separate, intentionally empty unverified PYQ collections`,
`- ${urls.length} published routes in the sitemap`,
`- ${files.length} files in the project`,
'- JavaScript syntax and local imports checked',
'- PWA manifest, icons, offline fallback, AdSense account verification metadata and legal pages checked',
'',
'## Required manual checks before production',
'',
'1. Use Chrome/Firefox on Android, iOS PWA where supported, and desktop to inspect light/dark themes, layouts, nav and quizzes. Automated browser navigation was blocked in the packaging environment.',
'2. Verify and test Firebase Google/email sign-in; publish and security-test `firestore.rules` in your own Firebase project. Web Push delivery needs an additional secure sender.',
'3. Verify the exact AdSense publisher verification code matches the account; no ad placements or Auto Ads script have been installed.',
'4. Preserve the existing Google Search Console HTML verification file in your GitHub repository (not supplied in the old ZIP).',
'5. Clinically fact-check the legacy sample MCQs and article content, especially changing treatment recommendations. Refactoring is not peer review.',
'6. Full INI-CET mock requires at least 200 unique questions; the expanded overall bank is sufficient in count, but specialty mix and medical review require assessment.',
'7. Check exam patterns against the official bulletin for the actual future examination session.',
'',
'## Warnings',
...(warnings.length?warnings.map(x=>'- '+x):['- No non-blocking data warnings.']),
'',
'## Blocking errors',
...(failures.length?failures.map(x=>'- '+x):['- No blocking static validation errors.']),
''
];
fs.writeFileSync(path.join(root,'QA-REPORT.md'),lines.join('\n'));
console.log(JSON.stringify({status:failures.length?'FAIL':'PASS',metrics,failures:failures.slice(0,80),warnings:warnings.slice(0,20)},null,2));
if(failures.length)process.exitCode=1;
