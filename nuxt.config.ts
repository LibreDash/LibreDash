// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [["gh:LibreDash/core", { install: true }]],
  modules: ["@nuxt/eslint"],
  compatibilityDate: "2024-11-01",
  future: { compatibilityVersion: 4 },
});
