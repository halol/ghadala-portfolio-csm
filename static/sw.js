importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2e088bc5b0ac8a76861f.js",
    "revision": "1616365f9eb945be296d498876903633"
  },
  {
    "url": "/_nuxt/6e1d6a190eb18bacc2b9.js",
    "revision": "2a0f21564c906d277a7239725e80490b"
  },
  {
    "url": "/_nuxt/988d2a84e6bbf0eba472.js",
    "revision": "2b09c402d7e7664638cbd79d3f0f69a4"
  },
  {
    "url": "/_nuxt/9ee80869cdc2f64870ba.js",
    "revision": "de5947021464ca7e03ca5bb87f56f62d"
  },
  {
    "url": "/_nuxt/9f83002f65153736d498.js",
    "revision": "e983ea305c35f3cfdcc876a5cf75d805"
  },
  {
    "url": "/_nuxt/e33b874c11ff8155672c.js",
    "revision": "2c3a068674f4d73e6985ee290085efe7"
  },
  {
    "url": "/_nuxt/e77cf04799c9e34bf08e.js",
    "revision": "3b208393988ad27b0d5c6b78557a35f6"
  },
  {
    "url": "/_nuxt/f7ab8eeacad8156b88b3.js",
    "revision": "c0b5dec79a222d3f349c1ab2f770ec47"
  }
], {
  "cacheId": "nuxt-netlifycms-boilerplate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
