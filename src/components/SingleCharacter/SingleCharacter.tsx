import type { Character } from "@types";
import { memo } from "react";
import * as Styled from "./SingleCharacter.styles";

/** SingleCharacter props */
interface Props {
	character: Character;
}

function SingleCharacter({ character }: Props) {
	return (
		<Styled.Wrapper>
			<figure>
				<Styled.Image src={character.image} width={300} height={300} />
			</figure>

			<Styled.Information>
				<p>
					<Styled.Name>{character.name}</Styled.Name>
				</p>

				<Styled.List>
					<Styled.ListItem>
						<Styled.Description>
							<Styled.Term>Status</Styled.Term>
							<dd>{character.status}</dd>
						</Styled.Description>
					</Styled.ListItem>

					<Styled.ListItem>
						<Styled.Description>
							<Styled.Term>Gender</Styled.Term>
							<dd>{character.gender}</dd>
						</Styled.Description>
					</Styled.ListItem>

					<Styled.ListItem>
						<Styled.Description>
							<Styled.Term>Species</Styled.Term>
							<dd>{character.species}</dd>
						</Styled.Description>
					</Styled.ListItem>
				</Styled.List>
			</Styled.Information>
		</Styled.Wrapper>
	);
}

export default memo(
	SingleCharacter,
	(prevProps, nextProps) => prevProps.character.id === nextProps.character.id
);
