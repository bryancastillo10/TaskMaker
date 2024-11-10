import { BiCheckCircle, BiTrash } from "react-icons/bi";
import { Flex,  Text, Badge,IconButton } from "@chakra-ui/react";
import { TodoType } from "../api/api";

const ToDoItem = ({todos}:{todos:TodoType}) => {
    return (
      <Flex justify="space-between" align="center" w={{base:"26rem",sm:"20rem", md:"32rem" }} gap="4" px={{base:"4",md:"6"}}>
        <Flex
          flex="1"
          w="fit"
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
          colorScheme="red"
          aria-label="Delete"
          icon={<BiTrash />}
          borderRadius="full"
        />
      </Flex>
    );
}

export default ToDoItem;
