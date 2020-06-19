import React from "react";
import { Header, Nav, Box, Anchor, Image, ResponsiveContext } from "grommet";
import { Link } from "react-router-dom";
import KPLogo from '../assets/KPlogo.png'

const navItems = [
	{ label: "ABOUT", href: "/about" },
	{ label: "PROJECTS", href: "/projects" },
	{ label: "SKILLS", href: "/skills" },
	{ label: "CONTACT", href: "/contact" },
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
	return(
		<Header pad="small" style={styles.header}>
			<Box direction="row" gap="medium">
				<Anchor color="black" href="/">
				<Image style={{width: '100px', height: '70px'}} src={KPLogo} />
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
