import { VStack, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <VStack>
      <Navbar />
      <Container>
        <AddToDo />
        <ToDoList/>
      </Container>
    </VStack>
  );
};

export default App;
