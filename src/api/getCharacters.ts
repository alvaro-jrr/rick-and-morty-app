import type { Character, All } from "@types";
import { BASE_URL, SCHEMA } from "./config";

/**
 * Get all characters
 *
 * @returns {Promise<All<Character>>} Promise of All characters
 */
export const getCharacters = async (): Promise<All<Character>> => {
    const response: All<Character> = await fetch(
        `${BASE_URL}/${SCHEMA.Character}`
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

            return {};
        });

    return response;
};
