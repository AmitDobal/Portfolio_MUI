import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import { theme } from "./Themes/theme";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar"; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{mt: 10, ml: 4, mr: 4}}>
        <Intro />
      </Box>
    </ThemeProvider>
  );
}

export default App;
