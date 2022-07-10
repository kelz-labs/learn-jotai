import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { Provider as JotaiProvider } from "jotai";
import * as React from "react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <JotaiProvider>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <TopBar />
          <TodoList />
          <TodoAdd />
        </Box>
      </JotaiProvider>
    </ChakraProvider>
  );
};
