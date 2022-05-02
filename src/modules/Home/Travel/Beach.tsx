import { Flex, Text, Image, useBreakpointValue, useColorMode } from '@chakra-ui/react'

export function Beach() {
  const { colorMode } = useColorMode()
  const isWideVersion = useBreakpointValue({
    base: false,
    mg: true,
    lg: true,
    xl: true
  })

  return (
    <Flex
      w={['4.688rem', '9.875rem']}
      h={['1.313rem', '9.063rem']}
      flexDirection={['row', 'column']}
      justifyContent='center'
      alignItems='center'
      ml={['2.5rem', '0']}
    >
      {isWideVersion &&
        (
          <Flex w='5.313rem' h='5.313' justifyContent='center' mx='auto' mb='1rem'>
            <Image src='./img/surf1.png' alt='beach' />
          </Flex>
        )}
      {!isWideVersion && (
        <Flex
          bg='#FFBA08'
          w='0.5rem'
          h='0.5rem'
          borderRadius='50%'
        ></Flex>
      )}
      <Text
        w={['3.25rem', '4.125rem']}
        textAlign={['right', 'center']}
        fontWeight='600'
        fontSize={['1.125rem', '1.25rem']}
        color={colorMode === 'light' ? 'default.dark.text' : 'default.light.text'}
      >
        praia
      </Text>
    </Flex>
  )
}
