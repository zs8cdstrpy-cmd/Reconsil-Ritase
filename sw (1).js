// Service worker: simpan file aplikasi di HP supaya bisa dibuka tanpa sinyal.
// Naikkan angka VERSI setiap kali file aplikasi diganti.
var VERSI = 'ritase-v2';
var FILES = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSI).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== VERSI; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
    var net = fetch(e.request).then(function (r) {
      if (r && r.ok) { var cp = r.clone(); caches.open(VERSI).then(function (c) { c.put(e.request, cp); }); }
      return r;
    }).catch(function () { return hit; });
    return hit || net;
  }));
});
