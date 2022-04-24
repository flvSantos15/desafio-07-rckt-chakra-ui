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
        <Link _hover={{textDecoration: 'none'}}>
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
            textShadow='2px 2px #2b2b2b'
          >
            {title}
          </Text>
          <Text
            fontSize={['md', '4xl']}
            textShadow='2px 2px 1px #2b2b2b'
          >
            {description}
          </Text>
        </Flex>
        </Link>
      </NextLink>
    </Box>
  )
}