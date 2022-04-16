import { GetStaticProps } from 'next'
import { Flex, Box, Divider, Text } from '@chakra-ui/react'

import { Banner } from '../components/Banner'
import { Travel } from '../components/Travel'
import { ContinentSlide } from '../components/ContinentSlide'

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
  return (
    <Flex 
      w='100%'
      flexDirection='column' 
      bg='default.light.background'
    >

      <Banner />

      <Travel />

      <Box w='100%' h='10px' justifyContent='center' mb='4rem'>
        <Divider w='25%' border='2px solid #47585B' color='blue' />
      </Box>

      <ContinentSlide continents={continents} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await api.get('/continents')
  const continents = response.data
  return {
    props: {
      continents
    }
  }
}

export default Home
