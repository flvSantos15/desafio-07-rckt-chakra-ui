import { Flex, Text, Box, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex w='100%' h='100px' justifyContent='center' alignItems='center'>
        <Image src='./img/Logo.png' alt='Logo' w='184.06px' h='45.92px'/>
    </Flex>
  )
}