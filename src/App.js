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
      darkMode: false
    };
  }

  handleDarkMode = () => {
    this.setState(prevState => {
      return {
        darkMode: !prevState.darkMode
      }
    });
  }

  render() {
    return (
      <HashRouter>
        <ThemeProvider theme={this.state.darkMode ? theme.dark : theme.light}>
          <Main darkMode={this.state.darkMode} toggleDarkMode={this.handleDarkMode} />
        </ThemeProvider>
      </HashRouter>
    );
  }
}

export default App;
