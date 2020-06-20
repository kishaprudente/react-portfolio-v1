import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Box, Text, Image, Anchor, Button } from "grommet";
import { Facebook, Linkedin, Github, Instagram, Mail } from 'grommet-icons';
import About from "./About";
import Projects from './Projects';
import myPhoto from '../assets/my-photo.jpg';
import flowerbg from '../assets/flowerbg.jpg';

const StyledLinks = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 25px;
`;

const Hero = styled(Box)`
    display: flex;
    alignContent: center;
    padding: 2em;
    justify: center;
    background-image: url(${flowerbg});
    background-attachment: fixed;
    width: 100%;
    height: 70%;
    background-size: cover;
`;

const Title = styled(Text)`
    text-align: center;
    font-size: 25px;
    font-family: Karla;
    font-weight: Bolder;
    text-shadow: 2px 2px darkgrey;
`;

const MyPhoto = styled(Image)`
    border-radius: 100px;
    width: 200px;
    height: 200px;
    display: flex;
    align-self: center;
`;

const ProjectButton = styled(Button)`
    text-align: center;
    align-self: center;
`;

const Home = () => {
    return(
        <div>
            <Hero gap='medium'>
                <MyPhoto opacity='strong' src={myPhoto} />
                <Title>
                <h2>Software Engineer</h2>
                <h2>Full Stack Web Developer</h2>
                </Title>
                <StyledLinks>
                    <Anchor icon={<Linkedin size='medium'/>} href='https://www.linkedin.com/in/kishalozada/'/>
                    <Anchor icon={<Github />} href='https://github.com/kishaprudente'/>
                    <Anchor icon={<Instagram />} href='https://www.instagram.com/kishamalzd/'/>
                    <Anchor icon={<Facebook />} href='https://www.facebook.com/kishaax'/>
                    <Anchor icon={<Mail />} href='mailto:kisha.prudente@gmail.com'/>
                </StyledLinks>
                <ProjectButton size='medium' label='See My Work' path='/projects'/>
            </Hero>
            <About />
            <Projects />
        </div>
    )
}

export default Home;
