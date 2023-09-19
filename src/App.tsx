import { ChakraProvider, Flex, Select } from "@chakra-ui/react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

import setupI18N from "./common/i18n";
import AppV1 from "./v1/App";
import AppV2 from "./v2/App";

interface AppProps {
  isSubapp?: boolean;
  language?: string;
  theme?: "dark" | "light";
}


function App({
  isSubapp = false,
  theme = "dark",
  language = "pt-BR",
}: AppProps) {
  const i18nInstance = useMemo(() => setupI18N(language), [language]);
  const { t, i18n } = useTranslation(undefined, { i18n: i18nInstance });

  const routerFactory = isSubapp ? createHashRouter : createBrowserRouter;
  
  const router = routerFactory(
    createRoutesFromElements(
      <>
        <Route path="/" loader={() => redirect("/v2")} />
        <Route
          path="/v1/*"
          element={<AppV1 theme={theme} language={i18n.language} />}
        />
        <Route
          path="/v2/*"
          element={<AppV2 theme={theme} language={i18n.language} />}
        />
      </>
    )
  );

  return (
    <ChakraProvider>
      <Flex
        flexDir="column"
        w={isSubapp ? "100%" : "100dvw"}
        h={isSubapp ? "100%" : "100dvh"}
      >
        {
          !isSubapp && (
            <Flex justifyContent="end" m={2}>
              <Select
                w="auto"
                aria-label={t("selectLanguage")}
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="en-US">en-US</option>
                <option value="pt-BR">pt-BR</option>
                <option value="es-ES">es-ES</option>
              </Select>
            </Flex>
          )
        }
        <RouterProvider router={router} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
