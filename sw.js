/* MedSpore offline shell. Versioned network-first strategy prevents old MCQ modules from masking new questions. */
const VERSION='medspore-v3-tablet-final-20261123';
const SHELL=['/','/css/base.css','/css/light-theme.css','/css/dark-theme.css','/css/layout.css','/css/components.css','/css/quiz.css','/css/responsive.css','/css/premium.css','/js/main.js','/manifest.webmanifest','/assets/icons/icon-192.png','/assets/icons/icon-512.png','/offline.html'];
self.addEventListener('install',event=>event.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('medspore-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 const url=new URL(req.url);const isData=url.pathname.startsWith('/data/')||url.pathname.startsWith('/js/')||url.pathname.startsWith('/css/')||url.pathname==='/manifest.webmanifest';
 if(req.mode==='navigate'||isData){event.respondWith(fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(VERSION).then(c=>c.put(req,copy)).catch(()=>{})}return res}).catch(async()=>await caches.match(req)||await caches.match(req.mode==='navigate'?'/offline.html':'/')));return}
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{if(res.ok&&['image','font'].includes(req.destination)){const copy=res.clone();caches.open(VERSION).then(c=>c.put(req,copy)).catch(()=>{})}return res})))
});
self.addEventListener('push',event=>{let payload={};try{payload=event.data?.json()||{}}catch{}const msg=payload.data||payload;event.waitUntil(self.registration.showNotification(msg.title||'MedSpore',{body:msg.body||'New learning update',icon:'/assets/icons/icon-192.png',badge:'/assets/icons/icon-192.png',data:{url:msg.url||'/'}}))});
self.addEventListener('notificationclick',event=>{event.notification.close();let path='/';try{const url=new URL(event.notification.data?.url||'/',self.location.origin);if(url.origin===self.location.origin)path=url.pathname+url.search}catch{}event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(async clients=>{const match=clients.find(c=>c.url.startsWith(self.location.origin)&&'focus'in c);if(match){await match.focus();return match.navigate(path)}return self.clients.openWindow(path)}))});
