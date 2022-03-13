import {Flex, Text} from '@chakra-ui/react'

export function ContentDestiny() {
  return(
    <Flex 
      w='1160px' 
      mx='auto'
      mb='4rem'
      alignItems='center' 
      justifyContent='space-between'
    >
      <Flex w='600px' h='211px'>
        <Text color='#47585B' fontWeight='400' fontSize='24px' textAlign='justify'>
          A Europa é, por convenção, um dos seis continentes
           do mundo. Compreendendo a península ocidental da 
           Eurásia, a Europa geralmente divide-se da Ásia a
            leste pela divisória de águas dos montes Urais, o 
            rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a 
            sudeste.
        </Text>
      </Flex>
      <Flex w='490px' h='99px'>
        <Flex
          p='1rem' 
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Text fontWeight='600' fontSize='48px' color='#FFBA08'>
            50
          </Text>
          <Text fontWeight='600' fontSize='24px'>
            países
          </Text>
        </Flex>
        <Flex
          p='1rem' 
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Text fontWeight='600' fontSize='48px' color='#FFBA08'>
            60
          </Text>
          <Text fontWeight='600' fontSize='24px'>
            línguas
          </Text>
        </Flex>
        <Flex
          p='1rem' 
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Text fontWeight='600' fontSize='48px' color='#FFBA08'>
            27
          </Text>
          <Text fontWeight='600' fontSize='24px'>
            cidades +100
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}