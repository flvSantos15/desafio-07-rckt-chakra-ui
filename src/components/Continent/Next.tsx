import {Flex, Image, Button} from '@chakra-ui/react'

export function Next(){
  return (
    <Flex w='60px' h='60px'>
      <Button 
        w='60px' 
        h='60px' 
        colorScheme='none' 
        _focus={{
          outline: 'none'
        }}
      >
        <Image src='./img/next.png' alt='Next'/>
      </Button>
    </Flex>
  )
}