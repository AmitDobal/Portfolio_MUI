import { Box, Button, styled } from "@mui/material";

export const Image1 = styled("img")({
  // position: "absolute",
  // margin: "5%",
  // top: 0,
  // left: 0,
  zIndex: 0,
  // transform: 'scale(0.1)'
});

// export const SkillCardStyled = styled(Box)(({ theme }) => ({
//   backgroundColor: "red",
//   borderRadius: "5px",
//   height: "40px",
//   minWidth: "60px",
//   padding: "8px",
// }));

export const SkillButtonStyled = styled(Button)(({ theme }) => ({
  pointerEvents: "none",
  background: "#662549",
  color: "white",
}));
