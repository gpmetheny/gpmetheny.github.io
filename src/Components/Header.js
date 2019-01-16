import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import Hamburger from './Hamburger';
import NavList from './NavList';
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

            <Hamburger menuExpanded={this.state.menuExpanded} />

          </div> {/* end menu wrap */}

          {/* create NavList w/ a function? DRY */}
          <NavList isExpanded={this.state.menuExpanded} />

        </nav>
      </header>
    );
  }
}

export default Header;