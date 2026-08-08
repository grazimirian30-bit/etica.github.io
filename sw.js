const CACHE='margarida-maria-v2';
const ASSETS=['./','./index.html','./manifest.json','./assets/css/app.css','./assets/js/app.js','./assets/img/logo-margarida-maria.png','./assets/img/icon-192.png','./assets/img/icon-512.png','./assets/img/maria/01_boas_vindas_maria.png','./assets/img/maria/07_orcamento_whatsapp_maria.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
