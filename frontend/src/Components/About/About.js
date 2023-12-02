import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import DevImage from "../../img/dev-removebg.png";
import { Image1, SkillButtonStyled } from "./Styled";

const About = () => {
  return (
    <Box mt={3} className="about" height={"90vh"}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            display={"flex"}
            sx={{
              position: "relative",
            }}>
            <Image1 src={DevImage} alt="dev" style={{ width: "83%" }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">About Me</Typography>
          <Stack mt={1} spacing={1} direction={"row"}>
            <Typography fontWeight={"600"} color={"primary"} variant="h3">
              Amit
            </Typography>
            <Typography fontWeight={"600"} color={"secondary"} variant="h3">
              Dobal
            </Typography>
          </Stack>
          <Box mt={3}>
            <Typography textAlign={"justify"} variant="body1">
              Hello! I am Amit Dobal. Web Developer with over 2 years of
              experience. Experienced with all statges of development cycle for
              dynamic web projects. Having an in-depth knowledge including
              advanced HTML5, CSS3, JavaScript, ReactJs, Spring Boot. Strong background in
              management and leadership.
            </Typography>
          </Box>
          <Box mt={3}>
            <Typography variant="h5">My Skills</Typography>
          </Box>
          <Box mt={1}>
            <Grid container item spacing={2}>
              <Grid item>
                <SkillButtonStyled variant="contained"> HTML</SkillButtonStyled>
              </Grid>
              <Grid item>
                <SkillButtonStyled variant="contained"> CSS</SkillButtonStyled>
              </Grid>
              <Grid item>
                <SkillButtonStyled variant="contained">
                  JavaScript
                </SkillButtonStyled>
              </Grid>
              <Grid item>
                <SkillButtonStyled variant="contained">
                  ReactJs
                </SkillButtonStyled>
              </Grid>
              <Grid item>
                <SkillButtonStyled variant="contained">Java</SkillButtonStyled>
              </Grid>
              <Grid item>
                <SkillButtonStyled variant="contained">
                  SpringBoot
                </SkillButtonStyled>
              </Grid>
              <Grid item>
                <SkillButtonStyled variant="contained"> GIT</SkillButtonStyled>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
