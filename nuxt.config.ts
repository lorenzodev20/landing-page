// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
