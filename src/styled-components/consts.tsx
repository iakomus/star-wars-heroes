/* eslint-disable import/prefer-default-export */
import { Theme } from 'src/interfaces/Theme';

export const themes: { light: Theme; dark: Theme } = {
  light: {
    global: {
      background: '#fafafa',
      foreground: '#383838',
      accent: {
        background: '#cdcdcd',
        foreground: '#404040',
      },
      highlight: {
        background: '#e4e4e4',
        foreground: '#494949',
      },
    },
    button: {
      borderWidth: '1px',
      borderStyle: 'solid',
      primary: {
        background: '#aaa',
        borderColor: '#999',
        foreground: '#3d3d3d',
      },
    },
    input: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#999',
      background: '#e8e8e8',
      foreground: '#444',
      placeholder: '#999',
    },
  },
  dark: {
    global: {
      background: '#383838',
      foreground: '#fafafa',
      accent: {
        background: '#404040',
        foreground: '#cdcdcd',
      },
      highlight: {
        background: '#494949',
        foreground: '#e4e4e4',
      },
    },
    button: {
      borderWidth: '1px',
      borderStyle: 'solid',
      primary: {
        background: '#3d3d3d',
        borderColor: '#333',
        foreground: '#aaa',
      },
    },
    input: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#333',
      background: '#999',
      foreground: '#0d0d0d',
      placeholder: '#555',
    },
  },
};

const size = {
  mobile: '375px',
  tablet: '768px',
  desktop: '2560px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const transitionDuration = '0.25s';
