import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import { ThemeProvider } from 'styled-components';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Work from './Components/Work';
import Resume from './Components/Resume';
import About from './Components/About';
import Contact from './Components/Contact';
import Success from './Components/Success';
import Error from './Components/Error';
import Print from './Components/Print';

import theme from './theme';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <ThemeProvider theme={theme}>
          <div className="App">
            
            <Header />

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
        </ThemeProvider>
      </HashRouter>
    );
  }
}

export default App;
