import {Flex, Image, Text, ImageProps, Avatar, useColorMode} from '@chakra-ui/react'

interface CityProps extends ImageProps{
  src: string
  alt: string
  city: string
  country: string
  lang: string
}

export function City({
  alt,
  city,
  country,
  lang,
  src
}: CityProps){
  const { colorMode } = useColorMode()
  return(
    <Flex 
      bg={colorMode === 'light' ? 'default.light.background' : '#101218'}
      w='256px'
      h='279px'
      mb='2rem'
      flexDirection='column'
      borderRadius='4px'
    >
      <Image
        src={src}
        alt={alt}
        w='256px'
        h='173px'
        borderRadius='4px 4px 0px 0px'
        cursor='pointer'
      />
      <Flex 
        borderRight='0.5px solid #FFBA08' 
        borderLeft='0.5px solid #FFBA08' 
        borderBottom='0.5px solid #FFBA08' 
        justifyContent='space-between' 
        alignItems='center'
        h='106px'
        px='1rem'
        borderRadius='0px 0px 4px 4px'
      >
        <Flex
          p='0.5m'
          flexDirection='column'
        >
          <Text 
            color={colorMode === 'light' ? 'default.dark.text' : 'default.light.text'}
            fontWeight='600' 
            fontSize='20px'
          >
            {city}
          </Text>
          <Text 
            color={colorMode === 'light' ? 'default.dark.info' : 'default.light.info'}
            fontWeight='500' 
            fontSize='16px'
          >
            {country}
          </Text>
        </Flex>
        <Flex
          w='32px'
          h='32px'
          borderRadius='50%'
        >
          <Avatar
            src={lang}
            w='30px'
            h='30px'
            borderRadius='50%'
          />
        </Flex>
      </Flex>
    </Flex>
  )
}