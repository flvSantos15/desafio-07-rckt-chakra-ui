import { Flex, Text, Image, Box } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex backgroundImage='./img/Background.png' w='100%' h='335px'>
      <Flex flexDirection='column'>
        <Box w='426px' h='90px' mt='80px' ml='140px' mb='25px'>
          <Text fontWeight='medium' fontSize='4xl' color='#F5F8FA'>
            5 Continentes,<br /> infinitas possibilidades.
          </Text>
        </Box>
        <Box w='522px' h='57px' ml='140px'>
          <Text fontWeight='400' fontSize='3xl' color='#F5F8FA'>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
      </Flex>
      <Box w='417.15px' h='270px' mt='80px' ml='150px' transform={'rotate(3deg)'}>
        <Image src='./img/Airplane.png' alt='Airplane' />
      </Box>
    </Flex>
  )
}