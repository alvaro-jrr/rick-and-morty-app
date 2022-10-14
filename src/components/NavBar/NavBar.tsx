import type { Section } from "@types";
import * as Styled from "./NavBar.styles";

/** NavBar props */
interface Props {
	/** List of sections */
	sections: Section[];
}

export default function NavBar({ sections }: Props) {
	return (
		<nav>
			<Styled.List>
				{sections.map((section) => {
					return (
						<Styled.ListItem key={section.link}>
							<Styled.Link to={section.link}>
								{section.title}
							</Styled.Link>
						</Styled.ListItem>
					);
				})}
			</Styled.List>
		</nav>
	);
}
