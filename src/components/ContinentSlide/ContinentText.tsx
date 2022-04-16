import { Box, Text, Flex, Link, BackgroundProps } from '@chakra-ui/react'
import NextLink from 'next/link'

interface ContinentTextProps {
  href: string
  title: string
  description: string
  imageUrl: string
  imagePosition?: string
}

export function ContinentText({
  title,
  href,
  description,
  imageUrl,
  imagePosition = 'center'
}: ContinentTextProps){
  return (
    <Box
      bgImage={imageUrl}
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPosition={imagePosition}
      color='default.light.text'
      h='100%'
      w='100%'
    >
      <NextLink href={href} passHref>
        <Link>
        <Flex
          as='a'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          flex='1'
          h='100%'
          w='100%'
        >
          <Text
            fontSize={['4xl', '7xl']}
            fontWeight='bold'
            textShadow='3px 3px #777'
          >
            {title}
          </Text>
          <Text
            fontSize={['md', '4xl']}
            textShadow='3px 3px #777'
          >
            {description}
          </Text>
        </Flex>
        </Link>
      </NextLink>
    </Box>
  )
}