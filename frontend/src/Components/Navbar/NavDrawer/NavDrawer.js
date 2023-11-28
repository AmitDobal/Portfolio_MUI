import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const NavDrawer = ({
  navItems,
  handleDrawerToggle,
  mobileOpen,
  drawerWidth,
  window,
}) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <nav>
      <Drawer
        container={container}
        open={mobileOpen}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        onClose={handleDrawerToggle}
        variant="temporary"
        ModalProps={{ keepMounted: true }}>
        <Box sx={{ textAlign: "center" }} onClick={handleDrawerToggle}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Amit
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavDrawer;
