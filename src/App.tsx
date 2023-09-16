import { Box, BoxProps } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";

interface AppProps {
  basename?: string;
  containerProps: BoxProps;
}

function App({ basename = "/", containerProps }: AppProps) {
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
    <Box {...containerProps}>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
