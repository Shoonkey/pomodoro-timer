import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./chakra/theme";
import App from "./App";

interface AppSetupProps {
  containerId: string;
  basename?: string;
  isSubApp?: boolean;
}

function setupApp({
  containerId,
  basename = "/",
  isSubApp = false,
}: AppSetupProps) {
  ReactDOM.createRoot(document.getElementById(containerId)!).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App basename={basename} isSubApp={isSubApp} />
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default setupApp;
