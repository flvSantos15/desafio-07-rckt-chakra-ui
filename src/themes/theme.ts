import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
    background: {
      50: '#292B2F',
      100: '#1E2023',
      200: '#202225',
      300: '#252525',
      400: '#000000',
      500: '#4F545B',
      600: '#40444b'
    },
    primary: {
      50: '#1b8650',
      100: '#078646',
      200: '#056133'
    },
    secondary: {
      50: '#ffffff',
      100: '#fafafa',
      200: '#F8F9FA',
      300: '#f9f9f9',
      400: '#d9d9d9',
      500: '#c7cdd4',
      550: '#aaaaaa',
      600: '#8D8D8D',
      700: '#696B6D'
    },
    success: {
      50: '#25bb70',
      100: '#0ABB63',
      200: '#0f9953',
      300: '#00944a'
    },
    error: {
      50: '#ff9191',
      100: '#FF6B6B',
      200: '#D95050',
      300: '#eb5757'
    },
    warning: {
      50: '#FFA452',
      100: '#FF902B',
      200: '#D9751A'
    },
    info: {
      50: '#75CEFF',
      70: '#56CCF2',
      100: '#4FC0FF',
      200: '#389FD9'
    }
  }
  // breakpoints: {
  //   sm: '576px',
  //   md: '768px',
  //   lg: '992px',
  //   xl: '1200px'
  // }
})

export default theme
