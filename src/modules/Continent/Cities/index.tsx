import { Flex, Text, SimpleGrid } from '@chakra-ui/react'
import { City } from './City'

export function Cities() {
  return (
    <Flex
      w={['300px', '1160px']}
      h={['100%', '700px']}
      mx='auto'
      mb={['0', '4rem']}
      flexDirection='column'
    >
      <Text fontWeight='500' fontSize='36px' mb='2rem'>
        Cidades +100
      </Text>
      <SimpleGrid 
        columns={[1, 4]} 
        spacing='4' 
        mb={['2rem', '4rem']}
      >
        <City
          alt={'londres'}
          city={'Londres'}
          country={'Reino Unido'}
          lang={'./img/EllipseEur.png'}
          src={'./img/Londres.png'}
        />
        <City
          alt={'paris'}
          city={'Paris'}
          country={'França'}
          lang={'./img/EllipseFran.png'}
          src={'./img/Paris.png'}
        />
        <City
          alt={'roma'}
          city={'Roma'}
          country={'Itália'}
          lang={'./img/EllipseIta.png'}
          src={'./img/Roma.png'}
        />
        <City
          alt={'praga'}
          city={'Praga'}
          country={'República Tcheca'}
          lang={'./img/EllipsePra.png'}
          src={'./img/Praga.png'}
        />
        <City
          alt={'amsterda'}
          city={'Amsterdã'}
          country={'Holanda'}
          lang={'./img/EllipseAms.png'}
          src={'./img/Amsterdã.png'}
        />
      </SimpleGrid>
    </Flex>
  )
}