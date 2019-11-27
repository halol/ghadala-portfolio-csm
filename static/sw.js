importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0164643489cfa129c65e.js",
    "revision": "2d981ed2a0db85766ba318f77a7408ab"
  },
  {
    "url": "/_nuxt/265b13045b2bbc490c9a.js",
    "revision": "edde90495f07b2093c93b37cff3eb807"
  },
  {
    "url": "/_nuxt/67e2b162e2812b27d17c.js",
    "revision": "4c6a56427233ca8aacba466096840811"
  },
  {
    "url": "/_nuxt/855c3234df8f01969449.js",
    "revision": "99dfde7c3d6f0c322bd38bfefbe52a66"
  },
  {
    "url": "/_nuxt/99a780efb5c0f6ffa04b.js",
    "revision": "973f5c0b555fd08fe2bdd3dd077930f6"
  },
  {
    "url": "/_nuxt/abc7ad3cdd2f755a5006.js",
    "revision": "12fa72e0bd52bcce5de712b9ed5ce943"
  },
  {
    "url": "/_nuxt/c07677c49e9df40fb232.js",
    "revision": "dda449a2b1799aeda34f7c19a677f006"
  },
  {
    "url": "/_nuxt/e25d1b3cc8d15b3afb7d.js",
    "revision": "a52101aa32e6b9f606cf759b8f38fb0c"
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
