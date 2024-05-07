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
	}
});
