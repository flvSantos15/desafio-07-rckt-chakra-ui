import {Flex, Image, Button} from '@chakra-ui/react'

export function Prev(){
  return (
    <Flex w='60px' h='60px'>
      <Button w='60px' h='60px' colorScheme='none'>
        <Image src='./img/prev.png' alt='Prev'/>
      </Button>
    </Flex>
  )
}