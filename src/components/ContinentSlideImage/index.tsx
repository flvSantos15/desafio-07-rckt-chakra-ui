import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Keyboard, Pagination, Navigation } from "swiper"

import { ReactNode } from 'react'

interface ContinentProps {
  content: ReactNode[]
}

export function Continent({ content }: ContinentProps) {
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
        {content.map(item => 
          <>
            <SwiperSlide>
              {item}
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </Flex>
  )
}