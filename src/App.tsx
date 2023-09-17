import { ChakraProvider, Flex } from "@chakra-ui/react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import HomepageV2 from "./v2/pages/Homepage";
import themeV2 from "./v2/chakra/theme";

interface AppProps {
  basename?: string;
  isSubApp?: boolean;
  language?: string;
}

function App({ basename = "/", isSubApp = false, language="pt-BR" }: AppProps) {
  const router = createBrowserRouter(
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
    ],
    { basename }
  );

  return (
    <Flex
      flexDir="column"
      w={isSubApp ? "100%" : "100dvw"}
      h={isSubApp ? "100%" : "100dvh"}
    >
      <RouterProvider router={router} />
    </Flex>
  );
}

export default App;
