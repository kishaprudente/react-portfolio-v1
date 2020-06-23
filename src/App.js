import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Grommet, Main } from 'grommet';
import { dark } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

import { NavBar } from './components/NavBar';
import FooterComponent from './components/Footer';

function App() {
  return (
    <Router>
      <Grommet background='white' full theme={customTheme}>
        <NavBar />
        <Main border={{ side: 'top', size: 'small', color: 'black' }}>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/contact' component={Contact} />
        </Main>
        <FooterComponent />
      </Grommet>
    </Router>
  );
}

export default App;

const customTheme = deepMerge(dark, {
  global: {
    font: {
      family: 'Karla',
      size: '18px',
      height: '20px',
      color: "'white'",
    },
    breakpoints: {
      small: { value: 768 },
      medium: { value: 1536 },
      large: {},
    },
  },
});
