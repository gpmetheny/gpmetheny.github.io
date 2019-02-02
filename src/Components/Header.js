import React, {Component} from 'react';
import styled from 'styled-components';

import Brand from './Brand';
import Hamburger from './Hamburger';
import NavList from './NavList';

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

    // will not fire if focus is on link, button, input, etc.
    // prevents interfering w/ default behavior (ff mobile bug)
    nav.addEventListener('focusout', (e) => {
      if (e.relatedTarget === null) {
        this.setState({
          menuExpanded: false
        });
      }
    });
  }

  render() {
    return (
      <header className={this.props.className}>
        <nav>
          <div className="wrapper">
            <Brand />
            <Hamburger menuExpanded={this.state.menuExpanded} />
          </div>
          <NavList isExpanded={this.state.menuExpanded} darkMode={this.props.darkMode} toggleDarkMode={this.props.toggleDarkMode} />
        </nav>
      </header>
    );
  }
}

const StyledHeader = styled(Header)`
  nav {
    background-color: ${props => props.theme.color.contrast};
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.color.contrast};
    z-index: 200;
  }

  a,
  a:hover,
  a:focus,
  a:active,
  a:visited {
    font-weight: normal !important;
    text-decoration: none !important;
  }
`;

export default StyledHeader;