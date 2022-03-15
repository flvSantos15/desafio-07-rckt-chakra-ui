import {Flex, Text} from '@chakra-ui/react'

export function ContentDestiny() {
  return(
    <Flex 
      w={['100%', '1160px']}
      mx={['auto']}
      mb={['2rem', '4rem']}
      alignItems='center' 
      justifyContent={['center', 'space-between']}
      flexDirection={['column', 'row']}
    >
      <Flex w={['334px', '600px']} h={['146px', '211px']}>
        <Text color='#47585B' fontWeight='400' fontSize={['14px', '24px']} textAlign='justify'>
          A Europa é, por convenção, um dos seis continentes
           do mundo. Compreendendo a península ocidental da 
           Eurásia, a Europa geralmente divide-se da Ásia a
            leste pela divisória de águas dos montes Urais, o 
            rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a 
            sudeste.
        </Text>
      </Flex>
      <Flex w={['343px', '490px']} h={['59px', '99px']} mt='0.5rem' justifyContent='center'>
        <Flex
          p={['0.5rem', '1rem']}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Text fontWeight='600' fontSize={['24px', '48px']} color='#FFBA08'>
            50
          </Text>
          <Text fontWeight='600' fontSize={['18px', '24px']}>
            países
          </Text>
        </Flex>
        <Flex
          p={['0.5rem', '1rem']}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Text fontWeight='600' fontSize={['24px', '48px']} color='#FFBA08'>
            60
          </Text>
          <Text fontWeight='600' fontSize={['18px', '24px']}>
            línguas
          </Text>
        </Flex>
        <Flex
          p={['0.5rem', '1rem']}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Text fontWeight='600' fontSize={['24px', '48px']} color='#FFBA08'>
            27
          </Text>
          <Text fontWeight='600' fontSize={['18px', '24px']}>
            cidades +100
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}