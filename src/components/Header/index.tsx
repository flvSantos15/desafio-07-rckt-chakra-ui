import { Flex, Text, Box, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex 
      w='100%'
      h={['50px', '100px']}
      justifyContent='center' 
      alignItems='center'
    >
        <Image 
          src='./img/Logo.png' 
          alt='Logo' 
          w={['98px', '184.06px']}
          h={['30px', '45.92px']}
        />
    </Flex>
  )
}