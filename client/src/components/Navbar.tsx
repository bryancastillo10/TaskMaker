import { Box, Flex, Container, Button, Heading, useColorMode } from "@chakra-ui/react";
import Gopher from "../assets/go.png";
import { BiMoon, BiSun } from "react-icons/bi";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode(); 

  return (
    <Container maxW="full" p="0">
      <Box bg="brand.100">
        <Flex h={16} justify="space-between" align="center" px={{base:"6" ,md:"20"}}>
          <Flex alignItems="center" gap="2">
            <img src={Gopher} alt="go-lang" width={28} height={32} />
            <Heading fontWeight="semibold" size="">
              Task Maker
            </Heading>
          </Flex>
          <Flex gap="2" align="center">
            <Button onClick={toggleColorMode} colorScheme="teal">
              {colorMode === "light" ? <BiMoon/>
               : <BiSun/>}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
