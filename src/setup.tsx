import React from "react";
import { Root, createRoot } from "react-dom/client";

import App from "./App";

interface AppSetupProps {
  containerId: string;
  isSubapp?: boolean;
  language?: string;
  theme?: "dark" | "light";
}

let root: Root;

function setupApp({ containerId, isSubapp = false, language, theme }: AppSetupProps) {
  if (!root)
    root = createRoot(document.getElementById(containerId)!);
  
  root.render(
    <React.StrictMode>
      <App isSubapp={isSubapp} language={language} theme={theme} />
    </React.StrictMode>
  );
}

export default setupApp;