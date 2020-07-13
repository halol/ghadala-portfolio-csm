importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07d1ce46251ec3b80fbd.js",
    "revision": "89c8874b2e8966c10d3085c3e3889578"
  },
  {
    "url": "/_nuxt/0fdd389f3b9cb28643c8.js",
    "revision": "38a3fdce1bf30eaf5fae819905713ea7"
  },
  {
    "url": "/_nuxt/2f0d3c6668f60ab85a23.js",
    "revision": "d40b037dd107298f41b1e37a6ed602ee"
  },
  {
    "url": "/_nuxt/3e462c638dd3814a7d17.js",
    "revision": "03c7a3cd9e9e6cab581bbfea895a96ef"
  },
  {
    "url": "/_nuxt/4306ca5d8add1f84b8ac.js",
    "revision": "baa77fb3f02c1641736b5f14e18dc086"
  },
  {
    "url": "/_nuxt/5ea407b08cda631c72ca.js",
    "revision": "0ec7683951e9358132a797786d43a72c"
  },
  {
    "url": "/_nuxt/706396c9560f3d102115.js",
    "revision": "d394469ef09f30c5ae69be1843ecd6e5"
  },
  {
    "url": "/_nuxt/97f4f5bff5832cb2108c.js",
    "revision": "59f3185eb7d3d46c0983280f89a978ff"
  },
  {
    "url": "/_nuxt/a3020b8f36826f531440.js",
    "revision": "f4b4ff003514ebb84d94aa38b9e9bbcc"
  },
  {
    "url": "/_nuxt/a5aefb7b16fa30773d17.js",
    "revision": "dc15aec7c7b291c4523dbb6050ab4fd9"
  },
  {
    "url": "/_nuxt/a6f9ae8f9ddb8dfb0fb4.js",
    "revision": "e99ea3341ccb04584c0d3cf833f4849d"
  },
  {
    "url": "/_nuxt/abb9631a92f8bddd8368.js",
    "revision": "f9319eeef4fb2dd82d7cd8887991535b"
  },
  {
    "url": "/_nuxt/e0597ccebff17d151299.js",
    "revision": "415a62f427847f2d0212569f638d621e"
  },
  {
    "url": "/_nuxt/e2f2fa9b22f77b4e6ca5.js",
    "revision": "07eb26195854b0fbceb790c247bed349"
  },
  {
    "url": "/_nuxt/eeb5bac8ad8f454501a0.js",
    "revision": "0705e68ecb0ce52c1e7876bd4b169904"
  }
], {
  "cacheId": "grzegorz-hadala-portfolio",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
