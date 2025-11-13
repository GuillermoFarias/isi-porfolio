// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Isidora Farías | Diseñadora Gráfica',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portafolio de Isidora Farías — diseñadora gráfica especializada en branding para empresas tecnológicas. Proyectos de identidad visual, UI/UX y campañas digitales.' },
        { property: 'og:title', content: 'Isidora Farías | Diseñadora Gráfica' },
        { property: 'og:description', content: 'Portafolio de Isidora Farías — diseñadora gráfica especializada en branding para empresas tecnológicas.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.svg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://isidorafarias.cl' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Isidora Farías | Diseñadora Gráfica' },
        { name: 'twitter:description', content: 'Portafolio de Isidora Farías — diseñadora gráfica especializada en branding para empresas tecnológicas.' },
        { name: 'twitter:image', content: '/og-image.svg' }
      ],
      script: [
        { innerHTML: `console.log('Isidora Farías Portfolio');` },
        {
          src: '/init-theme.js',
          tagPosition: 'head',
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'alternate icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css',
        },
      ],
      bodyAttrs: {
        class: 'bg-white'
      }
    },
    pageTransition: false,
    layoutTransition: false
  },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxtjs/seo'],
  vite: {
    plugins: [tailwindcss()],
  },
})