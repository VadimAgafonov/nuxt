<script setup>
import SiteHeader from "~/components/site/SiteHeader.vue";
import SiteFooter from "~/components/site/SiteFooter.vue";
</script>

<template>
	<div>
		<SiteHeader />
		<slot />
		<SiteFooter />
	</div>
</template>
