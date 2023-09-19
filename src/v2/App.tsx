import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import Homepage from "./pages/Homepage";
import getTheme from "./chakra/theme";
import setupI18N from "./i18n";

interface AppProps {
  language?: string;
  theme?: "dark" | "light";
}

function App({ theme = "dark", language = "pt-BR" }: AppProps) {
  const i18n = setupI18N(language);

  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={getTheme(theme)}>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </ChakraProvider>
    </I18nextProvider>
  );
}

export default App;
