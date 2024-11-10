import { VStack, Text, Flex, Spinner } from "@chakra-ui/react";
const ToDoList = () => {
  const isLoading = false;
  return (
    <VStack h="250px" bg="brand.100" rounded="2xl" shadow="md">
      <Flex>
        <Text fontSize="3xl">List of Tasks</Text>
      </Flex>
      {isLoading && (<Flex justifyContent={"center"} my={8}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.500"
          size="xl"
        />
      </Flex>)}
      <Flex>
        <VStack alignItems="center" gap="3">
          <Text>Completed Tasks</Text>
        </VStack>
      </Flex>
    </VStack>
  );
}

export default ToDoList;
