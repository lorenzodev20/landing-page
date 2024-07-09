// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  devtools: { enabled: true },
  modules: ['@zadigetvoltaire/nuxt-gtm'],
  runtimeConfig: {
    public: {
      gtm: {
        id: '',
        enabled: true,
        debug: true,
      }
    }
  }
})
