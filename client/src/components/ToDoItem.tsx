import { BiCheckCircle, BiTrash } from "react-icons/bi";
import { Flex,  Text,Spinner, Badge,IconButton } from "@chakra-ui/react";
import { TodoType } from "../api/api";
import useDeleteTodo from "../api/useDeleteTodo";

const ToDoItem = ({ todos }: { todos: TodoType }) => {
  const { deleteToDo, isDeleteLoading } = useDeleteTodo();

    return (
      <Flex justify="space-between" align="center" gap="4" px={{base:"4",md:"6"}}>
        <Flex
          flex="1"   
          py="3"
          px="4"
          border="1px"
          borderColor="white"
          justifyContent="space-between"
          align="center"
          borderRadius="lg"
          gap="12"
        >
          <Text fontSize="14px">
            {todos.body}
          </Text>
          <Badge variant="subtle">{todos.completed ? "Done": "In Progress"}</Badge>
        </Flex>
        <IconButton
          colorScheme="teal"
          aria-label="Done"
          icon={<BiCheckCircle />}
          borderRadius="full"
        />
        <IconButton
          onClick={()=>deleteToDo(todos._id)}
          colorScheme="red"
          aria-label="Delete"
          icon={ isDeleteLoading ? <Spinner size="sm" /> : <BiTrash />}
          borderRadius="full"
        />
      </Flex>
    );
}

export default ToDoItem;
