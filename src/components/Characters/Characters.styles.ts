import { styled } from "../../stitches.config";

export const CharactersList = styled("div", {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
	gap: "1rem",
});
