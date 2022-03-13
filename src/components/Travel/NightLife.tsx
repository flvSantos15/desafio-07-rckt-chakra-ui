import {Flex, Text, Image, useMediaQuery} from '@chakra-ui/react'

export function NightLife() {
  const [isLargerThan800] = useMediaQuery('(min-width:800px)')
  return (
    <Flex
      w={['136px', '158px']}
      h={['21px', '145px']}
      flexDirection={['row', 'column']}
      justifyContent='center'
      alignItems='center'
    >
      {isLargerThan800 
        ? (
            <Flex w='85px' h='85px' justifyContent='center' mx='auto' mb='1rem'>
              <Image src={'./img/cocktail1.png'} alt='night life'/>
            </Flex>
        )
        : (
          <Flex bg='#FFBA08' w='8px' h='8px' borderRadius='50%'></Flex>
        )
      }
      <Text 
        w={['140px', '158px']}
        textAlign={['right', 'center']}
        fontWeight='600' 
        fontSize={['18px', '20px']}
      >
        vida noturna
      </Text>
    </Flex>
  )
}