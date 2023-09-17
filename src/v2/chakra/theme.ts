import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const themeOverride: ThemeOverride = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body": {
        padding: 0,
        margin: 0,
      },
    }
  },
  colors: {
    bg: {
      500: "#292929",
      800: "#1b1b1b"
    },
    primary: {
      500: "#4a35d4"
    }
  }
};

export default extendTheme(themeOverride);