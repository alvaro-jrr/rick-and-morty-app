import { styled } from "../../stitches.config";

export const Wrapper = styled("div", {
	display: "flex",
	flexFlow: "column nowrap",
	rowGap: "1rem",
	padding: "1rem",
});

export const Image = styled("img", {
	width: "100%",
	height: "auto",
	objectFit: "contain",
});
