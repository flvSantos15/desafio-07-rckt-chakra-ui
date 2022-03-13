import {Flex, Text , Image, useMediaQuery} from '@chakra-ui/react'

export function Beach() {
  const [isLargerThan800] = useMediaQuery('(min-width:800px)')
  return (
    <Flex
      w={['75px', '158px']}
      h={['21px', '145px']}
      flexDirection={['row', 'column']}
      justifyContent='center'
      alignItems='center'
      ml={['2.5rem', '0']}
    >
      {isLargerThan800 
        ? (
            <Flex w='85px' h='85px' justifyContent='center' mx='auto' mb='1rem'>
              <Image src='./img/surf1.png' alt='beach'/>
            </Flex>
        )
        : (
          <Flex 
            bg='#FFBA08' 
            w='8px'
            h='8px' 
            borderRadius='50%'
          ></Flex>
        )
      }
      <Text
        w={['52px', '66px']}
        textAlign={['right', 'center']}
        fontWeight='600' 
        fontSize={['18px', '20px']}
      >
        praia
      </Text>
    </Flex>
  )
}