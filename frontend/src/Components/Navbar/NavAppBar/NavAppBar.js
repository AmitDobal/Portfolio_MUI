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

const NavAppBar = ({ navItems, handleDrawerToggle }) => {
  return (
    <AppBar component={"nav"} position="fixed" color="primary">
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
            textAlign: { xs: "right", sm: "left" },
          }}>
          Amit
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavAppBar;
