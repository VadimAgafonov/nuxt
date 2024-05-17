<script setup>
import SiteHeader from "~/components/site/SiteHeader.vue";
import SiteFooter from "~/components/site/SiteFooter.vue";
import DebugPopup from "~/components/site/DebugPopup.vue";
</script>

<template>
	<div>
		<SiteHeader />
		<DebugPopup />
		<slot />
		<SiteFooter />
	</div>
</template>
