import { Flex, Heading, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper';
import { useContinent } from 'context/ContinentContext';

export function Slider() {
  const { allContinent } = useContinent()
  
  return (
    <Flex w={['375px', "100%"]} h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]}>
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
          // width: '1240px',
          // height: '450px',
          display: 'flex'
        }}
      >
        {allContinent.map(item => (
          <>
            <SwiperSlide
              style={{
                width: '1240px',
                height: '450px',
                margin: 'auto'
              }}
            >
              <Flex
                mx='auto'
                pt={['2.5rem', '165px']}
                w={['375px', "100%"]}
                h={['250px', "100%"]}
                align="center"
                justify="center"
                direction="column"
                bgImage={`${item.image}`}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
              >
                <NextLink href={`/continent/${item.id}`} passHref>
                  <Link>
                        <Heading 
                          fontSize={["3xl", "4xl", "5xl"]} 
                          color="#fff"
                          textShadow='xs #000'
                          fontWeight="bold"
                        >
                          {item.title}
                        </Heading>
                        <Text 
                          fontWeight="bold" 
                          color="#fff"
                          textShadow='xs #000'
                          fontSize={["0.8rem", "1xl", "2xl"]} 
                          mt={["2", "4"]}
                        >
                          {item.description}
                        </Text>
                  </Link>
                </NextLink>
              </Flex>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </Flex>
  )
}