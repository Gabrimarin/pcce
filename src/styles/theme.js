import { createTheme } from "@mui/material";

export const DRAWER_WIDTH = 60;
export const HEADER_HEIGHT = 60;


// a mui style object
const theme = createTheme({
  palette: {
    primary: {
      main: '#002d5b',
    },
    secondary: {
      main: '#777',
    },
    text: {
      primary: '#7a7',
      // secondary: 'red',
    },
    
  },
  typography: {
    allVariants: {
      color: '#777',
    }
  }
  
});

export default theme;