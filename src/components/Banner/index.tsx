import {
  Stack,
  Heading,
  Flex,
  Text,
  Image,
  Box,
  useBreakpointValue
} from '@chakra-ui/react'
import { BannerContainer } from '../BannerContainer'

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <>
      <BannerContainer
        bgImage='./img/Background.png'
        bgSize='cover'
        height={['180px', '335px']}
      >
        <Stack
          flexDirection='column'
          p='8'
          justifyContent='center'
          spacing='5'
        >
          <Heading
            size={!!isWideVersion ? 'lg' : 'md'}
            color='default.light.text'
          >
            5 Continentes,<br /> infinitas possibilidades.
          </Heading>
          <Text
            fontWeight='400'
            fontSize={['lg', '3xl']}
            color='default.light.text'
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
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
          </Flex>
          {
            isWideVersion && (
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
        </Stack>
      </BannerContainer>
    </>
  )
}
