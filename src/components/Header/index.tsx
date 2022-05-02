import { Box, Flex, Grid } from '@chakra-ui/react'
import Image from 'next/image'
import { ToggleColorMode } from '../ToggleColorMode'
import { BackPageButton } from '../BackPageButton'

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      h={['50px', '100px']}
      mx='auto'
      mb='2rem'
      px='1rem'
      justify='center'
      align='center'
    >
      <Grid
        h='100%'
        mx='auto'
        w='100%'
        maxW='1160px'
        alignItems='center'
        templateColumns='repeat(3, 1fr)'
        justifyContent='center'
      >
        <BackPageButton />
        <Box
          width={['130px', '184px']}
          height={['30px', '45.92px']}
          justifySelf='center'
          gridColumn='2'
        >
          <Image 
            width='100%'
            height='25px'
            src='/img/Logo.svg' 
            alt='Um avião voando sobre  o nome da logo World Trip'
            layout='responsive'
          />
        </Box>
        <ToggleColorMode />
      </Grid>
    </Flex>
  )
}