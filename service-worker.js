// Install event: Cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('convertlab-cache-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/script.js',
          '/icons/icon-192x192.png',
          '/icons/icon-512x512.png',
        ]);
      })
    );
  });
  
  // Fetch event: Serve cached content when offline
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  
  // Activate event: Cleanup old caches
  self.addEventListener('activate', (event) => {
    const cacheWhitelist = ['convertlab-cache-v1'];
    event.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(
          keyList.map((key) => {
            if (!cacheWhitelist.includes(key)) {
              return caches.delete(key);
            }
          })
        );
      })
    );
  });
  