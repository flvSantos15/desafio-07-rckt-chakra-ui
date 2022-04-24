import { GetStaticProps } from 'next'
import { Flex, Box, Divider, useColorMode } from '@chakra-ui/react'

import { Banner } from '../components/Banner'
import { Travel } from '../components/Travel'
import { ContinentSlide } from '../components/ContinentSlideContainer'

import { api } from '../services/api'
interface HomeProps {
  continents: {
    id: string
    title: string
    description: string
    image: string
    betterImagePosition: string
  }[]
}

function Home ({ continents }: HomeProps) {
  const { colorMode } = useColorMode()
  return (
    <Flex 
      w='100%'
      h='100%'
      flexDirection='column' 
    >

      <Banner />

      <Travel />

      <Box w='25%' h='10px' justifyContent='center' mb='4rem' mx='auto' >
        <Divider 
          w='100%'
          h='0.05rem'
          bg={colorMode === 'light' ? '#47585B' : '#fff'}
        />
      </Box>

      <ContinentSlide continents={continents} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await api.get('/continents')
  const continents = response.data
  console.log(continents)
  return {
    props: {
      continents
    }
  }
}

export default Home
