import { styled } from "../../stitches.config";

export const Wrapper = styled("article", {
	display: "flex",
	flexFlow: "column nowrap",
	rowGap: "1rem",
	padding: "1rem",
	border: "1px solid",
});

export const Image = styled("img", {
	width: "100%",
	height: "auto",
	objectFit: "contain",
});

export const Name = styled("strong", {
	fontSize: "1.25rem",
	fontWeight: 600,
});

export const Information = styled("div", {
	display: "flex",
	flexFlow: "column nowrap",
	rowGap: ".5rem",
});

export const List = styled("ul", {
	display: "flex",
	flexFlow: "column nowrap",
	rowGap: ".25rem",
	padding: 0,
});

export const ListItem = styled("li", {
	listStyle: "none",
});

export const Description = styled("dl", {
	display: "flex",
	flexFlow: "row nowrap",
	justifyContent: "space-between",
});

export const Term = styled("dt", {
	fontWeight: 500,
});
