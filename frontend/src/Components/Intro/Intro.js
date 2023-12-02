import React from "react";
import { Box, Grid, Typography, useTheme, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import MyPic from "../../img/MyPic.png";
import { Anchor, Image1, Image2, Image3 } from "./Styled";
import { GITHUB_LINK, LEETCODE_LINK, LINKEDIN_LINK } from "../../Links/links";
import { BlurBox, RoundButtonStyled } from "../../Styles/GlobalStyles";

const Intro = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <Box display={"flex"} position={""} className="home" height="100vh">
      <Grid container>
        {/* LEFT SCREEN */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h3">Hi! I am</Typography>
          <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
            Amit Dobal
          </Typography>
          <Typography color={"gray"} variant="body1">
            Full stack developer with high level of experience in web designing
            and development, producing the quality work
          </Typography>
          <RoundButtonStyled sx={{ mt: 2 }} variant="contained">
            Hire me
          </RoundButtonStyled>
          <Stack spacing={2} sx={{ mt: 3 }} direction={"row"}>
            <Anchor href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
              <LinkedInIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
            </Anchor>
            <Anchor href={GITHUB_LINK} target="_blank" rel="noreferrer">
              <GitHubIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
            </Anchor>
            <Anchor href={LEETCODE_LINK} target="_blank" rel="noreferrer">
              <CodeIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
            </Anchor>
          </Stack>
        </Grid>

        {/* RIGHT SCREEN */}
        <Grid position="inherit" item xs={12} sm={6}>
          <Box
            display={"flex"}
            bgcolor={"yellow"}
            sx={{
              position: "relative",
            }}>
            <Image1 src={Vector1} alt="vector1" style={{ width: "83%" }} />
            <Image2 src={Vector2} alt="vector2" style={{ width: "75%" }} />
            <Image3 src={MyPic} alt="myPic" style={{ width: "65%" }} />
          </Box>
          <Box display={"flex"} sx={{ position: "relative" }}>
            <BlurBox
              sx={{ background: "rgb(238 210 255)", top: "10", left: "280px" }}
            />
            <Box sx={{ position: "relative" }}>
              <BlurBox
                sx={{ background: "#c1f5ff", top: "200px", left: "-120px" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
