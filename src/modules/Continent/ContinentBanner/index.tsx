import { Flex, Heading } from "@chakra-ui/react";
import { ContinentResponse } from "../../../shared/interfaces/models/Continent";

export function ContinentBanner({ image, title }: ContinentResponse) {
  return (
    <Flex
      w="100%"
      h={["160px", "300px" ,"450px"]}
      px={["0","0","36"]}
      pt={["0","0","72"]}
      mx={['auto']}
      mb={['1.5rem', '4rem']}
      bgImage={`url('${image}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justifyContent={["center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "6xl"]}
        color="#fff"
        fontWeight="medium"
      >
        {title}
      </Heading>
    </Flex>
  )
}