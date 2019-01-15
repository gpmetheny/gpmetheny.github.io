import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import { Hamburger, HamburgerInner } from './Hamburger';
import { NavList, NavItem, StyledNavLink } from './Nav';
import SVG from './SVG';

import monstera from '../SVG/logo';

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
        this.setState(prevState => ({
          menuExpanded: !prevState.menuExpanded
        }));
      }
    });

    nav.addEventListener('focusout', (e) => {
      // will not fire if focus is on link, button, input, etc.
      // prevents interfering w/ default behavior (ff mobile bug)
      if (e.relatedTarget === null) {
        this.setState({
          menuExpanded: false
        });
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

          {/* create NavList w/ a function? DRY */}
          <NavList isExpanded={this.state.menuExpanded}>
            <NavItem isExpanded={this.state.menuExpanded}>
              <StyledNavLink
                to="/about"
                isExpanded={this.state.menuExpanded}>
                About
              </StyledNavLink>
            </NavItem>
            <NavItem isExpanded={this.state.menuExpanded}>
              <StyledNavLink
                to="/work"
                isExpanded={this.state.menuExpanded}>
                Work
              </StyledNavLink>
            </NavItem>
            <NavItem isExpanded={this.state.menuExpanded}>
              <StyledNavLink
                to="/resume"
                isExpanded={this.state.menuExpanded}>
                Resume
              </StyledNavLink>
            </NavItem>
            <NavItem isExpanded={this.state.menuExpanded}>
              <StyledNavLink
                to="/contact"
                isExpanded={this.state.menuExpanded}>
                Contact
              </StyledNavLink>
            </NavItem>
          </NavList>

        </nav>
      </header>
    );
  }
}

export default Header;