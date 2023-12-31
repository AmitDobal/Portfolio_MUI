import { styled } from "@mui/material";

export const Image1 = styled("img")({
  position: "absolute",
  margin: "5%",
  top: 0,
  left: 0,
  zIndex: 0, // Set a higher z-index to make it appear on top
});
export const Image2 = styled("img")({
  position: "absolute",
  top: 50,
  "margin-left": "15%",
  left: 0,
  zIndex: 1,
});
export const Image3 = styled("img")({
  position: "absolute",
  top: -15,
  "margin-left": "15%",
  left: 0,
  zIndex: 2,
});
