import config from "~/assets/styles/export.module.scss";

/* eslint-disable  @typescript-eslint/no-extraneous-class */
/**
 * Класс для работы с общим конфигом стилей
 */

type ConfigType = {
	siteBreakpoints: Record<string, number>;
	indents: Record<string, string>;
};

class StyleConfig {
	/**
	 * Возвращает объект, который содержит значения конфига стилей
	 *
	 * @returns {object}
	 */
	static get(): ConfigType {
		const obj = {
			siteBreakpoints: this.getCollection(
				"site-breakpoints",
				true,
			) as Record<string, number>,
			indents: this.getCollection("indents") as Record<string, string>,
		};

		return obj;
	}

	/**
	 * Собирает объект со значениями по названию параметра
	 * @param {string} name название параметра
	 * @param {boolean} px_to_number конвертировать px в числа
	 * @returns {Record<string, string | number>}
	 */
	static getCollection(
		name: string,
		px_to_number: boolean = false,
	): Record<string, string | number> {
		const obj: Record<string, string | number> = {};

		for (const [key, value] of Object.entries(config)) {
			if (key.includes(name)) {
				obj[key.replace(`${name}-`, "")] = px_to_number
					? this.getNumber(value as string)
					: value;
			}
		}

		return obj;
	}

	/**
	 * Из стилевого значения превращает в число
	 *
	 * @param {string} param
	 * @returns {number}
	 */
	static getNumber(param: string): number {
		return Number(param.replace("px", ""));
	}
}

export default StyleConfig;
