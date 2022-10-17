import type { All, Character } from "@types";
import type { LoaderFunctionArgs } from "react-router-dom";
import { Form, useLoaderData } from "react-router-dom";
import Section from "@components/Section";
import SingleCharacter from "@components/SingleCharacter";
import { getCharacters } from "@api/getCharacters";
import * as Styled from "./Characters.styles";

interface LoaderData {
	characters: All<Character>;
	page: number;
}

export async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const page = Number(url.searchParams.get("page")) || 1;
	const characters = await getCharacters(page);

	return { characters, page };
}

export default function Characters() {
	const { characters, page } = useLoaderData() as LoaderData;

	return (
		<Section title="Characters">
			<Styled.CharactersList>
				{characters.results.map((character) => {
					return (
						<SingleCharacter
							character={character}
							key={character.id}
						/>
					);
				})}
			</Styled.CharactersList>

			<Form>
				<Styled.Controls>
					<button
						name="page"
						value={page - 1}
						disabled={!characters.info.prev}
						type="submit"
					>
						Previous
					</button>

					<button
						name="page"
						value={page + 1}
						disabled={!characters.info.next}
						type="submit"
					>
						Next
					</button>
				</Styled.Controls>
			</Form>
		</Section>
	);
}
