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
      <header className={this.props.className}>
        <nav>
          <div className="wrapper">
            <Brand />
            <Hamburger menuExpanded={this.state.menuExpanded} />
          </div>
          <NavList isExpanded={this.state.menuExpanded} />
        </nav>
      </header>
    );
  }
}

const StyledHeader = styled(Header)`
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #222;
    z-index: 200;
  }
`;

export default StyledHeader;