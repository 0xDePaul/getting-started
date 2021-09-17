import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { Dashboard } from "./components/dashboard";
import ReactDOM from "react-dom";

ReactDOM.render(
  <ChakraProvider>
    <Dashboard />
  </ChakraProvider>,
  document.getElementById("root")
);
