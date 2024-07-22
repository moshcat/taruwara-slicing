// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],
  devtools: { enabled: true },
  css:['bootstrap/dist/css/bootstrap.min.css', '~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/abstracts/variables" as *;'
        }
      }
    }
  },


})
