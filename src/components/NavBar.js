import React from "react";
import { Anchor, Nav } from "grommet";
import { Link } from "react-router-dom";

const navItems = [
	{ label: "about", href: "/" },
	{ label: "projects", href: "/projects" },
	{ label: "contact", href: "/contact" },
];

const NavBar = () => (
	<Nav direction="row" align="right">
		{navItems.map((item) => (
			<Anchor href={item.href} label={item.label} key={item.label}>
				<Link to={item.href} />
			</Anchor>
		))}
	</Nav>
);

export default NavBar;
