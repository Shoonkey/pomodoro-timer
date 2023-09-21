import {
  Box,
  ChakraProvider,
  Flex,
  Select,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createHashRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { I18nextProvider, useTranslation } from "react-i18next";
import { useEffect, useMemo } from "react";

import AppSettingsProvider, {
  AppSettingsData,
} from "./common/components/AppSettingsProvider";
import useAppSettings from "./common/hooks/useAppSettings";
import setupI18N from "./common/i18n";
import AppV1 from "./v1/App";
import AppV2 from "./v2/App";

function Root() {
  const { t, i18n } = useTranslation();
  const { isSubapp } = useAppSettings();
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     navigate("/v2");
  //     return;
  //   }
  // }, [location]);

  return (
    <Flex
      flexDir="column"
      w={isSubapp ? "100%" : "100dvw"}
      h={isSubapp ? "100%" : "100dvh"}
    >
      <Flex justifyContent="end" alignItems="center" p={2}>
        <Box
          bg="linear-gradient(90deg, hsla(139, 72%, 83%, 1) 0%, hsla(229, 89%, 62%, 1) 100%);"
          p={1}
          borderRadius="8px"
        >
          <Flex gap={2} borderRadius="8px">
            <VisuallyHidden>{t("appSettings")}</VisuallyHidden>
            {/* <Select
                bg="gray.800"
                w="auto"
                aria-label={t("selectVersion")}
                value={location.pathname.startsWith("/v1") ? "v1" : "v2"}
                onChange={(e) => navigate(`/${e.target.value}`)}
              >
                <option value="v1">v1</option>
                <option value="v2">v2</option>
              </Select> */}
            {!isSubapp && (
              <Select
                w="auto"
                bg="gray.800"
                aria-label={t("selectLanguage")}
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="en-US">en-US</option>
                <option value="pt-BR">pt-BR</option>
                <option value="es-ES">es-ES</option>
              </Select>
            )}
          </Flex>
        </Box>
      </Flex>
      <Flex flexGrow={1}>
        <AppV1 />
        {/* <Routes>
            <Route
              path="/v1/*"
              element={<AppV1 />}
            />
            <Route
              path="/v2/*"
              element={<AppV2 />}
            />
          </Routes> */}
      </Flex>
    </Flex>
  );
}

function App({
  isSubapp = false,
  theme = "dark",
  language = "pt-BR",
}: AppSettingsData) {
  const i18nInstance = useMemo(() => setupI18N(language), [language]);
  const { i18n } = useTranslation(undefined, { i18n: i18nInstance });

  const routerFactory = isSubapp ? createHashRouter : createBrowserRouter;

  const router = routerFactory([
    {
      path: "/*",
      Component: Root,
    },
  ]);

  return (
    <AppSettingsProvider settings={{ isSubapp, theme, language: i18n.language }}>
      <I18nextProvider i18n={i18n}>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </I18nextProvider>
    </AppSettingsProvider>
  );
}

export default App;
