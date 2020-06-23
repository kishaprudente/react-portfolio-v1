import React from 'react';
import styled from 'styled-components';
import { Heading } from 'grommet';

const StyledTitle = styled(Heading)`
  padding: 0.3em;
  font-family: Karla;
  text-align: center;
`;


const PageTitle = ({children}) => {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}

export default PageTitle;