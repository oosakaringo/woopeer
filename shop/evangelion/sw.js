const CACHE_NAME = 'v16';
const urlsToCache = [
  '/shop/evangelion/index.html',
  '/shop/evangelion/comic.html',
  '/shop/evangelion/goods.html',
  '/shop/evangelion/goods01.html',
  '/shop/evangelion/music.html',
  '/shop/evangelion/fashion.html',
  '/shop/evangelion/app.js',
  '/shop/evangelion/load_data_set.js',
  '/shop/evangelion/evangelion_shop.css',
  '/js/ripple.js',
  '/css/base.css',
  '/css/ripple.css',
  '/css/print.css',
  '/shop/evangelion/img/top_icon.png',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    (function () {
      caches.keys().then(function (oldCacheKeys) {
        oldCacheKeys
          .filter(function (key) {
            return key !== CACHE_NAME;
          })
          .map(function (key) {
            return caches.delete(key);
          });
      });
      clients.claim();
    })()
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        var fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
    );
});
