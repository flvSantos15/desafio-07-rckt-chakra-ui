import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ContinentResponse } from '../../shared/interfaces/models/Continent'
import { useContinent } from '../../context/continent-context'

import { Flex } from '@chakra-ui/layout'

import { ContinentBanner } from '../../modules/Continent/ContinentBanner'
import { ContentDestiny } from '../../modules/Continent/ContentDestiny'
import { Cities } from '../../modules/Continent/Cities'
import { Loading } from '../../modules/Continent/Loading'
import { useEffect, useState } from 'react'

export default function Continent() {
  const router = useRouter()
  const { continents } = router.query

  const { getContinent, allContinent } = useContinent()

  const [continent, setContinent] = useState<ContinentResponse>()

  // getContinent(posts.id as string)
  useEffect(() => {
    getContinent(continent?.id as string)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [continent])

  useEffect(() => {
    if (!router.isFallback) {
      const res = allContinent.find((con) => con.id === continents)

      setContinent(res)
    }
  }, [router.isFallback, allContinent, continents])

  if (router.isFallback) {
    return <Loading />
  }

  if (!continents || continents === undefined) {
    return <Loading />
  } else {
    return (
      <Flex direction="column" px="0">
        <Head>
          <title>WorldTrip - {continent?.title}</title>
          <meta property="og:image" content="/ogimage.png" />
          <meta property="og:image:secure_url" content="/ogimage.png" />
          <meta name="twitter:image" content="/ogimage.png" />
          <meta name="twitter:image:src" content="/ogimage.png" />
          <meta property="og:title" content="WorldTrip" />
          <meta name="twitter:title" content="WorldTrip" />
        </Head>

        <ContinentBanner image={continent?.image} title={continent?.title} />
        <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
          <ContentDestiny
            id={continent?.id}
            cities={continent?.cities}
            countries={continent?.countries}
            languages={continent?.languages}
            bio={continent?.bio}
          />
          <Cities />
        </Flex>
      </Flex>
    )
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const slug = context.query
  // const { continents } = slug

  // const res = await axios.get<ContinentResponse>(
  //   `/api/continents/${continents}`
  // )

  // const posts = await res.data
  const posts = {
    id: 'asia',
    title: 'Ásia',
    description: 'O maior dos continentes',
    image:
      'https://images.unsplash.com/photo-1547150492-da7ff1742941?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    betterImagePosition: 'center',
    bio: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico. Mas na parte meridional, a Ásia chega ao seu final na região mais quente dos trópicos, nas imediações da linha do equador. Na Ásia são encontradas algumas das montanhas mais altas do mundo; os rios mais extensos; os maiores desertos, planícies e planaltos; as selvas e florestas mais densas. A altitude máxima e a mínima está localizada na Ásia. O monte Everest, a altitude máxima do planeta, está localizada a 8 848 m acima do nível do mar; ao longo da linha fronteiriça da República Democrática Federal do Nepal com a região autônoma chinesa do Tibete. O litoral do mar Morto, a planície de menor altitude do mundo, estão localizadas a 396 m abaixo do nível do mar, na região fronteiriça do Estado de Israel com o Reino Hashemita da Jordânia.',
    countries: 50,
    languages: 49,
    cities: 127
  }

  return { props: posts }
}
