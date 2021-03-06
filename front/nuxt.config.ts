import Fiber from 'fibers'
import Sass from 'sass'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    /*
    ** Global CSS
    */
    '~/assets/scss/common',
  ],

  styleResources: {
    scss: ['~/assets/scss/_variable.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    true,
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
     extend(config: any, ctx: any) {}
  },

  server: {
    port: 3000,
    host: '0.0.0.0'
  }
}
