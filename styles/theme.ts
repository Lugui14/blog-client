// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

const fonts = {
  ...chakraTheme.fonts,
  body: "Poppins, sans-serif",
  head: "Poppins, sans-serif",
};

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "62em",
};

const colors = {
  ...chakraTheme.colors,
  brand: {
    900: "#010001",
    800: "#0e0e0e",
  },
};

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const overrides = {
  ...chakraTheme,
  fonts,
  colors,
  breakpoints,
  config,
  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700,
  },
};

const theme = extendTheme(overrides);

export default theme;