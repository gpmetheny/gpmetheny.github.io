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
                || false
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

  // hexToRGB = (hex) => {
  //   hex = hex.split('');
  //   let prefix = hex.shift();
  //   let rgb;
  //   if (hex.length === 3) {
  //     let r = hex[0] + hex[0];
  //     let g = hex[1] + hex[1];
  //     let b = hex[2] + hex[2];
  //     rgb = [r, g, b];
  //   } else if (hex.length === 6) {
  //     let r = hex[0] + hex[1];
  //     let g = hex[2] + hex[3];
  //     let b = hex[4] + hex[5];
  //     rgb = [r, g, b];
  //   } else {
  //     console.log('error!');
  //   }
  //   rgb = rgb.map(color => parseInt(color, 16));
  //   return rgb;
  // };
  
  // rgbToHex = (rgb) => {
  //   let hex = rgb.reduce((hexColor, value) => {
  //     value = value.toString(16);
  //     if (value.length === 1) {
  //       value = '0' + value;
  //     }
  //     return hexColor + value;
  //   }, '#');
  //   return hex;
  // };
  
  // invert = (hex) => {
  //   let rgb = this.hexToRGB(hex);
  //   let invertedRGB = rgb.map(color => 255 - color);
  //   console.log(this.rgbToHex(invertedRGB));
  // };

  render() {
  
    // this.invert('#f94e6d');

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
