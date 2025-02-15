import { Heading, Flex, Text, Image, Box } from '@chakra-ui/react'

export function Banner() {
  return (
    <>
      <Flex
        w="100%"
        h={['10.188rem', '15.625rem', '15.625rem', '20.938rem']}
        bgImage="./img/Background.png"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex
          justify={['center', 'space-between']}
          align="center"
          w="100%"
          mx="auto"
          px={['4', '10', '15', '20', '36']}
        >
          <Box>
            <Heading
              fontWeight="medium"
              fontSize={['xl', '2l', '2xl', '2xl', '4xl']}
              color="default.light.text"
            >
              5 Continentes,
              <br /> infinitas possibilidades.
            </Heading>
            <Text
              fontWeight="400"
              fontSize={['lg', 'xl']}
              color="default.light.text"
              mt="5"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Image
            w={['18.75rem', '18.75rem', '18.75rem', '26.875rem']}
            display={['none', 'none', 'block']}
            src="./img/Airplane.png"
            alt="Avião voando com algumas nuvens ao redor"
            transform="translateY(48px)"
            ml="8"
          />
        </Flex>
      </Flex>
    </>
  )
}
