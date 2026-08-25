import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/ionic', '@pinia/nuxt', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
  css: ['~/assets/css/main.css', '~/assets/css/ionic.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
