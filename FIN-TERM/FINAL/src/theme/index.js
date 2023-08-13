import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles : {
    global : {
      body : {
        fontFamily : `'Jost Variable', sans-serif`,
        bgGradient :'radial(71.66% 71.65% at 50.00% 104.37%, rgba(78, 79, 75, 0.76) 0%, #000 100%)',
        minHeight : '100vh',
        minWidth : ['98vw','99vw'],
        
      }
    }
  },
  fonts : {
    body : `'Raleway', sans-serif`
  },
  colors: {
    login: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#ffffff",
      600: "#595959",
      700: "#404040",
      800: "#262626",
      900: "#0d0d0d"
    }
  }
});

export default customTheme;
