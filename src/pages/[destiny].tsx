import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import {Flex, Text} from '@chakra-ui/react'
import { Header } from '../components/Header'
import { ContentDestiny } from '../components/ContentDestiny'
import { Cities } from '../components/Cities'

import { ContinentBanner } from '../components/Continent/ContinentBanner';
import { ContinentInfo } from '../components/Continent/ContinentInfo';
import { CitiesGrid } from '../components/CitiesGrid';

import { api } from '../services/api';
import { unsplashAPi } from '../services/unSplashAPi';

interface Continent {
  id: string;
  title: string;
  description: string;
  image: string;
  betterImagePosition: string;
  bio?: string;
  countries: number;
  cities: number;
  languages: number;
}

interface City {
  id: string;
  name: string;
  country: string;
  flag?: string;
  continent: string;
  image?: string;
}

interface ContinentsProps {
  continent: Continent;
  cities: City[];
}

function Destiny({ continent, cities}: ContinentsProps){
  return(
    <Flex 
      w='100%' 
      h='100%' 
      flexDirection='column' 
      bg='default.light.background'
    >
      <Flex 
        backgroundImage='./img/Banner2.png'
        backgroundSize='cover'
        w='100%'
        h={['150px', '500px']}
        mb={['2rem', '4rem']}
      >
        <Flex 
          w={['102px', '173px']}
          h={['38px', '72px']}
          ml={['120px', '140px']}
          mt={['56px', '360px']}
        >
          <Text fontWeight='600' fontSize={['28px', '48px']} color='default.light.text'>
            {/* Europa */}
            {continent.title}
          </Text>
        </Flex>
      </Flex>
      <ContentDestiny />
      <Cities/>
    </Flex>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: 'blocking',
//   }
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log(context.params)
//   return {
//     props: {
//       data: 'Sucesso'
//     } // will be passed to the page component as props
//   }
// }

/*
  o valor que vem nos params é undefined por isso não 
  consegue fazer a requisição pq não sabe o caminho
  mas na barra de pesquisa no browser ele recebe o nome no continent
  posso colocar em context api ou usar o useEffect
*/

// export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = context.params;
  const continentsResponse = await api.get(`/continents/${String(name)}`)
  const continent = continentsResponse.data;

  const citiesResponse = await api.get(`/cities?continent=${String(name)}`)
  const citiesData = citiesResponse.data;
  const cities: City[] = await Promise.all(citiesData.map(async (city: City) => {
    const unsplashResponse = await unsplashAPi
      .get(encodeURI(`/search/photos?page=1&per_page=1&query=${city.id}`));
    return {
      ...city,
      image: unsplashResponse.data.results[0].urls.raw,
    }
  }))

  return {
    props: {
      continent,
      cities
    }
  }
}

export default Destiny