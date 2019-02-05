import { 
  darken,
  invert,
  lighten
} from 'polished';

/* COLOR VARIABLES */

const _brand = '#f94e6d';
const _logo = '#01bd5c';
const _cyan = '#1dfbe8';
const _black = '#222';
const _white = '#fff';
const _gray = '#888';

/* FONT STACK VARIABLES */
const _monoStack = '"Roboto Mono", monospace';
const _sansStack = '"Comfortaa", sans-serif';

/* THEME OBJECT USED BY ThemeProvider */

const theme = {
  light: {
    color: {
      brand: _brand,
      brandInvert: invert(_brand),
      brandLight: lighten(.1, _brand),
      brandXLight: lighten(.2, _brand),
      brandDark: darken(.2, _brand),
      logo: _logo,
      logoInvert: invert(_logo),
      primary: _white,
      primaryTransparent: 'rgba(255, 255, 255, .7)',
      contrast: _black,
      contrastTransparent: 'rgba(0, 0, 0, .7)',
      contrastMild: lighten(.35, _gray),
      contrastMedium: darken(.1, _gray),
      black: _black,
      blackLight: lighten(.3, _black),
      white: _white,
      gray: _gray,
      laptopMonitor: lighten(.2, _cyan),
      laptopBase: _cyan,
      laptopHeart: lighten(.1, _brand)
    },
    font: {
      mono: _monoStack,
      sans: _sansStack
    }
  },
  dark: {
    color: {
      brand: _brand,
      brandInvert: invert(_brand),
      brandLight: lighten(.1, _brand),
      brandXLight: lighten(.2, _brand),
      brandDark: darken(.2, _brand),
      logo: _logo,
      logoInvert: invert(_logo),
      primary: _black,
      primaryTransparent: 'rgba(0, 0, 0, .7)',
      contrast: _white,
      contrastTransparent: 'rgba(255, 255, 255, .7)',
      contrastMild: darken(.25, _gray),
      contrastMedium: lighten(.3, _gray),
      black: _black,
      blackLight: lighten(.3, _black),
      white: _white,
      gray: _gray,
      laptopMonitor: lighten(.1, _brand),
      laptopBase: lighten(.05, _brand),
      laptopHeart: _brand
    },
    font: {
      mono: _monoStack,
      sans: _sansStack
    }
  }
};

export default theme;