import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const BlurBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "22rem",
  height: "14rem",
  borderRadius: "50%",
  background: theme.palette.blurredBackground,
  filter: "blur(72px)",
  zIndex: -9,
}));

export const RoundButtonStyled = styled(Button)(({ theme }) => ({
  borderRadius: 100,
  fontWeight: "550",

  background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  color: "#ffffff",
  "&:hover": {
    background: `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  },
}));
