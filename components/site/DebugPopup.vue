<template>
	<div :class="className" ref="popupRef">
		<div @click="openPopup" class="open-close" ref="popupBtn"></div>
		<div class="content">
			<div class="option" @click="option">
				<label for="1">TITLE</label>
				<input
					type="checkbox"
					id="1"
					data-event="indents"
					class="show-debug"
					ref="checkbox"
					@change="handleCheckboxChange">
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const className = ref<string>("b-site-debug-popup");
const popupRef = ref<HTMLElement | null>(null);
const popupBtn = ref<HTMLElement | null>(null);
const checkbox = ref<HTMLInputElement | null>(null);

function openPopup() {
	if (popupRef.value && popupBtn.value) {
		popupRef.value.classList.toggle("active");
		popupBtn.value.classList.toggle("active");
	}
}

function option(event: Event) {
	event.stopPropagation();
}

function handleCheckboxChange() {
	if (checkbox.value) {
		const event = checkbox.value.dataset.event;
		if (checkbox.value.checked) {
			console.log(checkbox.value.dispatchEvent(new CustomEvent(`${event}_on`, { bubbles: true })),  'checked');
			checkbox.value.dispatchEvent(new CustomEvent(`${event}_on`, { bubbles: true }));
		} else {
			console.log(checkbox.value.dispatchEvent(new CustomEvent(`${event}_off`, { bubbles: true })),  'no-checked');
			checkbox.value.dispatchEvent(new CustomEvent(`${event}_off`, { bubbles: true }));
		}
	}
}

onMounted(() => {
	openPopup;
	option;
});
</script>

<style scoped lang="scss">
@import "~/assets/styles/style.scss";

$block-name: "b-site-debug-popup";

.#{$block-name} {
	width: 40px;
	min-height: 40px;
	background-color: $color-white;
	border-radius: 10px;
	border: 1px solid $color-black;
	display: block;
	position: fixed;
	right: 10px;
	bottom: 10px;
	z-index: 10000;
	transition:
		width 0.2s ease-in-out,
		min-height 0.2s ease-in-out;

	.content {
		display: none;
	}

	&.active {
		width: 300px;
		min-height: 500px;

		.content {
			display: block;
		}
	}

	.open-close {
		background-image: url("/acon-bluetooth.svg");
		background-position: center;
		background-size: contain;
		width: 20px;
		height: 20px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		cursor: pointer;

		&.active {
			top: 10px;
			right: 10px;
			left: inherit;
			bottom: inherit;
			margin: 0;
		}
	}

	&.content {
		padding: 50px 40px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	&.option {
		display: flex;
		align-items: center;
		justify-content: space-between;

		& label {
			cursor: pointer;
		}

		& input {
			height: 30px;
			cursor: pointer;
			width: 30px;
			margin-left: 10px;
			display: inline-block;
			flex: 0 0 auto;
		}
	}
}


</style>
