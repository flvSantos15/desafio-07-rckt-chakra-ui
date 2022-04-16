import {Flex, Text} from '@chakra-ui/react'
import { Header } from '../components/Header'
import { ContentDestiny } from '../components/ContentDestiny'
import { Cities } from '../components/Cities'

function Destiny(){
  return(
    <Flex 
      w='100%' 
      h='100%' 
      flexDirection='column' 
      bg='#F5F8FA'
    >
      <Flex 
        backgroundImage='./img/Banner2.png'
        backgroundSize='cover'
        w='100%'
        h={['150px', '500px']}
        mb={['2rem', '4rem']}
      >
        <Flex 
          w={['102px', '173px']}
          h={['38px', '72px']}
          ml={['120px', '140px']}
          mt={['56px', '360px']}
        >
          <Text fontWeight='600' fontSize={['28px', '48px']} color='#fff'>
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