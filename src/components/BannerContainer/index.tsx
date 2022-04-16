import {ReactNode} from 'react'
import {
  Box,
  Stack,
  Text,
  Heading,
  Flex,
  Image,
  useBreakpointValue
} from '@chakra-ui/react'

interface BannerContainerProps {
  bgImage: string
  bgSize: string
  bgPosition?: string
  height: string[]
  children: ReactNode
}

export function BannerContainer({
  bgImage,
  bgSize,
  children,
  height,
  bgPosition
}: BannerContainerProps){
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex 
      flexDir='row'
      w='100%'
      h={height}
      bgImage={bgImage}
      bgRepeat='no-repeat'
      bgSize={bgSize}
      bgPosition={bgPosition}
      justifyContent='space-evenly'
      mb={['0.875rem', '1.75rem']}
    >
      {children}
    </Flex>
  )
}