import {
  Box,
  Flex,
  IconButton,
  Select,
  Tooltip,
  VisuallyHidden,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SunHorizon, MoonStars } from "@phosphor-icons/react";

import useAppSettings from "../hooks/useAppSettings";
import AppV1 from "../../v1/App";

function Root() {
  const { isSubapp } = useAppSettings();

  const { t, i18n } = useTranslation();
  const { colorMode: theme, setColorMode: setTheme } = useColorMode();
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
          bg={
            // TODO: When v2 comes around, leave it set as the gradient as there will always be a child element
            isSubapp
              ? "none"
              : "linear-gradient(90deg, hsla(139, 72%, 83%, 1) 0%, hsla(229, 89%, 62%, 1) 100%);"
          }
          p={1}
          borderRadius="8px"
        >
          <Flex gap={2} borderRadius="8px">
            <VisuallyHidden>{t("appSettings")}</VisuallyHidden>
            {/* <Select
                bg="gray.800"
                color="whiteAlpha.800"
                w="auto"
                aria-label={t("selectVersion")}
                value={location.pathname.startsWith("/v1") ? "v1" : "v2"}
                onChange={(e) => navigate(`/${e.target.value}`)}
              >
                <option value="v1">v1</option>
                <option value="v2">v2</option>
              </Select> */}
            {!isSubapp && (
              <>
                <Select
                  w="auto"
                  bg="gray.800"
                  color="whiteAlpha.800"
                  aria-label={t("selectLanguage")}
                  value={i18n.language}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                >
                  <option value="en-US">en-US</option>
                  <option value="pt-BR">pt-BR</option>
                  <option value="es-ES">es-ES</option>
                </Select>
                <Tooltip placement="left" label={t("changeTheme")}>
                  <IconButton
                    aria-label={t("changeTheme")}
                    color="gray.800"
                    bg="transparent"
                    _hover={{ bg: "whiteAlpha.400" }}
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    icon={
                      theme === "dark" ? (
                        <SunHorizon size={36} weight="fill" />
                      ) : (
                        <MoonStars size={36} weight="fill" />
                      )
                    }
                  />
                </Tooltip>
              </>
            )}
          </Flex>
        </Box>
      </Flex>
      <Flex flexGrow={1}>
        <AppV1 language={i18n.language} />
        {/* <Routes>
            <Route
              path="/v1/*"
              element={<AppV1 language={i18n.language} />}
            />
            <Route
              path="/v2/*"
              element={<AppV2 language={i18n.language} />>}
            />
          </Routes> */}
      </Flex>
    </Flex>
  );
}

export default Root;
