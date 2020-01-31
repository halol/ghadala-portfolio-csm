import pkg from './package'
import info from './content/setup/info'
import path from 'path'
import glob from 'glob'

var dynamicRoutes = getDynamicPaths({
  '/work': 'work/*.json',
  '/page': 'page/*.json',
  '/art': 'art/*.json'
});


console.log(dynamicRoutes);

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: info.sitename,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Design thinker, artistic soul and a problem solver with pragmatic and holistic approach.' },
      {
        property: 'og:title',
        content: 'Grzegorz Hadala — Product Designer',
        // following template options are identical
        // template: '%s - My page',
        //template: chunk => `${chunk} - My page`,
        vmid: 'og:title'
      },
      {
        // og:title og:url og:image og:description missing
        property: 'og:description',
        content: 'Design thinker, artistic soul and a problem solver with pragmatic and holistic approach.',
        vmid: 'og:description'
      },
      {
        property: 'og:site_name',
        content: 'Grzegorz Hadala — Product Desiger',
        vmid: 'og:site_name'
      },
      {
        // data-hid="apple-mobile-web-app-title"
        property: 'apple-mobile-web-app-title',
        content: 'Grzegorz Hadala',
        hid: 'apple-mobile-web-app-title'
      }, {
        property: 'mobile-web-app-capable',
        content: 'Grzegorz Hadala',
        hid: 'mobile-web-app-capable'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
 loading: { color: 'blue'},

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      {
        src: '~/plugins/cloudinary.js',
        mode: 'client'
      },
      { src: '~plugins/ga.js', mode: 'client' }
      // TODO: GA.js
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
  ],
  markdownit: {
    injected: true,
    preset: 'default',
    breaks: true,
    html: true
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
  generate: {
    routes: dynamicRoutes
  },
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
