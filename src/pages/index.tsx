import type { NextPage } from 'next'
import { Flex, Divider, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Travel } from '../components/Travel'
import { Continent } from '../components/Continent'

const Home: NextPage = () => {
  return (
    <Flex w='100%' flexDirection='column'>

      <Header />

      <Banner />

      <Travel />

      <Flex w='100%' h='10px' justifyContent='center' mb='4rem'>
        <Divider w='25%' border='2px solid #47585B' color='blue' />
      </Flex>

      <Flex 
        w='839px' 
        h='101px' 
        mx='auto'
        mb='4rem'
        justifyContent='center'
      >
        <Text fontWeight='500' fontSize='34px' textAlign='center' mb='2rem'>
          Vamos nessa?<br/>
          Então escolha seu continente
        </Text>
      </Flex>

      <Continent/>
    </Flex>
  )
}

export default Home
