import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-scroll";
import { RoundButtonStyled } from "../../../Styles/GlobalStyles";
import { theme } from "../../../Themes/theme";




const NavAppBar = ({ navItems, handleDrawerToggle }) => {
  return (
    <AppBar component={"nav"} position="fixed" sx={{background: theme.palette.transparent}} color="secondary">
      <Toolbar>
        <IconButton
          onClick={handleDrawerToggle}
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: { xs: "center", sm: "left" },
          }}>
          AMIT
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Link spy={true} to={item} smooth>
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            </Link>
          ))}
        </Box>
        <RoundButtonStyled variant="contained" color="primary">
          Contact
        </RoundButtonStyled>
      </Toolbar>
    </AppBar>
  );
};

export default NavAppBar;
