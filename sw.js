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
    caches.open('v4b').then(function(chache) {
      console.log('aqui ele nos cacheou')
      chache.addAll(off)
    })
  )
})
