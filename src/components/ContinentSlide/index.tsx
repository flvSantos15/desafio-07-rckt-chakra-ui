import { VStack, Flex, Box, Text } from '@chakra-ui/react'
import { Continent } from '../Continent'
import { ContinentText } from './ContinentText';

interface ContinentSlideProps {
  continents: {
    id: string;
    title: string;
    description: string;
    image: string;
    betterImagePosition: string;
  }[]
}

export function ContinentSlide({
  continents
}: ContinentSlideProps){
  const swiperContent = continents.map(continent => (
    <ContinentText
      key={continent.id}
      title={continent.title}
      description={continent.description}
      imageUrl={continent.image}
      imagePosition={continent.betterImagePosition}
      href={`/continents/${continent.id}`}
    />
  ))

  return (
    <VStack spacing='8'>
      <Flex direction='column' align='center' justify='space-between'>
        <Text fontSize={['xl', '2xl']}>Vamos nessa?</Text>
        <Text fontSize={['xl', '2xl']}>Então escolha seu continente</Text>
      </Flex>
      <Box maxW='1240px' w='100%' h='450px' >
        <Continent content={swiperContent} />
      </Box>
    </VStack>
  )
}