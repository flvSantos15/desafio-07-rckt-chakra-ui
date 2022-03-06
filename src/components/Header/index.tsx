import { Flex, Text, Box, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex w='184,06px' h='100px' border='1px solid red' justifyContent='center'>
      <Box w='11,5rem' h='184,06px' border='1px solid red'>
        <Image src='./Img/Logo.png' alt='Logo' />
      </Box>
      {/* <Text>Logo</Text> */}
    </Flex>
  )
}