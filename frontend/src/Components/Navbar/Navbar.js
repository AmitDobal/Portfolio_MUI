import { Box } from "@mui/material";
import React, { useState } from "react";
import NavDrawer from "./NavDrawer/NavDrawer";
import NavAppBar from "./NavAppBar/NavAppBar";

const drawerWidth = 240;
const navItems = ["home", "about", "experience", "projects", "skills"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavAppBar navItems={navItems} handleDrawerToggle={handleDrawerToggle} />
      <NavDrawer
        navItems={navItems}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
      />
    </Box>
  );
};

export default Navbar;
