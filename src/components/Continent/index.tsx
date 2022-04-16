import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Keyboard, Pagination, Navigation } from "swiper"

import { Next } from './Next'
import { Prev } from './Prev'
import { TextContinent } from './TextContinent'
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
        '--swiper-pagination-bullet': 'colors.default.dark.text',
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
        {/*
          <Flex
            bg='#FFBA08'
            w='16px'
            h='16px'
            borderRadius='50%'
          ></Flex>
          <Flex
            bg='#999999'
          ></Flex>
        */}

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
      {/* <Swiper
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
        <SwiperSlide
          style={{
            width: '1240px',
            height: '450px',
            margin: 'auto'
          }}
        >
          <Flex
            backgroundImage='./img/americanortecontinente.jpg'
            backgroundSize='cover'
            w={['100%', '1240px']}
            h={['250px', '450px']}
            mx='auto'
            pt={['2.5rem', '165px']}
          >
            <Flex
              w='50%'
              h='116px'
              mb={['2rem', '6rem']}
              mx='auto'
              justifyContent='center'
              alignItems='center'
            >
              <TextContinent
                color={'#fff'}
                value={'exemplo'}
              >
                {'América do Norte'}
              </TextContinent>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: '1240px',
            height: '450px',
            margin: 'auto'
          }}
        >
          <Flex
            backgroundImage='./img/americasulcontinente.jpg'
            backgroundSize='cover'
            w={['100%', '1240px']}
            h={['250px', '450px']}
            mx='auto'
            pt={['2.5rem', '165px']}
          >
            <Flex
              w='50%'
              h='116px'
              mb={['2rem', '6rem']}
              mx='auto'
              justifyContent='center'
              alignItems='center'
            >
              <TextContinent
                color={'#fff'}
                value={'exemplo'}
              >
                {'América do Sul'}
              </TextContinent>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: '1240px',
            height: '450px',
            margin: 'auto'
          }}
        >
          <Flex
            backgroundImage='./img/asiacontinente.jpg'
            backgroundSize='cover'
            w={['100%', '1240px']}
            h={['250px', '450px']}
            mx='auto'
            pt={['2.5rem', '165px']}
          >
            <Flex
              w='50%'
              h='116px'
              mb={['2rem', '6rem']}
              mx='auto'
              justifyContent='center'
              alignItems='center'
            >
              <TextContinent
                color={'#fff'}
                value={'exemplo'}
              >
                {'Ásia'}
              </TextContinent>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: '1240px',
            height: '450px',
            margin: 'auto'
          }}
        >
          <Flex
            backgroundImage='./img/africacontinente.jpg'
            backgroundSize='cover'
            w={['100%', '1240px']}
            h={['250px', '450px']}
            mx='auto'
            pt={['2.5rem', '165px']}
          >
            <Flex
              w='50%'
              h='116px'
              mb={['2rem', '6rem']}
              mx='auto'
              justifyContent='center'
              alignItems='center'
            >
              <TextContinent
                color={'#fff'}
                value={'exemplo'}
              >
                {'África'}
              </TextContinent>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: '1240px',
            height: '450px',
            margin: 'auto'
          }}
        >
          <Flex
            backgroundImage='./img/europacontinente.png'
            backgroundSize='cover'
            w={['100%', '1240px']}
            h={['250px', '450px']}
            mx='auto'
            pt={['2.5rem', '165px']}
          >
            <Flex
              w='50%'
              h='116px'
              mb={['2rem', '6rem']}
              mx='auto'
              justifyContent='center'
              alignItems='center'
            >
              <TextContinent
                color={'#fff'}
                value={'A Cidade mais Antiga'}
              >
                {'Europa'}
              </TextContinent>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: '1240px',
            height: '450px',
            margin: 'auto'
          }}
        >
          <Flex
            backgroundImage='./img/oceaniacontinente.jpg'
            backgroundSize='cover'
            w={['100%', '1240px']}
            h={['250px', '450px']}
            mx='auto'
            pt={['2.5rem', '165px']}
          >
            <Flex
              w='50%'
              h='116px'
              mb={['2rem', '6rem']}
              mx='auto'
              justifyContent='center'
              alignItems='center'
            >
              <TextContinent
                color={'#fff'}
                value={'exemplo'}
              >
                {'Oceania'}
              </TextContinent>
            </Flex>
          </Flex>
        </SwiperSlide>
      </Swiper> */}
    </Flex>
  )
}