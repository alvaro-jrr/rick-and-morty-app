import type { ReactNode } from "react";
import * as Styled from "./Section.styles";

interface Props {
	title: string;
	children: ReactNode;
}

export default function Section({ title, children }: Props) {
	return (
		<section>
			<Styled.Title>{title}</Styled.Title>

			<Styled.Content>{children}</Styled.Content>
		</section>
	);
}
