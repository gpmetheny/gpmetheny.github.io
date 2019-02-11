import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Work from './Work';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';
import Success from './Success';
import Error from './Error';
import Print from './Print';

const _Main = (props) => {
  return (
    <div className={`${props.className} App`}>
      
      <Header darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />

      <main className="d-flex flex-column align-items-center justify-content-center">
        <Switch>
          {/* routes that are styled components are causing error: */}
          {/* Warning: Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`. */}
          {/* Fixed in react-router #6447: merged, but not released */}
          {/* https://github.com/ReactTraining/react-router/issues/6471 */}
          {/* https://github.com/ReactTraining/react-router/pull/6447 */}
          <Route path="/" exact component={Home} />{/* error */}
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />{/* error */}
          <Route path="/contact" component={Contact} />{/* error */}
          <Route path="/success" component={Success} />{/* error */}
          <Route path="/print" component={Print} />
          <Route component={Error} />
        </Switch>
      </main>

      <hr />

      <Footer />

    </div>
  );
};

const Main = styled(_Main)`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.contrast};

  main {
    padding-top: 4rem;
    min-height: calc(${props => props.availableVH} - 6.5rem);
    overflow-x: hidden;

    @media (min-width: 768px) {
      min-height: calc(100vh - 4.6rem);
    }
  }

  a,
  a:hover,
  a:focus,
  a:active,
  a:visited {
    font-family: 'Roboto Mono', monospace;
    color: ${props => props.theme.color.contrast};
    font-weight: 700;
    text-decoration: underline;
    border-radius: 2px;
    transition: all .3s;
  }

  a:hover,
  a:focus,
  a:active {
    color: ${props => props.theme.color.brand};
    /* background-color: ${props => props.theme.color.flash}; */
  }

  hr {
    background-color: ${props => props.theme.color.contrast};
    opacity: .1;
    margin-top: 0;
  }

  #name {
    filter: ${props => props.darkMode ? 'invert(1) hue-rotate(-180deg) brightness(2.5)' : 'none'};
  }

  #skills-graph {
    filter: ${props => props.darkMode ? 'invert(1)' : 'none'};
  }
`;

export default Main;