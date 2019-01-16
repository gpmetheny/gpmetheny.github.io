import React, {Component} from 'react';

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
      <header>
        <nav>
          <div className="menu-wrap">
            <Brand />
            <Hamburger menuExpanded={this.state.menuExpanded} />
          </div> {/* end menu wrap */}
          <NavList isExpanded={this.state.menuExpanded} />
        </nav>
      </header>
    );
  }
}

export default Header;