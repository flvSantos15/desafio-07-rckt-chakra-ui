import { Flex, Box, Divider, useColorMode, Heading } from '@chakra-ui/react'
import Head from 'next/head'

import { Banner } from '../modules/Home/Banner'
import { Travel } from '../modules/Home/Travel'
import { Slider } from '../modules/Home/Slider'

function Home() {
  const { colorMode } = useColorMode()
  return (
    <>
      <Head>
        <title>WorldTrip - Home</title>
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:title" content="WorldTrip" />
        <meta name="twitter:title" content="WorldTrip" />
      </Head>

      <Flex direction="column">
        <Banner />

        <Travel />

        <Box w="5.625rem" h="10px" justifyContent="center" mb="4rem" mx="auto">
          <Divider
            w="100%"
            h="0.05rem"
            bg={colorMode === 'light' ? '#47585B' : '#fff'}
          />
        </Box>

        <Heading
          textAlign="center"
          fontWeight="500"
          mb={['5', '14']}
          fontSize={['2xl', '3xl', '4xl']}
          color={
            colorMode === 'light' ? 'default.dark.text' : 'default.light.text'
          }
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>

        <Slider />
      </Flex>
    </>
  )
}

export default Home
