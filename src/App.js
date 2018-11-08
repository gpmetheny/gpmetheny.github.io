import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import Switch from 'react-router-dom/Switch';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Feature from './Components/Feature';
import Work from './Components/Work';
import Resume from './Components/Resume';
import About from './Components/About';
import Contact from './Components/Contact';
import Success from './Components/Success';
import Error from './Components/Error';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          
          <Header />

          <main className="d-flex flex-column align-items-center justify-content-center">
            <Switch>
              <Route path="/" exact component={Feature} />
              <Route path="/work" component={Work} />
              <Route path="/about" component={About} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <Route path="/success" component={Success} />
              <Route component={Error} />
            </Switch>
          </main>

          <hr />

          <Footer />

        </div>
      </HashRouter>
    );
  }
}

export default App;
