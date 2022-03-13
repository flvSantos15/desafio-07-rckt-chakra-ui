import { Flex, useMediaQuery, SimpleGrid } from '@chakra-ui/react'
import { Beach } from './Beach'
import { Classic } from './Classic'
import { Modern } from './Modern'
import { More } from './More'
import { NightLife } from './NightLife'

export function Travel (){
  const [isLargerThan800] = useMediaQuery('(min-width:800px)')
  return(
    <Flex justifyContent='center' alignItems='center' px='auto'>
      <SimpleGrid
        columns={[2, 5]}
        spacing={['2.5rem', '5.5rem']}
        my={['2rem', '8rem']}
        w='85%'
        h={['174px', '145px']}
        pt={['0.5rem', '0']}
        pl={['2rem', '0']}
      >
        <NightLife />
        <Beach />
        <Modern/>
        <Classic/>
        <More/>
      </SimpleGrid>
    </Flex>
  )
}