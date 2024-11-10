import { VStack, Text, Flex, Spinner } from "@chakra-ui/react";
import ToDoItem from "./ToDoItem";
import useGetTodo from "../api/useGetTodo";
const ToDoList = () => {
  const { Todos, isLoading } = useGetTodo();
  return (
    <VStack py="4" bg="brand.100" rounded="2xl" shadow="md">
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
        <VStack alignItems="center" gap="3" px="8">
          {Todos?.map((todo) =>( 
            <ToDoItem key={todo._id} todos={todo} />
          ))}
        </VStack>
      </Flex>
    </VStack>
  );
}

export default ToDoList;
