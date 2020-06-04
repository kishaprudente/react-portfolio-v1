import React from "react";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import NavBar from "./components/NavBar";

const customTheme = deepMerge(grommet, {
	anchor: {
		textDecoration: "none",
		fontWeight: 500,
		color: {
			dark: "white",
			light: "neutral-2",
		},
		hover: {
			textDecoration: "none",
			fontWeight: 700,
		},
	},
});

function App() {
	return (
		<Grommet full theme={customTheme}>
			<NavBar />
		</Grommet>
	);
}

export default App;
