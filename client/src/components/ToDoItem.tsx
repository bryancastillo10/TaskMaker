import { BiCheckCircle, BiTrash } from "react-icons/bi";
import { Flex,  Text,Spinner, Badge,IconButton } from "@chakra-ui/react";
import { TodoType } from "../api/api";
import useDeleteTodo from "../api/useDeleteTodo";
import useUpdateTodo from '../api/useUpdateTodo';

const ToDoItem = ({ todos }: { todos: TodoType }) => {
  const { deleteToDo, isDeleteLoading } = useDeleteTodo();
  const { updateTodo, isUpdateLoading } = useUpdateTodo();

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
          <Text textDecoration={todos.completed ? "line-through": "none"} fontSize="14px">
            {todos.body}
          </Text>
          <Badge variant="subtle" colorScheme={todos.completed ? "green":"yellow"}>
            {todos.completed ? "Done" : "In Progress"}
          </Badge>
        </Flex>
        <IconButton
          onClick={()=> updateTodo(todos._id)}
          colorScheme="teal"
          aria-label="Update"
          icon={isUpdateLoading ? <Spinner size="sm"/>:<BiCheckCircle />}
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
