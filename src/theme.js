/* COLOR FUNCTIONS */

// returns an array of [r, g, b] from a hex code
const hexToRGB = (hex) => {
  let rgb;
  hex = hex.split('');
  // removes hash
  if (hex.length % 3) {
    hex.shift();
  }
  if (hex.length === 3) {
    let r = hex[0] + hex[0];
    let g = hex[1] + hex[1];
    let b = hex[2] + hex[2];
    rgb = [r, g, b];
  } else if (hex.length === 6) {
    let r = hex[0] + hex[1];
    let g = hex[2] + hex[3];
    let b = hex[4] + hex[5];
    rgb = [r, g, b];
  }
  rgb = rgb.map(color => parseInt(color, 16));
  return rgb;
};

// returns a valid hex code from an [r, g, b] array
const rgbToHex = (rgb) => {
  let hex = rgb.reduce((hexColor, value) => {
    // converts decimal to hex
    value = value.toString(16);
    // zero-pads if hex is single digit
    if (value.length === 1) {
      value = '0' + value;
    }
    return hexColor + value;
  }, '#');
  return hex;
};

// returns the inverted hex from a hex code
const invert = (hex) => {
  let rgb = hexToRGB(hex);
  let invertedRGB = rgb.map(color => 255 - color);
  return rgbToHex(invertedRGB);
};

// 
const lighten = (hex, amount) => {
  let rgb = hexToRGB(hex);
  let lightenedRGB = rgb.map(color => {
    let lightenedValue = Math.floor(color + amount);
    if (lightenedValue > 255) {
      lightenedValue = 255;
    }
    return lightenedValue;
  });
  return rgbToHex(lightenedRGB);
};

// 
const darken = (hex, amount) => {
  let rgb = hexToRGB(hex);
  let darkenedRGB = rgb.map(color => {
    let darkenedValue = Math.floor(color - amount);
    if (darkenedValue < 0) {
      darkenedValue = 0;
    }
    return darkenedValue;
  });
  return rgbToHex(darkenedRGB);
};

/* COLOR VARIABLES */

const _brand = '#f94e6d';
const _black = '#222';
const _white = '#fff';
const _gray = '#888';

/* FONT STACK VARIABLES */
const _monoStack = '"Roboto Mono", monospace';
const _sansStack = '"Roboto", sans-serif';

/* THEME OBJECT USED BY ThemeProvider */

const theme = {
  light: {
    color: {
      brand: _brand,
      brandInvert: invert(_brand),
      brandLight: lighten(_brand, 60),
      brandXLight: lighten(_brand, 80),
      brandDark: darken(_brand, 60),
      primary: _white,
      contrast: _black,
      black: _black,
      blackLight: lighten(_black, 40),
      white: _white,
      gray: _gray
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
      brandLight: lighten(_brand, 20),
      brandXLight: lighten(_brand, 50),
      brandDark: darken(_brand, 60),
      primary: _black,
      contrast: _white,
      black: _black,
      blackLight: lighten(_black, 40),
      white: _white,
      gray: _gray
    },
    font: {
      mono: _monoStack,
      sans: _sansStack
    }
  }
};

export default theme;