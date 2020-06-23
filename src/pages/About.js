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
      <Body gap='small'>
          <p>H E L L O !</p>
          <p>
          My name is Kisha Prudente. Currently based in New York City.
          </p>
          <p style={{ lineHeight: 1.5 }}>
          I am a Software Engineer devoted to making acceptable and high quality software and web applications. I am skilled in Web Development, ReactJS, JavaScript, NodeJS, Test Driven Development with a strong foundation in Agile methodologies and Sprint planning. I have a Bachelor’s degree in Software Engineering and a certificate in Full-Stack Web Development from Columbia University Engineering. I mostly take on the role of Full Stack Developer. I Look forward to being part of a team to develop better quality software and web applications.
          </p>
        </Body>
      </Responsive>
    </Container>
  );
};

export default About;
