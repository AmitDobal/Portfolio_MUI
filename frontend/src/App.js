import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import { theme } from "./Themes/theme";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar"; 
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{mt: 13, ml: 5, mr: 5}}>
        <Intro />
        <About/>
        <Projects/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
