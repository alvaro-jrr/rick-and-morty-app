import { styled } from "../../stitches.config";

export const Characters = styled("section", {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
	gap: "2rem",
});
