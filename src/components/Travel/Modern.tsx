import {Flex, Text , Image} from '@chakra-ui/react'

export function Modern() {
  return (
    <Flex
      w='158px' h='145px' 
      flexDirection='column' 
      justifyContent='center'
    >
      <Flex w='85px' h='85px' justifyContent='center' mx='auto' mb='1rem'>
        <Image src='./img/building1.png' alt='modern'/>
      </Flex>
      <Text textAlign='center' fontWeight='600' fontSize='20px'>moderno</Text>
    </Flex>
  )
}