import {Flex, Image, Text, ImageProps} from '@chakra-ui/react'

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
  return(
    <Flex 
      bg='#fff' 
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
      />
      <Flex 
        border='1px solid #FFBA08' 
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
          <Text color='#47585B' fontWeight='600' fontSize='20px'>
            {city}
          </Text>
          <Text color='#999999' fontWeight='500' fontSize='16px'>
            {country}
          </Text>
        </Flex>
        <Flex
          backgroundImage={lang}
          w='30px'
          h='30px'
          borderRadius='50%'
        >
        </Flex>
      </Flex>
    </Flex>
  )
}