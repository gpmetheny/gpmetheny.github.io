import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import SVG from './SVG';

import monstera from '../SVG/logo';

const Hamburger = styled.button`
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto 0;
  padding: 1rem .75rem;
  width: 3rem;
  height: 3.5rem;
  cursor: pointer;

  &:hover {
    outline: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerInner = styled.span`
  width: 1.5rem;
  height: .25rem;
  background: ${props => props.menuExpanded
                ? props.theme.color.brand
                : props.theme.color.white};

  &:first-child {
    position: relative;
    top: ${props => props.menuExpanded
                ? '.625rem'
                : 0};
    transform: ${props => props.menuExpanded
                ? 'rotateZ(45deg) scaleX(1.2)'
                : 'none'};
    /* moves line down to center before rotating and scaling */
    transition: ${props => props.menuExpanded
                ? 'top .3s, transform .3s .3s'
                : 'transform .3s, top .3s .3s, background .3s .3s'};
  }

  &:nth-child(2) {
    margin: .375rem 0;
    opacity: ${props => props.menuExpanded
                ? 0
                : 1};
    transition: ${props => props.menuExpanded
                ? 'opacity .1s .3s'
                : 'opacity .3s .2s'};
  }

  &:nth-child(3) {
    position: relative;
    bottom: ${props => props.menuExpanded
                ? '.625rem'
                : 0};
    transform: ${props => props.menuExpanded
                ? 'rotateZ(-45deg) scaleX(1.2)'
                : 'none'};
    /* moves line up to center before rotating and scaling */
    transition: ${props => props.menuExpanded
                ? 'bottom .3s, transform .3s .3s'
                : 'transform .3s, bottom .3s .3s, background .3s .3s'};
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuExpanded: false
    };
  }

  componentDidMount() {
    const nav = document.querySelector('nav');

    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON' ||
          e.target.parentNode.tagName === 'BUTTON') {
        // use state to set isExpanded in ul instead
        // after componentizing ul
        nav.classList.toggle('menuActive');
        this.setState(prevState => ({
          menuExpanded: !prevState.menuExpanded
        }));
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

            <Hamburger>
              <HamburgerInner menuExpanded={this.state.menuExpanded} />
              <HamburgerInner menuExpanded={this.state.menuExpanded} />
              <HamburgerInner menuExpanded={this.state.menuExpanded} />
            </Hamburger>

          </div> {/* end menu wrap */}

          <ul> {/* can add isExpanded here once ul is a component */}
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