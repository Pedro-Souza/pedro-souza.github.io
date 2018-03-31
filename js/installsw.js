(function () {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').then((a) => {
      console.log("registrando serviceWorker")
    }).catch((_) => {
      console.log("Algo errado com o serviceWorker");
    })
  } else {
    console.log('not serviceworker')
  }
})()
