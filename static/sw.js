importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/029e9b81359ef075b005.js",
    "revision": "078bb8961f81c568b9e3ebeaec06d561"
  },
  {
    "url": "/_nuxt/06bc6bb6a8fc3252a080.js",
    "revision": "ac59d46db92a737bf4c53b3c41c0ee96"
  },
  {
    "url": "/_nuxt/450d17e35f1dc3d2ba5c.js",
    "revision": "01ef246f0efcb54bc777992242bc61ea"
  },
  {
    "url": "/_nuxt/5842aa098ad6ac980fdb.js",
    "revision": "1c173647e36608e3e0334cc78db8bbfa"
  },
  {
    "url": "/_nuxt/616a785b37af7e25f537.js",
    "revision": "533d36b2c54d2cc123cf4e164a5543de"
  },
  {
    "url": "/_nuxt/a721c938321a6e707358.js",
    "revision": "b6764bf46c771ce441ae8349a289a105"
  },
  {
    "url": "/_nuxt/c75f462a5d2662261683.js",
    "revision": "8d65b2249dd6a314525dc934420ba810"
  },
  {
    "url": "/_nuxt/cfe2b97495101153e2da.js",
    "revision": "483a5b4e5c330be0b98cb20f253eeb00"
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
