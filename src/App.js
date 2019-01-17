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
      mode: 'default'
    };
  }

  render() {
    return (
      <HashRouter>
        <ThemeProvider theme={this.state.mode === 'dark' ? theme.dark : theme.light}>
          <Main />
        </ThemeProvider>
      </HashRouter>
    );
  }
}

export default App;
