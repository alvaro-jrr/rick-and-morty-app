import type { Section } from "@types";
import { Outlet } from "react-router-dom";
import NavBar from "@components/NavBar";
import * as Styled from "./App.styles";

/** App sections */
const sections: Section[] = [
	{
		link: "/characters",
		title: "Characters",
	},
	{
		link: "/episodes",
		title: "Episodes",
	},
	{
		link: "/locations",
		title: "Locations",
	},
];

export default function App() {
	return (
		<Styled.Wrapper>
			<Styled.Header>
				<Styled.HeadingWrapper>
					<Styled.Title>Rick and Morty App</Styled.Title>

					<Styled.Subtitle>
						Find each description of every character, episode and
						location of your favorite animated series.
					</Styled.Subtitle>
				</Styled.HeadingWrapper>

				<NavBar sections={sections} />
			</Styled.Header>

			<Styled.Content>
				<Outlet />
			</Styled.Content>
		</Styled.Wrapper>
	);
}
