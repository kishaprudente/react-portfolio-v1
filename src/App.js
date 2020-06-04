import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Grommet, Box, Header } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

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
		<Router>
			<Grommet full theme={customTheme}>
				<Header pad="medium">
					<Box direction="row" align="center" gap="small">
						<NavBar />
					</Box>
				</Header>
				<Route exact path="/" component={About} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/contact" component={Contact} />
			</Grommet>
		</Router>
	);
}

export default App;
