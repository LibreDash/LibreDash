// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@libredash/core", "@libredash/navigation", "@libredash/dashboard"],
  modules: ["@nuxt/eslint"],
  compatibilityDate: "2024-11-01",
  future: { compatibilityVersion: 4 },
});
