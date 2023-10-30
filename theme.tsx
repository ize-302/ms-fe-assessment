import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";

const theme = extendTheme({
  colors: {
    brand: {
      gray50: "#EFF1F6",
      gray400: "#56616B",
      black300: "#131316",
      transhedJade100: "#E3FCF2",
      transhedJade300: "#075132",
      transhedJade400: "#0EA163",
      transhedRed100: "#F9E3E0",
      transhedRed400: "#961100",
      transhedYellow400: "#A77A07",
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default theme;
