import { styled } from "../../stitches.config";
import { NavLink } from "react-router-dom";

export const List = styled("ul", {
	display: "flex",
	flexFlow: "row nowrap",
	justifyContent: "space-evenly",
	padding: 0,
	listStyle: "none",
});

export const ListItem = styled("li", {
	display: "block",
});

export const Link = styled(NavLink, {
	display: "block",
	padding: "1rem 0.5rem",
	fontWeight: 600,
});
