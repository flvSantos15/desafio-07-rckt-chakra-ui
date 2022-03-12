import {Flex, Text , Image, Button} from '@chakra-ui/react'
import { Next } from './Next'
import { Prev } from './Prev'
import { TextContinent } from './TextContinent'

export function Continent() {
  return(
    <Flex w='100%' mb='4rem'>
      <Flex 
        backgroundImage='./img/ContinentImage.png' 
        w='1240px' 
        h='450px'
        mx='auto'
        pt='165px'
        flexDirection='column'
      >
        <Flex 
          w='100%' 
          h='116px'
          mb='6rem'
          justifyContent='space-between'
          alignItems='center'
        >
          <Prev />
          <TextContinent/>
          <Next/>
        </Flex>
        <Flex
          mx='auto'
          w='128px'
          h='16px'
          justifyContent='space-between'
        >
          <Flex
            bg='#FFBA08' 
            w='16px' 
            h='16px'
            borderRadius='50%'
          ></Flex>
          <Flex
            bg='#999999' 
            w='16px' 
            h='16px'
            borderRadius='50%'
          ></Flex>
          <Flex
            bg='#999999' 
            w='16px' 
            h='16px'
            borderRadius='50%'
          ></Flex>
          <Flex
            bg='#999999' 
            w='16px' 
            h='16px'
            borderRadius='50%'
          ></Flex>
          <Flex
            bg='#999999' 
            w='16px' 
            h='16px'
            borderRadius='50%'
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}