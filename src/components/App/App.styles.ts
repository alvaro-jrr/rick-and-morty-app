import { styled } from "../../stitches.config";

/** App wrapper */
export const Wrapper = styled("div", {
	display: "flex",
	flexFlow: "column nowrap",
	rowGap: "2rem",
});

/** Header wrapper */
export const Header = styled("header", {
	display: "flex",
	flexFlow: "column nowrap",
	rowGap: "2rem",
	marginTop: "5.125rem",
	paddingInline: "1.5rem",
});

/** Title and Subtitle wrapper */
export const HeadingWrapper = styled("div", {
	display: "flex",
	flexFlow: "column nowrap",
	rowGap: "1.5rem",
});

/** App title */
export const Title = styled("h1", {
	fontSize: "3rem",
});

/** App subtitle */
export const Subtitle = styled("p", {
	fontWeight: 500,
	fontSize: "1.5rem",
});

/** Content layout */
export const Content = styled("div", {
	display: "grid",
	gridTemplateColumns: "1fr min(60ch, calc(100% - 3rem)) 1fr",
	"& > *": { gridColumn: 2 },
});
