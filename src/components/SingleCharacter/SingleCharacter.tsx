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

			<div>
				<p>
					<strong>{character.name}</strong>
				</p>
			</div>
		</Styled.Wrapper>
	);
}

export default memo(
	SingleCharacter,
	(prevProps, nextProps) => prevProps.character.id === nextProps.character.id
);
