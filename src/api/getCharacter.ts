import type { Character } from "@types";
import { BASE_URL, SCHEMA } from "./config";

/**
 * Get single character
 *
 * @param {Character["id"]} id - Character identifier
 *
 * @returns {Promise<Character>} Promise of character
 */
export const getCharacter = async ({ id }: Character): Promise<Character> => {
    const response: Character = await fetch(
        `${BASE_URL}/${SCHEMA.Character}/${id}`
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
