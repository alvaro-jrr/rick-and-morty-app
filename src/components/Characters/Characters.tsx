import type { All, Character } from "@types";
import { useLoaderData } from "react-router-dom";
import SingleCharacter from "@components/SingleCharacter";
import { getCharacters } from "@api/getCharacters";
import * as Styled from "./Characters.styles";

export async function loader() {
	const characters = getCharacters();
	return characters;
}

export default function Characters() {
	const characters = useLoaderData() as All<Character>;

	return (
		<Styled.Characters>
			{characters.results.map((character) => {
				return (
					<SingleCharacter character={character} key={character.id} />
				);
			})}
		</Styled.Characters>
	);
}
