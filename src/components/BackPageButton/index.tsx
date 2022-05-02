import {Flex, IconButton} from '@chakra-ui/react'
import Router, { useRouter } from 'next/router'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

export function BackPageButton (){
  const { asPath } = useRouter()
  if (asPath === '/'){
    return (
      <div/>
    )
  }
  return (
    <Flex justifyContent='center'>
      <IconButton 
        aria-label='Back to previous page'
        icon={<MdOutlineKeyboardArrowLeft />}
        onClick={() => {
          Router.push('/')
        }}
        fontSize={['xl', '2xl']}
        justifyContent='center'
        variant='ghost'
        w='3rem'
      />
    </Flex>
  )
}