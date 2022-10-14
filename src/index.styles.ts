import { globalCss } from "./stitches.config";

/** App global styles */
export const globalStyles = globalCss({
	/**
	 * Josh's Custom CSS Reset
	 * @link https://www.joshwcomeau.com/css/custom-css-reset/
	 */
	"*, *::before, *::after": {
		boxSizing: "border-box",
	},
	"*": { margin: 0 },
	"html, body": {
		height: "100%",
	},
	body: {
		lineHeight: 1.5,
		"-webkit-font-smoothing": "antialised",
		/** Regular font */
		fontFamily: "Plus Jakarta Sans, sans-serif",
	},
	"img, picture, video, canvas, svg": {
		display: "block",
		maxWidth: "100% ",
	},
	"input, button, textarea, select": {
		font: "inherit",
	},
	"p, h1, h2, h3, h4, h5, h6": {
		overflowWrap: "break-word",
	},
	"#root, #__next": {
		isolation: "isolate",
	},
});
