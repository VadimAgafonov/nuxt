<script setup>
import SiteHeader from "~/components/site/Header.vue";
import SiteFooter from "~/components/site/Footer.vue";
</script>

<template>
	<div>
		<SiteHeader />
		<slot />
		<SiteFooter />
	</div>
</template>
