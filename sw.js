var off = [
  '/',
  '/css/styles.css',
  '/css/reset.css',
  '/css/themes/yellow-black.css',
  'https://use.fontawesome.com/releases/v5.0.8/css/all.css',
  'https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:300'
]

self.addEventListener('install', function(ev) {
  ev.waitUntil(
    caches.open('v4baa').then(function(chache) {
      chache.addAll(off)
    })
  )
});

self.addEventListener('fetch', function(ev) {
  console.log("entrandos")
  ev.respondWith(
    caches.match(ev.request).then(function(response) {
      if(response){
        return response;
      }
      return fetch(ev.request)
    })
  )
});
