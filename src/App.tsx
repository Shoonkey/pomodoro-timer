import { Box } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";

interface AppProps {
  basename: string;
  isSubApp: boolean;
}

function App({ basename = "/", isSubApp }: AppProps) {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        Component: Homepage,
      },
    ],
    { basename }
  );

  return (
    <Box w={isSubApp ? "100%" : "100dvw"} h={isSubApp ? "100%" : "100dvh"}>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
