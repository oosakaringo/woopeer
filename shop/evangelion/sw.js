const version = 'v12';
// インストール時にキャッシュする
self.addEventListener('install', (event) => {
  console.log('service worker install ...');
  // キャッシュ完了までインストールが終わらないように待つ
  event.waitUntil(
    caches.open(version).then((cache) => {
      skipWaiting();
      return cache.addAll([
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
      ]);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    (function () {
      caches.keys().then(function (oldCacheKeys) {
        oldCacheKeys
          .filter(function (key) {
            return key !== version;
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
  console.log('fetch', event.request.url);
  event.respondWith(
    // リクエストに一致するデータがキャッシュにあるかどうか
    caches.match(event.request).then(function(cacheResponse) {
      // キャッシュがあればそれを返す、なければリクエストを投げる
      return cacheResponse || fetch(event.request).then(function(response) {
        return caches.open(version).then(function(cache) {
          // レスポンスをクローンしてキャッシュに入れる
          cache.put(event.request, response.clone());
          // オリジナルのレスポンスはそのまま返す
          return response;
        });  
      });
    })
  );
});
