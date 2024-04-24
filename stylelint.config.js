/** @type {import('stylelint').Config} */
export default {
	extends: [
		"stylelint-config-standard-scss",
		"stylelint-config-recommended-vue",
	],
	rules: {
		"at-rule-no-unknown": null,
		"no-descending-specificity": null,
		"font-family-no-missing-generic-family-keyword": null,
		"no-duplicate-selectors": null,
		"scss/comment-no-empty": null,
		"scss/at-rule-conditional-no-parentheses": null,
		"scss/at-mixin-pattern": null,
		"scss/dollar-variable-empty-line-before": null,
		"declaration-block-no-redundant-longhand-properties": null,
		"selector-class-pattern": "^([a-z][a-z0-9]*)((-|__)[a-z0-9]+)*$",
	},
};
