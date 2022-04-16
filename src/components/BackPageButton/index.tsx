import {IconButton} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

export function BackPageButton (){
  const { asPath, back } = useRouter()
  // if it's tha mainpage return a empty div
  if (asPath === '/'){
    return (
      <div/>
    )
  }
  return (
    <IconButton 
      aria-label='Back to previous page'
      icon={<MdOutlineKeyboardArrowLeft />}
      onClick={back}
      fontSize={['xl', '2xl']}
      justifyContent='center'
    />
  )
}