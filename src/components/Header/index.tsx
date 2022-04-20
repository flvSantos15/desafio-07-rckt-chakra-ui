import { Flex, Image } from '@chakra-ui/react'
import { ToggleColorMode } from '../ToggleColorMode'
import { BackPageButton } from '../BackPageButton'

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      h={['50px', '100px']}
      justifyContent='center' 
      alignItems='center'
    >
      <Flex
        h='100%'
        maxW='1300px'
        w='90%'
        align='center'
        justifyContent='space-between'
      >
        <BackPageButton />
        <Image 
          src='./img/Logo.png' 
          alt='Logo'
          // objectFit='cover'
          w={['98px', '184.06px']}
          h={['30px', '45.92px']}
        />
        <ToggleColorMode />
      </Flex>
    </Flex>
  )
}