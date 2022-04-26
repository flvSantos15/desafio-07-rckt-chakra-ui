import {Flex, Text, Image, useBreakpointValue, useColorMode} from '@chakra-ui/react'

export function NightLife() {
  const { colorMode } = useColorMode()
  const isWideVersion = useBreakpointValue({
    base: false,
    mg: true,
    lg: true,
    xl: true
  })
  return (
    <Flex
      w={['136px', '158px']}
      h={['21px', '145px']}
      flexDirection={['row', 'column']}
      justifyContent='center'
      alignItems='center'
    >
      {isWideVersion &&
        (
          <Flex w='85px' h='85px' justifyContent='center' mx='auto' mb='1rem'>
            <Image src={'./img/cocktail1.png'} alt='night life'/>
          </Flex>
        )}
      {!isWideVersion && (
        <Flex bg='#FFBA08' w='8px' h='8px' borderRadius='50%'></Flex>
      )}
      <Text 
        w={['140px', '158px']}
        textAlign={['right', 'center']}
        fontWeight='600' 
        fontSize={['18px', '20px']}
        color={colorMode === 'light' ? 'default.dark.text' : 'default.light.text'}
      >
        vida noturna
      </Text>
    </Flex>
  )
}