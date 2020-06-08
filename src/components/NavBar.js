import React from "react";
import { Header, Nav, Box, Anchor, Menu, ResponsiveContext } from "grommet";
import { Link } from "react-router-dom";

const navItems = [
	{ label: "about", href: "/about" },
	{ label: "projects", href: "/projects" },
	{ label: "contact", href: "/contact" },
	{ label: "skills", href: "/skills" },
];

const { Consumer } = ResponsiveContext;

export function HeaderContainer({children}) {
	return(
		<Header pad="medium" style={styles.header}>
			{children}
		</Header>
	)
}
export function NavBar() {
	// const location = useLocation();
	return(
		<Header pad="medium" style={styles.header}>
			<Box direction="row" gap="medium">
				<Anchor color="black" href="/">
				Kisha Prudente
				</Anchor>
			</Box>
			<Consumer>
			{size => size === "small" ? null : (
				<Nav direction="row">
					{navItems.map(item => (
					<Link style={styles.link} to={item.href} key={item.label}>{item.label}</Link>
					))}
				</Nav>
			)}
			</Consumer>
		</Header>
	)
}

const styles = {
	link: {
		textDecoration: "none",
		color: "black",
		focus: {
			color: "pink",
			size: "20px"
		}
	},
};
