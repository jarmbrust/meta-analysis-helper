// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    ['@nuxtjs/eslint-module', { /* module options */ }],
    '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: true },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  
})
