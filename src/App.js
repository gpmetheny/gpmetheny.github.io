import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import monstera from './img/monstera.svg';
import codepen from './img/codepen.svg';
import github from './img/github.svg';
import linkedin from './img/linkedin.svg';
import twitter from './img/twitter.svg';
import Feature from './Components/Feature';
import Work from './Components/Work';
import About from './Components/About';
import Contact from './Components/Contact';
import Success from './Components/Success';
import './App.css';

class App extends Component {
componentDidMount() {

  document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.className === 'icon-wrap' || e.target.className === 'icon') {
      document.querySelector('nav').classList.toggle('menuActive');
    }
    if (e.target.tagName === 'A') {
      document.querySelector('nav').classList.remove('menuActive');
    }
  });
  
}

  render() {
    return (
      <HashRouter>
        <div className="App">
          <header>
            <nav>
              <div className="menu-wrap">
                <NavLink className="logo-wrap" to="/">
                  <img src={monstera} alt="site logo" id="avatar" className="pr-2" />
                  <h3>/^Gab+[iy]e?$/</h3>
                </NavLink>
                <div className="icon-wrap">
                  <span className="icon" id="icon-top"></span>
                  <span className="icon" id="icon-center"></span>
                  <span className="icon" id="icon-bottom"></span>
                </div>
              </div>
              <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/work">Work</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </header>
          <main>
            <Route path="/" exact component={Feature} />
            <Route path="/work" component={Work} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/success" component={Success} />
            {/* <About /> */}
          </main>
          <footer className="container py-3">
          {/* fix footer! put in container, row, columns dependent on screen size, add in some padding-top and -bottom
          check styles applied in App.css */}
            <div className="row d-flex flex-column-reverse flex-md-row justify-content-around">
              <span className="text-center py-1">&copy; 2018 Gabbie Metheny</span>
              <div className="py-1">
                <ul className="d-flex justify-content-center">
                  <li className="social-icon"><a href="https://www.twitter.com/gpmetheny" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter Icon" /></a></li>
                  <li className="social-icon"><a href="https://www.linkedin.com/in/gpmetheny" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn Logo" /></a></li>
                  <li className="social-icon"><a href="https://www.github.com/gpmetheny" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub Logo" /></a></li>
                  <li className="social-icon"><a href="https://www.codepen.io/gpmetheny" target="_blank" rel="noopener noreferrer"><img src={codepen} alt="Codepen Logo" /></a></li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
