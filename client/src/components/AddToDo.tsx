import { VStack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

const AddToDo = () => {
  return (
    <VStack h="100px" bg={useColorModeValue("gray.400", "gray.700")}>
      <Text color={useColorModeValue("black", "white")}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, iure?
      </Text>
    </VStack>
  );
};

export default AddToDo;
