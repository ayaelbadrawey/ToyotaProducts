// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  app: {
    head: {
      title: "TOYOTA",
      meta: [
        {
          name: "description",
          content: "TOYOTA MATERIAL HANDLING INTERNATIONAL",
        },
      ],
    },
  },
});
