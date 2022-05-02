import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetServerSideProps } from 'next';

import { ContinentBanner } from 'modules/Continent/ContinentBanner'
import { ContentDestiny } from 'modules/Continent/ContentDestiny';
import { Cities } from 'modules/Continent/Cities';
import { Loading } from 'modules/Continent/Loading';

import { ContinentResponse } from 'shared/interfaces/models/Continent'
import { api } from 'shared/services/api';
import { useContinent } from 'context/ContinentContext';

export default function Continent(posts: ContinentResponse) {
  const { getContinent } = useContinent()
  getContinent(posts.id as string)
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }
  if (!posts || posts === undefined) {
    return <Loading />
  } else {
    return (
        <Flex direction='column' px='0'>
          <Head>
            <title>WorldTrip - {posts.title}</title>
            <meta property="og:image" content="/ogimage.png" />
            <meta property="og:image:secure_url" content="/ogimage.png" />
            <meta name="twitter:image" content="/ogimage.png" />
            <meta name="twitter:image:src" content="/ogimage.png" />
            <meta property="og:title" content="WorldTrip" />
            <meta name="twitter:title" content="WorldTrip" />
          </Head>
    
          <ContinentBanner image={posts.image} title={posts.title} />
          <Flex direction='column' maxW='1160px' mx='auto' mb='10' px='1rem'>
            <ContentDestiny
              id={posts.id}
              cities={posts.cities} 
              countries={posts.countries} 
              languages={posts.languages}
              bio={posts.bio}
            />
            <Cities />
          </Flex>
        </Flex >
    )
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query
  const { continents } = slug

  const res = await api.get<ContinentResponse>(`/continents/${continents}`)
  const posts = await res.data

  return { props: posts }
}
