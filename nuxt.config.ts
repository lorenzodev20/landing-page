// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      gtmContainerId: '', // set NUXT_PUBLIC_GTM_CONTAINER_ID in .env file
    },
  },
})
