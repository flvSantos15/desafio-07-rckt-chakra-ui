import { Flex, Text, TextProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface TextContinentProps {
  children: ReactNode
  value: ReactNode
  color: string
}

export function TextContinent({ color, children, value }: TextContinentProps){
  return(
    <Flex 
      w='324px' 
      h='116px'
      flexDirection='column'
      justifyContent='center'
    >
      <Text 
        textAlign='center' 
        color={color}
        fontWeight='bold' 
        fontSize='48px'
      >
        {children}
      </Text>
      <Text 
        textAlign='center' 
        color={color}
        fontWeight='bold' 
        fontSize='24px'
       >
         {value}
      </Text>
    </Flex>
  )
}