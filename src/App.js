import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Main from './Components/Main';

import theme from './theme';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: JSON.parse(localStorage.getItem('darkMode'))
                || false,
      availableVH: window.innerHeight + 'px',
      availableVW: window.innerWidth + 'px'
    };
  }

  handleDarkMode = () => {
    this.setState(prevState => {
      localStorage.setItem(
        'darkMode', !prevState.darkMode
      );
      return {
        darkMode: !prevState.darkMode
      }
    });
  }

  handleResize = () => {
    this.setState({
      availableVH: window.innerHeight + 'px',
      availableVW: window.innerWidth + 'px'
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {

    return (
      <HashRouter>
        <ThemeProvider theme={this.state.darkMode ? theme.dark : theme.light}>
          <Main
            darkMode={this.state.darkMode}
            toggleDarkMode={this.handleDarkMode}
            availableVH={this.state.availableVH}
            availableVW={this.state.availableVW}
           />
        </ThemeProvider>
      </HashRouter>
    );
  }
}

export default App;
