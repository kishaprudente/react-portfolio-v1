import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Grommet, Main, ResponsiveContext } from "grommet";
import { dark } from "grommet/themes";
import { deepMerge } from "grommet/utils";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

import { NavBar } from "./components/NavBar";
import FooterComponent from "./components/Footer";

const { Consumer } = ResponsiveContext;

function App() {
	return (
		<Router>
			<Grommet background="white" full theme={customTheme}>
				<NavBar />
				<Main
					align="center"
					border={{ side: "top", size: "small", color: "black" }}
				>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/skills" component={Skills} />
					<Route exact path="/contact" component={Contact} />
				</Main>
				<FooterComponent />
			</Grommet>
		</Router>
	);
}

export default App;

const customTheme = deepMerge(dark, {
	global: {
		font: {
			family: "Lato",
			size: "18px",
			height: "20px",
			color: "white",
		},
		breakpoints: {
			small: {
				value: 768,
				borderSize: {
					xsmall: "1px",
					small: "2px",
					medium: "4px",
					large: "6px",
					xlarge: "12px",
				},
				edgeSize: {
					none: "0px",
					hair: "1px",
					xxsmall: "2px",
					xsmall: "3px",
					small: "6px",
					medium: "12px",
					large: "24px",
					xlarge: "48px",
				},
				size: {
					xxsmall: "24px",
					xsmall: "48px",
					small: "96px",
					medium: "192px",
					large: "384px",
					xlarge: "768px",
					full: "100%",
				},
			},
			medium: { value: 1536 },
			large: {},
		},
	},
});
