import { Flex, Text, Box } from '@chakra-ui/react'
import { Beach } from './Beach'
import { Classic } from './Classic'
import { Modern } from './Modern'
import { More } from './More'
import { NightLife } from './NightLife'

export function Travel (){
  return(
    <Flex  justifyContent='center' alignItems='center'>
      <Flex my='8rem' w='1160px' h='145px' justifyContent='space-between'>
        <NightLife />
        <Beach/>
        <Modern/>
        <Classic/>
        <More/>
      </Flex>
    </Flex>
  )
}