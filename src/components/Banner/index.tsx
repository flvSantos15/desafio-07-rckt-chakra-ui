import { Flex, Text, Image, Box, useMediaQuery } from '@chakra-ui/react'

export function Banner() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  return (
    <Flex
      backgroundImage='./img/Background.png'
      backgroundSize='cover'
      w='100%'
      h={['180px', '335px']}
      px='0'
    >
      <Flex
        flexDirection='column'
      >
        <Box
          w={['240px', '426px']}
          h={['58px', '90px']}
          mt={['20px', '80px']}
          ml={['25px', '140px']}
          mb={['15px', '25px']}
        >
          <Text
            fontWeight='medium'
            fontSize={['20px', '4xl']}
            color='#F5F8FA'
          >
            5 Continentes,<br /> infinitas possibilidades.
          </Text>
        </Box>
        <Box
          w={['320px', '522px']}
          h='57px'
          ml={['25px', '140px']}
        >
          <Text
            fontWeight='400'
            fontSize={['14px', '3xl']}
            color='#F5F8FA'
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
      </Flex>
      {
        isLargerThan800
          && (
            <Box
              w='417.15px'
              h='270px'
              mt='80px'
              ml='150px'
              transform={'rotate(3deg)'}
            >
              <Image src='./img/Airplane.png' alt='Airplane' />
            </Box>
          )
      }
    </Flex>
  )
}
