import { ref, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';
import StyleConfig from "../utils/StyleConfig";

interface IndentElement {
	element: HTMLElement;
	parent: HTMLElement;
	class: string;
}

export function useColorIndents() {
	const indentsElements: Ref<IndentElement[]> = ref([]);
	const indentsClasses: Ref<string[]> = ref(Object.values(StyleConfig.get().indents));

	const init = (document: HTMLElement | Document) => {
		const doc = document as Document;

		indentsClasses.value.forEach((indentClass) => {
			const elements: NodeListOf<HTMLElement> = document.querySelectorAll(`.${indentClass}`);

			elements.forEach((element) => {
				let posEl: number | null = null;
				const posElLeft = element.getBoundingClientRect().left;
				const indentElement: HTMLElement = doc.createElement("div");
				indentElement.classList.add(`debug-${indentClass}`);

				if (element.parentNode) {
					element.parentNode.insertBefore(indentElement, element.nextSibling);
				}

				if (indentClass.includes("margin")) {
					if (indentClass.includes("bottom")) {
						posEl = element.offsetTop + element.offsetHeight;
					} else {
						posEl = element.offsetTop - indentElement.offsetHeight;
					}
				} else {
					if (indentClass.includes("bottom")) {
						posEl =
							element.offsetTop -
							indentElement.offsetHeight +
							element.offsetHeight;
					} else {
						posEl = element.offsetTop;
					}
				}

				indentElement.style.width = `${element.offsetWidth}px`;
				indentElement.style.top = `${posEl}px`;
				indentElement.style.left = `${posElLeft}px`;

				indentsElements.value.push({
					element: indentElement,
					parent: element as HTMLElement,
					class: indentClass,
				});
			});
		});

		window.addEventListener("resize", updatePosition);
	};

	const updatePosition = () => {
		indentsElements.value.forEach((indent) => {
			let posEl: number | null = null;
			const posElLeft = indent.parent.getBoundingClientRect().left;

			if (indent.class.includes("bottom")) {
				posEl = indent.parent.offsetTop + indent.parent.offsetHeight;
			} else {
				posEl = indent.parent.offsetTop - indent.element.offsetHeight;
			}

			indent.element.style.width = `${indent.parent.offsetWidth}px`;
			indent.element.style.top = `${posEl}px`;
			indent.element.style.left = `${posElLeft}px`;
		});
	};

	onMounted(() => {
		init(document);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", updatePosition);
	});

	return {
		init,
		updatePosition,
		indentsElements,
		indentsClasses,
	};
}
