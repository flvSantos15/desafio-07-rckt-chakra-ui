import {Flex, Text , Image} from '@chakra-ui/react'

export function More() {
  return (
    <Flex
      w='158px' h='145px' 
      flexDirection='column' 
      justifyContent='center'
    >
      <Flex w='85px' h='85px' justifyContent='center' mx='auto' mb='1rem'>
        <Image src='./img/earth1.png' alt='more'/>
      </Flex>
      <Text textAlign='center' fontWeight='600' fontSize='20px'>e mais...</Text>
    </Flex>
  )
}