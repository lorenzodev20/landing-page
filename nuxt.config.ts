// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'font-awesome-4/css/font-awesome.min.css'
  ],
  devtools: { enabled: true },
  modules: [
    '@zadigetvoltaire/nuxt-gtm'
  ],
  // plugins: [
  //   '~/plugins/mailgun'
  // ],
  runtimeConfig: {
    mailgun: {
      username: process.env.MAILGUN_USERNAME,
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN
    },
    public: {
      gtm: {
        id: '',
        enabled: true,
        debug: true,
      }
    }
  }
})
