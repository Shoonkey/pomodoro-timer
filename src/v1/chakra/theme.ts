import { extendTheme, ThemeOverride } from "@chakra-ui/react";

function getTheme(initialTheme: "dark" | "light") {
  const theme: ThemeOverride = {
    config: {
      initialColorMode: initialTheme,
      useSystemColorMode: false
    },
    styles: {
      global: {
        "html, body": {
          padding: 0,
          margin: 0
        },
        "*": {
          boxSizing: "border-box"
        }
      }
    }
  };

  return extendTheme(theme);
}

export default getTheme;