// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-module',
  },
  routeRules: {
    '/**': {
      cache: {
        swr: true,
        varies: ['host', 'x-forwarded-host']
      }
    }
  },
});
