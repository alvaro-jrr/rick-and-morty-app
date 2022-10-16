import type { ReactNode } from "react";
import * as Styled from "./Section.styles";

interface Props {
	title: string;
	children: ReactNode;
}

export default function Section({ title, children }: Props) {
	return (
		<Styled.Wrapper>
			<Styled.Title>{title}</Styled.Title>

			<div>{children}</div>
		</Styled.Wrapper>
	);
}
