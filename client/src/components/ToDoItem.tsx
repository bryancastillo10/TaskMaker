import { BiCheckCircle, BiTrash } from "react-icons/bi";
import { Flex,  Text, Badge,IconButton } from "@chakra-ui/react";

const ToDoItem = () => {
    return (
      <Flex justify="space-between" align="center" w={{base:"26rem",sm:"20rem", md:"32rem" }} gap="4">
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
            Walk the Dog
          </Text>
          <Badge variant="subtle">Done</Badge>
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
