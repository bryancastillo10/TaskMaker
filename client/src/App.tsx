import {  Stack, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <Stack  gap="0"  justifyContent="center">
      <Navbar />
      <Container w="full">
        <AddToDo />
        <ToDoList/>
      </Container>
    </Stack>
  );
};

export default App;
