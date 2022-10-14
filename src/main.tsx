import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@components/App";
import Characters, { loader as charactersLoader } from "@components/Characters";
import { globalStyles } from "./index.styles";

/** Router */
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/characters",
				loader: charactersLoader,
				element: <Characters />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{globalStyles()}

		<RouterProvider router={router} />
	</React.StrictMode>
);
