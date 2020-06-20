import React from "react";
import styled from 'styled-components';
import { Box } from 'grommet';

const Container = styled(Box)`
    display: flex,
`;

const Title = styled.h1`
  padding: 0.2em
`;

const Projects = () => {
    return(
        <Container gap='medium' pad='medium'>
            <Title>02. Projects</Title>
        </Container>
    )
}

export default Projects;