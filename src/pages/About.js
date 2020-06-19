import React from 'react';
import styled from 'styled-components';
import { Box, Text, Image } from 'grommet';
import KPLogo from '../assets/KPlogo.png'
// import myPhoto from '../assets/my-photo.jpg';

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 1.5em;
`;

const StyledText = styled(Text)`
  align-self: center;
  font-size: 23px;
  font-Family: Karla;
`;

const Title = styled.h1`
  padding: 0.2em
`;

const Body = styled(Box)`
  display: flex;
  padding-right: 1.5em;
  padding-left: 1.5em;
  float: 1;
`;

const Logo = styled(Image)`
  display: flex;
  position: relative;
  right: 30px;
  width: 30%;
  height: 30%;
`;

const About = () => {
  return (
      <Container align='center' >
        <StyledText>
          <Title>01. ABOUT ME</Title>
  
          <Body>
          <p>Hi, My name is Kisha Prudente.</p>
          <p>
            Currently based in New York City.  I graduated with a
            Bachelor's in Software Engineering in the Philippines. I like to eat, sleep and code. I aim to develop high quality software, mobile, and web application
            with clean, elegant and efficient code.
          </p>
          <Logo src={KPLogo} />
          </Body>
        </StyledText>
      </Container>
  );
};

export default About;
