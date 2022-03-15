import {Flex, Text , Image, useMediaQuery, useBreakpointValue} from '@chakra-ui/react'

export function More() {
  const [isLargerThan800] = useMediaQuery('(min-width:800px)')
  const isWideVersion = useBreakpointValue({
    base: false,
    mg: true,
    lg: true,
    xl: true
  })
  return (
    <Flex
      w={['96px', '158px']}
      h={['24px', '145px']}
      flexDirection={['row', 'column']}
      alignItems='center'
      justifyContent='center'
      ml={['6rem', '0']}
      mr='0'
    >
      {isWideVersion &&
        (
          <Flex w='85px' h='85px' justifyContent='center' mx='auto' mb='1rem'>
            <Image src={'./img/earth1.png'} alt='more'/>
          </Flex>
        )}
      {!isWideVersion && (
        <Flex
          bg='#FFBA08'
          w='8px'
          h='8px'
          borderRadius='50%'
        ></Flex>
      )}
      <Text 
        w={['80px', '100px']}
        textAlign={['right', 'center']}
        fontWeight='600' 
        fontSize={['18px', '20px']}
      >
        e mais...
      </Text>
    </Flex>
  )
}