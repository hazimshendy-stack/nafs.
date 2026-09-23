const CACHE='nafs-v2';
const ASSETS=['./','./index.html','./style.css','./script.js','./manifest.json','./slides/data/slides.js','./assets/icons/favicon.svg'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{})).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
    if(resp.ok && new URL(e.request.url).origin === location.origin){
      const clone = resp.clone(); caches.open(CACHE).then(c=>c.put(e.request, clone));
    }
    return resp;
  }).catch(()=>caches.match('./index.html'))));
});
