import {
  Heading,
  Flex,
  Text,
  Image,
  Box,
  useBreakpointValue
} from '@chakra-ui/react'

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <>
      <Flex
        flexDir='row'
        w='100%'
        h={['180px', '335px']}
        bgImage='./img/Background.png'
        bgRepeat='no-repeat'
        bgSize='cover'
        justifyContent='space-evenly'
        mb={['0.875rem', '1.75rem']}
      >
        <Flex
          flexDirection='column'
          justifyContent='center'
          w='95%'
        >
          <Flex
            flexDirection='column'
            w={['240px', '470px']}
            mt={['0px', '140px']}
            ml={['25px', '70px']}
          >
            <Box
              w='480px'
              h='108px'
            >
              <Heading
                fontWeight='medium'
                fontSize={['20px', '6xl']}
                color='default.light.text'
              >
                5 Continentes,<br /> infinitas possibilidades.
              </Heading>
            </Box>
            <Text
              fontWeight='400'
              fontSize={['lg', '3xl']}
              color='default.light.text'
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>
          {
            isWideVersion && (
              <Flex
                w='417.15px'
                h='270px'
                mt='-140px'
                mr='10px'
                alignSelf='end'
                transform={'rotate(3deg)'}

              >
                <Image src='./img/Airplane.png' alt='Airplane' />
              </Flex>
            )
          }
        </Flex>
      </Flex>
    </>
  )
}
