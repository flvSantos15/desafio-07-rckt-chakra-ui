import { IconButton, useColorMode, Flex } from '@chakra-ui/react'
import { FaMoon } from 'react-icons/fa'
import { IoMoon } from 'react-icons/io5'

export function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex justifyContent="center">
      <IconButton
        aria-label="Change colors"
        icon={colorMode === 'light' ? <IoMoon /> : <FaMoon />}
        onClick={toggleColorMode}
        variant="ghost"
        // spacing='8'
        fontSize={['xl', '2xl']}
        justifyContent="center"
        w="3rem"
      />
    </Flex>
  )
}
