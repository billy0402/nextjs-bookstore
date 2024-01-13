import type { ThemeConfig } from '@chakra-ui/react';
import { Toast, extendTheme } from '@chakra-ui/react';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: '#f4f7fc',
  accent: '#965e34',
  accent_light: '#d0bb60',
  auxiliary: '#bfbba4',
  icon: '#92929d',
  text: '#171725',
  text_sub: '#5a607f',
  text_accent: '#4264a5',
  line: '#ebebf2',
  line_dark: '#e1e4ea',
  security: '#36c189',
  notice: '#fdce63',
  danger: '#e55e6e',
};

export type ThemeColor = keyof typeof colors | 'transparent';

const fonts = {
  heading: `'Noto Sans TC', sans-serif`,
  body: `'Noto Sans TC', sans-serif`,
};

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

const space = {
  sm: '1.25rem',
  md: '2.5rem',
  lg: '3.75rem',
};

const sizes = {
  header: '68px',
};

const layerStyles = {
  inlineFlexCenter: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.1)',
    padding: '30px',
  },
};

const components = {
  FormLabel: {
    baseStyle: {
      _disabled: { opacity: 'unset' },
    },
  },
  Input: {
    baseStyle: {
      field: {
        _disabled: { opacity: 'unset', backgroundColor: 'primary' },
      },
    },
  },
  Textarea: {
    baseStyle: {
      field: {
        _disabled: { opacity: 'unset', backgroundColor: 'primary' },
      },
    },
  },
  Select: {
    baseStyle: {
      field: {
        _disabled: { opacity: 'unset', backgroundColor: 'primary' },
      },
    },
  },
  Checkbox: {
    baseStyle: {
      control: {
        borderColor: 'icon',
      },
    },
  },
  Switch: {
    baseStyle: {
      track: {
        _checked: {
          bg: 'accent',
        },
      },
    },
  },
  Card: {
    baseStyle: {
      container: {
        border: '1px solid',
        shadow: 'unset',
      },
    },
  },
};

Toast.defaultProps = {
  isClosable: true,
};

export const theme: ThemeConfig = extendTheme({
  colors,
  fonts,
  breakpoints,
  space,
  sizes,
  layerStyles,
  components,
});
