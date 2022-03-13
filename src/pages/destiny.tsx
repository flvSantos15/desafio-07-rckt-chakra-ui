import {Flex, Text} from '@chakra-ui/react'
import { Header } from '../components/Header'
import { ContentDestiny } from '../components/ContentDestiny'
import { Cities } from '../components/Cities'

function Destiny(){
  return(
    <Flex w='100%' flexDirection='column' bg='#F5F8FA'>
      <Header />
      <Flex 
        backgroundImage='./img/Banner2.png'
        w='100%'
        h='500px'
        mb='4rem'
      >
        <Flex 
          w='173px' 
          h='72px'
          ml='140px'
          mt='360px'
        >
          <Text fontWeight='600' fontSize='48px' color='#fff'>
            Europa
          </Text>
        </Flex>
      </Flex>
      <ContentDestiny />
      <Cities/>
    </Flex>
  )
}

export default Destiny