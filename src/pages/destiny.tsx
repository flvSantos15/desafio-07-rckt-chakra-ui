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
        h={['150px', '500px']}
        mb={['2rem', '4rem']}
        border='1px solid red'
      >
        <Flex 
          w={['102px', '173px']}
          h={['38px', '72px']}
          ml={['120px', '140px']}
          mt={['56px', '360px']}
          border='1px solid blue'
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