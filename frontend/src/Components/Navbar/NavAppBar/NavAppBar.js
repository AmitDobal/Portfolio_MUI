import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { RoundButtonStyled } from "../../../Styles/GlobalStyles";

const StyledAppBar = styled(AppBar)({
  transition: "transform 300ms ease-in-out",
  backgroundColor: `rgba(49, 48, 77,1)`, // Adjust the alpha value as needed
});

const NavAppBar = ({ navItems, handleDrawerToggle }) => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
    setScrolling(window.scrollY > scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[scrollTop]);

  return (
    <StyledAppBar
      position="fixed"
      style={{
        transform: scrolling ? "translateY(-100%)" : "translateY(0)",
      }}>
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
          color={'inherit'}
          sx={{
            flexGrow: 1,
            textAlign: { xs: "center", sm: "left" },
          }}>
          AMIT
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Link key={item} spy={true} to={item} smooth>
              <Button sx={{ color: "#fff" }}>{item}</Button>
            </Link>
          ))}
        </Box>
        <RoundButtonStyled variant="contained" color="primary">
          Contact
        </RoundButtonStyled>
      </Toolbar>
    </StyledAppBar>
  );
};

// const NavAppBar1 = ({ navItems, handleDrawerToggle }) => {
//   return (
//     <AppBar component={"nav"} position="fixed" sx={{background: theme.palette.transparent}} color="secondary">
//       <Toolbar>
//         <IconButton
//           onClick={handleDrawerToggle}
//           color="inherit"
//           aria-label="open drawer"
//           sx={{ mr: 2, display: { sm: "none" } }}>
//           <MenuIcon />
//         </IconButton>
//         <Typography
//           variant="h6"
//           sx={{
//             flexGrow: 1,
//             textAlign: { xs: "center", sm: "left" },
//           }}>
//           AMIT
//         </Typography>

//         <Box sx={{ display: { xs: "none", sm: "block" } }}>
//           {navItems.map((item) => (
//             <Link spy={true} to={item} smooth>
//               <Button key={item} sx={{ color: "#fff" }}>
//                 {item}
//               </Button>
//             </Link>
//           ))}
//         </Box>
//         <RoundButtonStyled variant="contained" color="primary">
//           Contact
//         </RoundButtonStyled>
//       </Toolbar>
//     </AppBar>
//   );
// };

export default NavAppBar;
