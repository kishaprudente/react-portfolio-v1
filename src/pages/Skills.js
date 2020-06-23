import React from "react";
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import Responsive from '../components/Responsive';
import { Box, Heading, Paragraph } from 'grommet';
import { ShareOption, Monitor, Storage, Technology  } from 'grommet-icons';

const Container = styled(Box)`
  margin: 2em;
  align-items: center;
`;

const FrontendBox = () => (
    <Box
    elevation='large'
    pad='small'
    gap='small'
    justify='center'
    align='center'
    style={{ width: '250px', height: '350px' }}
  >
    <Monitor pad='medium' size='large' />
    <Heading style={{ alignSelf: 'center', margin: '5px' }} level={3}>
      Frontend
    </Heading>
    <Paragraph style={{ textAlign: 'center' }}>
      HTML, CSS, AJAX, jQuery, ReactJS, Handlebars, Bootstrap, Material UI
    </Paragraph>
  </Box>
);

const BackendBox = () => (
  <Box
  elevation='large'
  pad='small'
  gap='small'
  justify='center'
  align='center'
  style={{ width: '250px', height: '350px' }}
>
  <ShareOption pad='medium' size='large' />
  <Heading style={{ alignSelf: 'center', margin: '5px' }} level={3}>
    Backend
  </Heading>
  <Paragraph style={{ textAlign: 'center' }}>
    NodeJS, JavaScript, ExpressJS, FeathersJS, Webpack, Babel, PassportJS
  </Paragraph>
</Box>
);

const DatabaseBox = () => (
  <Box
  elevation='large'
  pad='small'
  gap='small'
  justify='center'
  align='center'
  style={{ width: '250px', height: '350px' }}
>
  <Storage pad='medium' size='large' />
  <Heading style={{ alignSelf: 'center', margin: '5px' }} level={3}>
    Database
  </Heading>
  <Paragraph style={{ textAlign: 'center' }}>
    MongoDB, MySQL, Mongoose, Sequelize
  </Paragraph>
</Box>
);

const OtherTechBox = () => (
  <Box
  elevation='large'
  pad='small'
  gap='small'
  justify='center'
  align='center'
  style={{ width: '250px', height: '350px' }}
>
  <Technology pad='medium' size='large' />
  <Heading style={{ alignSelf: 'center', margin: '5px' }} level={3}>
    Other
  </Heading>
  <Paragraph style={{ textAlign: 'center' }}>
    Git, Jest, ES6, PHP, Joi, Java, ESLINT, CI/CD, Travis CI, Heroku
  </Paragraph>
</Box>
);



const Skills = () => {
    return(
        <Container>
            <PageTitle>SKILLS</PageTitle>
            <Responsive gap='large' margin='large' columns='large' rows='large'>
                <FrontendBox />
                <BackendBox />
                <DatabaseBox />
                <OtherTechBox />
            </Responsive>
        </Container>
    )
}

export default Skills;