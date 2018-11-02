import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import Feature from './Components/Feature';
import Work from './Components/Work';
import Resume from './Components/Resume';
import About from './Components/About';
import Contact from './Components/Contact';
import Success from './Components/Success';
import Error from './Components/Error';
import './Loading.css';
import './App.css';
import Switch from 'react-router-dom/Switch';

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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height="24" className="pr-2" id="monstera">
                    <path d=" M 38.583 55.119 C 38.207 56.362 37.632 57.547 36.866 58.631 C 36.533 59.102 36.164 59.555 35.759 59.984 C 34.776 60.872 33.614 61.547 32.343 61.993 C 31.959 62.128 31.566 62.242 31.164 62.335 C 30.008 62.56 28.84 62.657 27.678 62.624 C 26.516 62.591 25.361 62.43 24.232 62.137 C 23.598 61.973 22.972 61.767 22.357 61.52 C 21.198 61.061 20.079 60.521 19.012 59.903 C 17.945 59.286 16.928 58.589 15.973 57.817 C 15.446 57.392 14.937 56.943 14.449 56.471 C 14.153 56.186 12.43 53.552 12.15 53.25 C 17.751 58.067 38.329 44.425 31.497 37.969 C 33.253 40.972 12.428 53.904 9.65 49.125 C 9.436 48.691 9.806 49.605 9.618 49.157 C 9.412 48.668 9.222 48.169 9.047 47.663 C 8.613 46.522 8.291 45.402 7.9 44.25 C 6.391 42.92 25.418 33.882 26.175 32.878 C 27.037 34.303 9.144 47.017 7.9 44.25 C 7.736 43.634 5.822 37.505 5.673 36.884 C 5.542 36.343 5.894 37.171 5.775 36.625 C 6.51 41.46 24.008 37.133 22.9 30.625 C 23.297 32.25 5.002 33.563 4.263 30.27 C 3.94 28.605 3.554 26.796 3.275 25.125 C 1.418 22.943 13.523 21.233 15.041 21.429 C 15.631 21.851 4.122 27.405 3.275 25.25 C 3.148 24.328 1.958 16.513 1.845 15.59 C 2.844 19.695 14.392 24.845 13.15 18.75 C 13.552 19.538 2.14 13.915 1.558 11.373 C 1.482 10.546 1.412 9.719 1.346 8.892 C 1.3 8.301 1.256 7.71 1.215 7.119 C 1.151 6.183 1.093 5.248 1.043 4.312 C 0.965 2.875 0.905 1.438 0.861 0 C 2.307 0.163 8.681 1.64 10.122 1.831 C 13.579 3.307 16.849 15.49 16.775 14.5 C 22.283 18.866 17.456 5.924 15.242 2.099 C 16.549 2.334 17.855 2.58 19.158 2.837 C 21.711 3.548 20.367 16.427 19.944 16.15 C 20.453 19.307 17.87 5.658 19.15 2.875 C 20.815 3.251 28.415 4.862 30.072 5.275 C 33.298 6.822 29.328 24.689 29.4 24 C 33.691 25.503 38.952 8.174 35.9 7 C 36.691 7.225 38.495 7.544 39.282 7.79 C 43.235 9.952 33.38 28.172 32.535 27.066 C 29.498 40.32 33.371 19.842 39.4 7.75 C 40.032 7.989 49.782 11.693 50.39 11.978 C 51.571 12.53 49.706 11.408 50.775 12.125 C 54.139 13.897 40.588 32.224 39.212 32.041 C 43.72 36.652 58.92 19.415 55.275 15.75 C 56.362 17.045 60.09 20.397 60.843 21.886 C 61.219 22.63 61.553 23.396 61.844 24.182 C 62.134 24.968 62.353 25.977 62.555 26.8 C 63.76 30.821 62.712 35.058 59.728 38.166 C 59.102 38.687 58.43 39.124 57.717 39.477 C 57.004 39.829 56.251 40.097 55.464 40.279 C 53.822 40.568 52.162 40.702 50.507 40.682 C 48.852 40.663 47.201 40.491 45.576 40.169 C 44.939 40.042 44.306 39.893 43.678 39.721 C 42.266 39.426 40.88 39.066 39.505 38.631 C 38.948 38.455 46.394 50.412 53.549 57.363 C 57.779 61.472 63.452 62.191 63.125 62.063 C 51.018 72.87 36.236 34.595 38.033 41.831 C 38.284 42.844 38.49 43.862 38.652 44.884 C 38.814 45.906 38.931 46.933 39.006 47.964 C 39.086 49.057 39.118 50.156 39.104 51.258 C 39.136 52.575 38.959 53.876 38.583 55.119 Z " fill="rgb(1,189,92)"/>
                  </svg>
                  <h3>
                    <span className="sr-only">Home</span>
                    <span id="regex" aria-hidden={true}>^Gab+[iy]e?$</span>{
                      // eslint-disable-next-line
                    }<span id="gabbie" aria-hidden={true}>/* Gabbie */</span>
                    </h3>
                </NavLink>
                <button className="icon-wrap">
                  <span className="icon" id="icon-top"></span>
                  <span className="icon" id="icon-center"></span>
                  <span className="icon" id="icon-bottom"></span>
                </button>
              </div>
              <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/work">Work</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Feature} />
              <Route path="/work" component={Work} />
              <Route path="/about" component={About} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <Route path="/success" component={Success} />
              <Route component={Error} />
            </Switch>
            {/* <About /> */}
          </main>
          <hr />
          <footer className="container py-3">
          {/* fix footer! put in container, row, columns dependent on screen size, add in some padding-top and -bottom
          check styles applied in App.css */}
            <div className="row d-flex flex-column-reverse flex-md-row justify-content-between">
              <span className="text-center py-1"><small>&copy; 2018 Gabbie Metheny</small></span>
              <div className="py-1">
                <ul className="d-flex justify-content-center">
                  <li className="social-icon">
                    <a href="https://www.twitter.com/gpmetheny" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="twitter-icon">
                        <path fill="#1DA1F2" d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                      </svg>
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="https://www.linkedin.com/in/gpmetheny" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="linkedin-icon">
                        <path fill="#0077B5" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="https://www.github.com/gpmetheny" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="github-icon">
                        <path fill="#181717" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="https://www.codepen.io/gpmetheny" target="_blank" rel="noopener noreferrer">
                      <svg aria-labelledby="simpleicons-codepen-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="codepen-icon">
                        <path fill="#000000" d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z"/>
                      </svg>
                    </a>
                  </li>
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
