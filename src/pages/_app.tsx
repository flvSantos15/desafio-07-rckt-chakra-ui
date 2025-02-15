import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../themes/theme'

import 'swiper/css/bundle'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

import '../themes/slider.scss'

import { Header } from '../components/Header'
import { ContinentProvider } from '../context/continent-context'
import { UnSplashProvider } from '../context/unSplash-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContinentProvider>
      <UnSplashProvider>
        <ChakraProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
        </ChakraProvider>
      </UnSplashProvider>
    </ContinentProvider>
  )
}

export default MyApp
