import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./chakra/theme.ts";
import App from "./App.tsx";

function setupApp(
  containerId: string,
  basename: string = "/",
  isSubApp: boolean = false
) {
  ReactDOM.createRoot(document.getElementById(containerId)!).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App basename={basename} isSubApp={isSubApp} />
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default setupApp;
