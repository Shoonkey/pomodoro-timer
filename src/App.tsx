import { ChakraProvider, Flex } from "@chakra-ui/react";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  redirect,
} from "react-router-dom";

import HomepageV2 from "./v2/pages/Homepage";
import themeV2 from "./v2/chakra/theme";

interface AppProps {
  isSubapp?: boolean;
  language?: string;
  theme?: string;
}

function App({ isSubapp = false, theme, language }: AppProps) {
  const routerFactory = isSubapp ? createHashRouter : createBrowserRouter;

  const router = routerFactory(
    [
      {
        path: "/",
        loader: () => redirect("/v2"),
      },
      {
        path: "/v2",
        element: (
          <ChakraProvider theme={themeV2}>
            <HomepageV2 />
          </ChakraProvider>
        ),
      },
    ]
  );

  return (
    <Flex
      flexDir="column"
      w={isSubapp ? "100%" : "100dvw"}
      h={isSubapp ? "100%" : "100dvh"}
    >
      <RouterProvider router={router} />
    </Flex>
  );
}

export default App;
