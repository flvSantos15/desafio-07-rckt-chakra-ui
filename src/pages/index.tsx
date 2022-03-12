import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Travel } from '../components/Travel'

const Home: NextPage = () => {
  return (
    <Flex w='100%' flexDirection='column'>

      <Header />

      <Banner />

      <Travel />
    </Flex>
  )
}

export default Home
