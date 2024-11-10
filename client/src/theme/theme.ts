import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light", 
  useSystemColorMode: false, 
};

const colors = {
  brand: {
    100: "#0072b2", 
    900: "#1a202c", 
  },
};

const theme = extendTheme({
  config,
  colors,
  styles: {
    global: (props: { colorMode: string; }) => ({
      body: {
        bg: props.colorMode === "dark" ? "blue.800" : "blue.100",
        color: props.colorMode === "dark" ? "black" : "white",
      },
    }),
  },
});

export default theme;
