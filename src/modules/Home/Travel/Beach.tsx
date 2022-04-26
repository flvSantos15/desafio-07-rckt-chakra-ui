import { Flex, Text, Image, useBreakpointValue, useColorMode } from '@chakra-ui/react'
// import { RiCheckboxBlankCircleFill } from 'react-icons/ri'

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
      w={['75px', '158px']}
      h={['21px', '145px']}
      flexDirection={['row', 'column']}
      justifyContent='center'
      alignItems='center'
      ml={['2.5rem', '0']}
    >
      {isWideVersion &&
        (
          <Flex w='85px' h='85px' justifyContent='center' mx='auto' mb='1rem'>
            <Image src='./img/surf1.png' alt='beach' />
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
        w={['52px', '66px']}
        textAlign={['right', 'center']}
        fontWeight='600'
        fontSize={['18px', '20px']}
        color={colorMode === 'light' ? 'default.dark.text' : 'default.light.text'}
      >
        praia
      </Text>
    </Flex>
  )
}
