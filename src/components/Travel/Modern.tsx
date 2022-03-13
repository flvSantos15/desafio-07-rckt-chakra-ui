import {Flex, Text , Image, useMediaQuery} from '@chakra-ui/react'

export function Modern() {
  const [isLargerThan800] = useMediaQuery('(min-width:800px)')
  return (
    <Flex
      w={['103px', '158px']}
      h={['24px', '145px']}
      flexDirection={['row', 'column']}
      alignItems='center'
      justifyContent='center'
    >
      {isLargerThan800 
        ? (
            <Flex w='85px' h='85px' justifyContent='center' mx='auto' mb='1rem'>
              <Image src={'./img/building1.png'} alt='modern'/>
            </Flex>
        )
        : (
          <Flex bg='#FFBA08' w='8px' h='8px' borderRadius='50%'></Flex>
        )
      }
      <Text 
        w={['87px', '113px']}
        textAlign={['right', 'center']}
        fontWeight='600' 
        fontSize={['18px', '20px']}
      >
        moderno
      </Text>
    </Flex>
  )
}