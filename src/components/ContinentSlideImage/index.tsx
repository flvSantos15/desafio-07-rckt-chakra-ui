import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
// import { RichText } from 'prsmic-dom'
// import { Cities } from '../../components/Cities'
// import { Content } from '../../components/Content'
// import { ContinentBanner } from '../../components/ContinentBanner'
import { Header } from '../../components/Header'
import { getPrismicClient } from '../../shared/services/prismic'
import Prismic from '@prismicio/client'
import { userRouter } from 'next/router'
import { Loading } from '../../components/Loading'

// import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Keyboard, Pagination, Navigation } from "swiper"

// import { ReactNode } from 'react'

import { ContinentProps } from '../../shared/interfaces/models/Continent'
// import { useContinent } from '../../context/ContinentContext'


// interface ContinentProps {
//   content: ReactNode[]
// }

// export function ContinentSlideImage({ continents }: Continent) {
export function ContinentSlideImage() {
  // const { allContinent } = useContinent()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex 
      w='100%' 
      mb={['0', '4rem']} 
      flexDir='column'
      sx={{
        '--swiper-navigation-color': 'colors.default.highlight',
        '--swiper-pagination-bullet-active': 'colors.default.highlight',
        '--swiper-pagination-bullet': 'colors.default.strong',
        '--swiper-navigation-size': `${isWideVersion ? '40px' : '32px'}`,

        '.swiper-pagination-bullet': {
          'background-color': 'var(--swiper-pagination-bullet)'
        },

        '.swiper-pagination-bullet-active': {
          'background-color': 'var(--swiper-pagination-bullet-active)'
        },

        ".swiper-container": {
          'width': '100%',
          'height': '100%',
        },
      }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: '1240px',
          height: '450px',
          display: 'flex'
        }}
      >
        {/* {allContinent.map(item => 
          <>
            <SwiperSlide>
              {item}
            </SwiperSlide>
          </>
        )} */}
      </Swiper>
    </Flex>
  )
}