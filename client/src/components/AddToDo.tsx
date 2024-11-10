import { Stack, Flex, Input, IconButton, useColorMode } from "@chakra-ui/react";
import { CgAdd } from "react-icons/cg";

const AddToDo = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack>
      <Flex p="2" gap="2">
        <Input
          color={colorMode=== "dark" ?"white":"black"}
          placeholder="Add some Task Here"
          focusBorderColor="brand.100"
          _placeholder={{ opacity: 1, color: "gray.400" }}
        />
        <IconButton colorScheme="teal" aria-label="add-todo" >
          <CgAdd />
        </IconButton>
      </Flex>
    </Stack>
  );
};

export default AddToDo;
