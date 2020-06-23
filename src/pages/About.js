import React from 'react';
import styled from 'styled-components';
import { Box, Image } from 'grommet';
import Self from '../assets/self.jpg'
import PageTitle from '../components/PageTitle';
import Responsive from '../components/Responsive';

const Container = styled(Box)`
  margin: 2em;
  align-items: center;
`;


const Body = styled(Box)`
  padding-right: 1.5em;
  padding-left: 1.5em;
  text-align: center;
`;

const Logo = styled(Image)`
  width: 250px;
  height: 350px;
`;

const About = () => {
  return (
    <Container>
      <PageTitle>ABOUT ME</PageTitle>
      <Responsive pad='medium'>
      <Body>
          <Logo src={Self} />
      </Body>
      <Body>
          <p>H E L L O !</p>
          <p>
          My name is Kisha Prudente. Currently based in New York City. I graduated with a Bachelor's in
            Software Engineering in the Philippines. I like to eat, sleep and
            code. I aim to develop high quality software, mobile, and web
            application with clean, elegant and efficient code.
          </p>
        </Body>
      </Responsive>
    </Container>
  );
};

export default About;
