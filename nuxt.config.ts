// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Italian Rust — Sito ufficiale",
      meta: [
        {
          name: "description",
          content: "Benvenuti nel sito ufficiale italiano di Rust. Ottieni tutte le informazioni sulla connessione ai server Exile qui."
        }
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/italian_favicon.png"
        }
      ]
    }
  }
})