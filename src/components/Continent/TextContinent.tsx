import { Flex, Text } from '@chakra-ui/react'

export function TextContinent(){
  return(
    <Flex 
      w='324px' 
      h='116px'
      flexDirection='column'
      justifyContent='center'
    >
      <Text 
        textAlign='center' 
        color='#fff' 
        fontWeight='bold' 
        fontSize='48px'
      >
        Europa
      </Text>
      <Text 
        textAlign='center' 
        color='#fff' 
        fontWeight='bold' 
        fontSize='24px'
       >
         O continente mais antigo
      </Text>
    </Flex>
  )
}