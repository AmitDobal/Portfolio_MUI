import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Home from "./Components/Home/Home";
import { theme } from "./Themes/theme";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar"; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{mt: 10, ml: 2, mr: 2}}>
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
