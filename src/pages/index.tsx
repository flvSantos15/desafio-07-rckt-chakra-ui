import { GetStaticProps } from 'next'
import { Flex, Box, Divider, useColorMode, Heading } from '@chakra-ui/react'
import Prismic from '@prismicio/client'
import Head from 'next/head'

import { Banner } from '../modules/Home/Banner'
import { Travel } from '../modules/Home/Travel'
import { Slider } from '../components/Slider'

import { Continent } from '../shared/interfaces/models/Continent'

// parei no 1:16:35

// import { api } from '../shared/services/api'
import { getPrismicClient } from '../shared/services/prismic'
// import { useContinent } from '../context/ContinentContext'

function Home({ continents }: Continent) {
  const { colorMode } = useColorMode()
  return (
    <Flex direction='column'>

      <Head>
        <title>WorldTrip - Home</title>
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:title" content="WorldTrip" />
        <meta name="twitter:title" content="WorldTrip" />
      </Head>

      <Banner />

      <Travel />

      <Box w='25%' h='10px' justifyContent='center' mb='4rem' mx='auto' >
        <Divider
          w='100%'
          h='0.05rem'
          bg={colorMode === 'light' ? '#47585B' : '#fff'}
        />
      </Box>

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5","14"]}
        fontSize={["lg",
        "3xl",
        "4xl"]}
      >
        Vamos nessa?<br/>Então escolha seu continente
      </Heading>
    
      <Slider continents={continents} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')]
  )

  const continents = response.results.map((continent: { uid: any; data: { title: any; summary: any; slider_image: { url: any } } }) => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slider_image.url
    }
  })

  return {
    props: {
      continents
    }
  }
}

export default Home
