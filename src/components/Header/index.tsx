import { Flex, Grid, Image } from '@chakra-ui/react'
import { ToggleColorMode } from '../ToggleColorMode'
import { BackPageButton } from '../BackPageButton'

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      h={['50px', '100px']}
      mx='auto'
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
        <Image 
          w={['81px', '184px']}
          src='./img/Logo.svg' 
          alt='Um avião voando sobre  o nome da logo World Trip'
          justifySelf='center'
          gridColumn='2'
        />
        <ToggleColorMode />
      </Grid>
    </Flex>
  )
}