import type { Character, All, Information } from "@types";
import { BASE_URL, SCHEMA } from "./config";

/** Default value returned */
const defaultValue: All<Character> = { info: {} as Information, results: [] };

/**
 * Get all characters
 *
 * @returns {Promise<All<Character>>} Promise of All characters
 */
export const getCharacters = async (page = 1): Promise<All<Character>> => {
	/** Filter of characters */
	const searchParams = new URLSearchParams({ page: String(page) }).toString();

	const response: All<Character> = await fetch(
		`${BASE_URL}/${SCHEMA.Character}/?${searchParams}`
	)
		.then((response) => {
			if (!response.ok) {
				throw new Error(
					`Unexpected status code ${response.status}: ${response.statusText}`
				);
			}

			return response.json();
		})
		.catch((reason: Error) => {
			console.error(reason.message);

			return defaultValue;
		});

	return response;
};
