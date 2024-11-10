import { Stack, Flex, Input, IconButton, StackDivider, useColorMode } from "@chakra-ui/react";
import { CgAdd } from "react-icons/cg";

const AddToDo = () => {
  const { colorMode } = useColorMode();
  return (
    < Stack spacing="8" divider={<StackDivider borderColor="gray.200" />}>
      <Flex p="2" gap="2">
        <Input
          color={colorMode === "dark" ? "white" : "black"}
          placeholder="Add some Task Here"
          borderColor="#111000"
          focusBorderColor="brand.100"
          errorBorderColor="crimson"
          _placeholder={{ opacity: 1, color: "gray.400" }}
        />
        <IconButton colorScheme="teal" aria-label="add-todo">
          <CgAdd />
        </IconButton>
      </Flex>
    </Stack>
  );
};

export default AddToDo;
