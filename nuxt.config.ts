// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: {
		port: 8080,
	},
	css: [
		"~/assets/styles/app.scss",
	],
	imports: {
		// Отключение автоимпорта composables и utilities
		autoImport: false,
	},
	components: {
		// Отключение автоимпорта компонентов
		dirs: [],
	},
	runtimeConfig: {
		public: {
			debug: process.env.NUXT_DEBUG_TOOLS
		}
	},
	plugins: [
		JSON.parse(process.env.NUXT_DEBUG_TOOLS || 'false') ? '~/plugins/debug/entry.ts' : undefined
	].filter(Boolean)
});
