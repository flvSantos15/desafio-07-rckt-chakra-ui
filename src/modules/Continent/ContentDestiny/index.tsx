import { 
  Flex, 
  Popover, 
  Text, 
  PopoverTrigger, 
  Icon, 
  PopoverArrow, 
  PopoverBody, 
  PopoverCloseButton, 
  PopoverContent,
  useColorMode
} from '@chakra-ui/react'
import { RiInformationLine } from "react-icons/ri";
import { ContinentResponse } from "../../../shared/interfaces/models/Continent";

export function ContentDestiny({ bio, cities, languages, countries }: ContinentResponse) {
  const { colorMode } = useColorMode()

  return (
    <Flex
      w={['100%', '1160px']}
      mx={['auto']}
      mb={['2rem', '4rem']}
      p='0.5rem'
      alignItems='flex-start'
      justifyContent={['center', 'space-between']}
      flexDirection={['column', 'row']}
    >
      <Flex w={['100%', '600px']}>
        <Text 
          color={colorMode === 'light' ? 'default.dark.text' : 'default.light.text'}
          fontWeight='400' 
          fontSize={['14px', '24px']} 
          textAlign='justify'
        >
          {bio}
        </Text>
      </Flex>
      <Flex 
        w={['100%', '490px']} 
        h={['59px', '99px']} 
        mt={['1rem', '0']}
        px='0'
        justifyContent='center' 
        alignItems='center'
      >
        <Flex
          p={['0.5rem', '1rem']}
          flexDirection='column'
          justifyContent='center'
          alignItems={['start', 'center']}
        >
          <Text fontWeight='600' fontSize={['24px', '48px']} color='#FFBA08'>
            {countries}
          </Text>
          <Text 
            fontWeight='600' 
            fontSize={['18px', '24px']}
            color={colorMode === 'light' ? 'default.dark.text' : 'default.light.text'}
          >
            países
          </Text>
        </Flex>
        <Flex
          p={['0.5rem', '1rem']}
          flexDirection='column'
          justifyContent='center'
          alignItems={['start', 'center']}
        >
          <Text fontWeight='600' fontSize={['24px', '48px']} color='#FFBA08'>
            {languages}
          </Text>
          <Text 
            fontWeight='600' 
            fontSize={['18px', '24px']}
            color={colorMode === 'light' ? 'default.dark.text' : 'default.light.text'}
          >
            línguas
          </Text>
        </Flex>
        <Flex
          p={['0', '1rem']}
          flexDirection='column'
          justifyContent='center'
          alignItems={['start', 'center']}
        >
          <Text fontWeight='600' fontSize={['24px', '48px']} color='#FFBA08'>
            {cities}
          </Text>
          <Flex alignItems='center' w='100%'>
            <Text 
              fontWeight='600' 
              fontSize={['18px', '24px']} 
              mr='0.2rem'
              color={colorMode === 'light' ? 'default.dark.text' : 'default.light.text'}
            >
              cidades +100

              <Popover>
                <PopoverTrigger>
                  <span>
                    <Icon 
                      cursor="pointer" 
                      as={RiInformationLine} 
                      ml="1" 
                      color="gray.400" 
                      w={["10px","16px"]} 
                      h={["10px","16px"]}
                    />
                  </span>
                </PopoverTrigger>
                <PopoverContent 
                  bg="gray.700" 
                  color="yellow.400" 
                  _focus={{
                    outline: 'none'
                  }}
                  w='8rem'
                >
                  <PopoverArrow bg="gray.700"/>
                  <PopoverCloseButton />
                  <PopoverBody fontWeight="400" fontSize="lg">
                    {cities} cities
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Text>
            
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}