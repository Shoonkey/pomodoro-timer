import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./chakra/theme.ts";
import App from "./App.tsx";

function setupApp(containerId: string) {
  ReactDOM.createRoot(document.getElementById(containerId)!).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App containerProps={{ w: "100dvw", h: "100dvh" }} />
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default setupApp;
