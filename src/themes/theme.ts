import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700
  },
  fontSizes: {
    xs: '0.5rem',
    sm: '0.625rem',
    md: '0.75rem',
    lg: '0.875rem',
    xl: '1rem',
    '2xl': '1.125rem',
    '3xl': '1.25rem',
    '4xl': '1.5rem',
    '5xl': '2rem',
    '6xl': '2.5rem',
    '7xl': '3rem'
  },
  colors: {
    default: { 
      'highlight': '#ffba08',
      'white': '#ffffff',
      'black': '#000000',
      'strong': '#000011',
      'dark': {
        'text': '#47585b',
        'info': '#999999',
        'background': '#181b23'
      },
      'light': {
        'text': '#f5f8fa',
        'info': '#dadada',
        'background': '#f5f8fa'
      },
    }
  },
  styles: {
    global: (props: any) => {
      const prefix = props.colorMode === 'light'
        ? ['light', 'dark']
        : ['dark', 'light']
      return ({
        body: {
          bg: `default.${prefix[0]}.background`,
          color: `deafult.${prefix[1]}.text`
        }
      })
    }
  }
})

export default theme
