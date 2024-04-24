<script setup lang="ts">
const className: string = "b-site-header";
</script>

<template>
	<div :class="className">
		<p>Ага, вот эта шапка</p>
	</div>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/base.scss" as *;

$className: "b-site-header";

.#{$className} {
	display: flex;
	align-items: center;
	width: 100%;
	height: 200px;
	background-color: $color-bisque;
}
</style>
