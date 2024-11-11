import { useState, ChangeEvent, FormEvent } from "react";
import { Stack, Flex, Spinner, FormControl, Input, IconButton, StackDivider, useColorMode } from "@chakra-ui/react";
import { CgAdd } from "react-icons/cg";
import useCreateTodo from "../api/useCreateTodo";


const AddToDo = () => {
  const { colorMode } = useColorMode();
  const { createTodo, isCreateLoading } = useCreateTodo();

  const [toDoData, setTodoData] = useState<string>("");
  
  const onChangeToDo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoData(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createTodo(toDoData);
    setTodoData("");
  };

  return (
    <Stack spacing="8" divider={<StackDivider borderColor="gray.200" />}>
      <FormControl as="form" onSubmit={handleSubmit}>
        <Flex p="2" gap="2">
          <Input
            type="text"
            value={toDoData}
            onChange={onChangeToDo}
            color={colorMode === "dark" ? "white" : "black"}
            placeholder="Add some Task Here"
            borderColor="#111000"
            focusBorderColor="brand.100"
            errorBorderColor="crimson"
            _placeholder={{ opacity: 1, color: "gray.400" }}
          />
          <IconButton isLoading={isCreateLoading} type="submit" colorScheme="teal" aria-label="add-todo">
            {isCreateLoading ? <Spinner size="sm" /> : <CgAdd />}
          </IconButton>
        </Flex>
      </FormControl>
    </Stack>
  );
};

export default AddToDo;
