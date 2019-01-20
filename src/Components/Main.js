import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
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

class _Main extends Component {
  render() {
    return (
      <div className={`${this.props.className} App`}>
        
        <Header toggleDarkMode={this.props.toggleDarkMode} />

        <main className="d-flex flex-column align-items-center justify-content-center">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route path="/success" component={Success} />
            <Route path="/print" component={Print} />
            <Route component={Error} />
          </Switch>
        </main>

        <hr />

        <Footer />

      </div>
    );
  }
}

const Main = styled(_Main)`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.contrast};

  main {
    padding-top: 4rem;
    min-height: calc(${window.innerHeight}px - 7.5rem);
    overflow-x: hidden;

    @media (min-width: 768px) {
      min-height: calc(100vh - 5.6rem);
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
    transition: all .3s;
  }

  a:hover,
  a:focus,
  a:active {
    color: ${props => props.theme.color.brand};
  }

  hr {
    background-color: ${props => props.theme.color.contrast};
    opacity: .1;
  }

  #skills-graph {
    filter: ${props => props.darkMode ? 'invert(1)' : 'none'};
  }
`;

export default Main;