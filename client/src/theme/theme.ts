import { extendTheme } from "@chakra-ui/react";
import { colors, fonts, fontWeights } from "./styles";
const config = {
  initialColorMode: "light", 
  useSystemColorMode: false, 
};


const theme = extendTheme({
  config,
  colors,
  fonts,
  fontWeights,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? "blue.800" : "blue.100",
        color: props.colorMode === "dark" ? "#FEF2EA" : "#E1E8FB",
      },
    }),
  },
});

export default theme;
