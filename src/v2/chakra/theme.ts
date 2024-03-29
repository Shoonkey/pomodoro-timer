import { extendTheme, ThemeOverride } from "@chakra-ui/react";


function getTheme(initialTheme: "dark" | "light") {
  const themeOverride: ThemeOverride = {
    config: {
      initialColorMode: initialTheme,
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

  return extendTheme(themeOverride);
}

export default getTheme;