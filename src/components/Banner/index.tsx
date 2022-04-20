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

// interface ContinentBannerProps {
//   bgImage: string;
//   bgSize: string;
//   bgPosition: string;
//   continentName: string;
// }

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
      </BannerContainer>
    </>
  )
}
