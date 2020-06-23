import React from 'react';
import styled from 'styled-components';
import projects from '../utils/projects';
import { Box, Heading, Image, Text, Anchor, Button } from 'grommet';
import PageTitle from '../components/PageTitle';
import Responsive from '../components/Responsive';

const Container = styled(Box)`
  margin: 2em;
  align-items: center;
`;

const projectBoxes = projects.map((project) => (
  <Box
    elevation='large'
    key={project.id}
    pad='small'
    gap='small'
    justify='center'
    align='center'
  >
    <Heading style={{ alignSelf: 'center' }} level={3}>
      {project.title}
    </Heading>
    <Image
      src={project.image}
      fit='contain'
      style={{ width: '450px', height: '300px' }}
    />
    <Text>
      <i>{project.description}</i>
    </Text>
    <Button
      primary
      active
      style={{ paddingLeft: '20px', paddingRight: '20px' }}
    >
      <Anchor href={project.repo} label='REPO' />
    </Button>
    <Button
      primary
      active
      style={{ paddingLeft: '20px', paddingRight: '20px' }}
    >
      <Anchor href={project.demo} label='DEPLOYED' />
    </Button>
  </Box>
));

const Projects = () => {
  return (
    <Container>
      <PageTitle>PROJECTS</PageTitle>
      <Responsive gap='medium' margin='medium' columns='medium' rows='medium'>
        {projectBoxes}
      </Responsive>
    </Container>
  );
};

export default Projects;
