import {Flex, Text , Image, useMediaQuery} from '@chakra-ui/react'

export function Classic() {
  const [isLargerThan800] = useMediaQuery('(min-width:800px)')
  return (
    <Flex
      w={['100px', '158px']}
      h={['21px', '145px']}
      flexDirection={['row', 'column']}
      alignItems='center'
      justifyContent='center'
      ml={['2.5rem', '0']}
    >
      {isLargerThan800 
        ? (
            <Flex w='85px' h='85px' justifyContent='center' mx='auto' mb='1rem'>
              <Image src={'./img/museum1.png'} alt='classic'/>
            </Flex>
        )
        : (
          <Flex bg='#FFBA08' w='8px' h='8px' borderRadius='50%'></Flex>
        )
      }
      <Text 
        w={['77px', '100px']}
        textAlign={['right', 'center']}
        fontWeight='600' 
        fontSize={['18px', '20px']}
      >
        clássico
      </Text>
    </Flex>
  )
}