import { Box, Flex, Container, Heading } from "@chakra-ui/react";
import Gopher from "../../public/go.png";
import { ColorModeButton, useColorModeValue } from "./ui/color-mode";

const Navbar = () => {
  return (
    <Container maxW="full" p="0">
      <Box bg={useColorModeValue("fg.info", "blue.700")}>
        <Flex h={16} justify="space-between" align="center" px="20">
          <Flex alignItems="center" gap="2">
            <img src={Gopher} alt="go-lang" width={28} height={28}/>
            <Heading fontWeight="semibold" size="lg">Task Maker</Heading>
          </Flex>
          <ColorModeButton />
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
