import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../themes/theme'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import '../styles/slider.scss';

import { Header } from '../components/Header'
import { ContinentProvider } from '../context/ContinentContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContinentProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </ContinentProvider>
  )
}

export default MyApp
