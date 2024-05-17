import ColorIndents from "~/debug/ColorIndents";
import { defineNuxtPlugin, onNuxtReady, useRoute } from '#app';
import '~/debug/entry.scss';
const indents = new ColorIndents(document);

export default defineNuxtPlugin(() => {
	const route = useRoute();

	if (route.query.debug) {
		onNuxtReady(async () => {
			setTimeout(() => {
				indents.init();
			}, 500);
		})

		if (process.client) {
			document.addEventListener("indents_on", () => {
				indents.indentsOn();
			});

			document.addEventListener("indents_off", () => {
				indents.indentsOff();
			});
		}
	}
})


