import React from 'react';
import { Anchor, Box, Main, Nav } from "grommet";

const navItems = [
  { label: "HOME", href: "#" },
  { label: "PROJECTS", href: "#" },
  { label: "CONTACT", href: "#" },
];

const NavBar = () => (
    <Box background="dark-1" pad="large" fill>
      <Box direction="row" pad={{ vertical: "medium" }}>
        <Nav width="small" margin={{ right: "large" }}>
          {navItems.map(item => (
            <Anchor href={item.href} label={item.label} key={item.label} />
          ))}
        </Nav>
        <Main>Place main content here</Main>
      </Box>
    </Box>
);

export default NavBar;