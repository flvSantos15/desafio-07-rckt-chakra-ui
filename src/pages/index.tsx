import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'

const Home: NextPage = () => {
  return (
    <Flex w='100%' flexDirection='column'>
      <Flex w='100%' border='1px solid blue' justifyContent='center'>
        <Header />
      </Flex>
      <Flex border='1px solid red' h='368,21px' w='100%'>
        <Banner/>
      </Flex>
    </Flex>
  )
}

export default Home
