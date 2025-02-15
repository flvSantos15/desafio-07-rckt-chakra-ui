import { Flex, Text, SimpleGrid, useColorMode } from '@chakra-ui/react'
import { useContinent } from '../../../context/continent-context'
import { City } from './City'

export function Cities() {
  const { colorMode } = useColorMode()
  const { allCities, continent } = useContinent()

  const cities_list = allCities.filter((item) => item.continent === continent)

  return (
    <Flex
      w={['300px', '1160px']}
      h={['100%', '700px']}
      mx="auto"
      mb={['0', '4rem']}
      flexDirection="column"
    >
      <Text
        fontWeight="500"
        fontSize={['3xl', '2.25rem']}
        mb="2rem"
        color={
          colorMode === 'light' ? 'default.dark.text' : 'default.light.text'
        }
      >
        Cidades +100
      </Text>
      <SimpleGrid
        columns={[1, 4]}
        spacing="4"
        mb={['2rem', '4rem']}
        mx={{ base: 'auto', xl: '0' }}
      >
        {cities_list.map((item) => (
          <City
            key={item.id}
            alt={item.id as string}
            city={item.name}
            country={item.country}
            lang={item.flag}
            src={item.image}
          />
        ))}
      </SimpleGrid>
    </Flex>
  )
}
