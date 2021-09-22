import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { Dashboard } from "./components/dashboard";
import ReactDOM from "react-dom";
import { NavBar } from "./components/navbar";

ReactDOM.render(
  <ChakraProvider>
    <NavBar></NavBar>
  </ChakraProvider>,
  document.getElementById("root")
);
