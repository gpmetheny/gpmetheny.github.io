import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import SVG from './SVG';

import monstera from '../SVG/logo';

class Header extends Component {
  componentDidMount() {
    const nav = document.querySelector('nav');

    nav.addEventListener('click', (e) => {
      if (e.target.className === 'icon' ||
          e.target.className === 'icon-wrap') {
        nav.classList.toggle('menuActive');
      }
    });

    nav.addEventListener('focusout', (e) => {
      // will not fire if focus is on link, button, input, etc.
      // prevents interfering w/ default behavior (ff mobile bug)
      if (e.relatedTarget === null) {
        nav.classList.remove('menuActive');
      }
    });
  }

  render() {
    return (
      <header>
        <nav>

          <div className="menu-wrap">

            <NavLink className="logo-wrap" to="/">
              <SVG
                className="pr-2"
                viewBox={monstera.viewBox}
                height={monstera.height}
                paths={monstera.paths}
              />
              <h3>
                <span className="sr-only">Home</span>
                <span id="regex" aria-hidden={true}>&nbsp;Gab+[iy]e?&nbsp;</span>{
                  // eslint-disable-next-line
                }<span id="gabbie" aria-hidden={true}>/* Gabbie */</span>
                </h3>
            </NavLink> {/* end logo wrap */}

            <button className="icon-wrap">
              <span className="icon" id="icon-top"></span>
              <span className="icon" id="icon-center"></span>
              <span className="icon" id="icon-bottom"></span>
            </button> {/* end icon wrap */}

          </div> {/* end menu wrap */}

          <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/work">Work</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

        </nav>
      </header>
    );
  }
}

export default Header;