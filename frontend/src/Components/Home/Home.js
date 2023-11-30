import React from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  Button,
  Stack,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import MyPic from "../../img/MyPic.png";
import { Image1, Image2, Image3 } from "./Styled";

const Home = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <Box>
      <Grid container>
        <Grid bgcolor={"gray"} item xs={12} sm={6}>
          <Typography variant="h3">Hi! I am</Typography>
          <Typography variant="h3">Amit Dobal</Typography>
          <Typography>
            Full stack developer with high level of experience in web designing
            and development, producing the quality work
          </Typography>
          <Button sx={{ mt: 1 }} variant="contained">
            Hire me
          </Button>
          <Stack spacing={2} sx={{ mt: 2 }} direction={"row"}>
            <LinkedInIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
            <GitHubIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
            <CodeIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
          </Stack>
        </Grid>

        <Grid bgcolor={"pink"} item xs={12} sm={6}>
          <Box
            sx={{
              margin: 0,
              position: "relative",
            }}>
            <Image1 src={Vector1} alt="" style={{ width: "83%" }} />
            <Image2 src={Vector2} alt="" style={{ width: "75%" }} />
            <Image3 src={MyPic} alt="" style={{ width: "65%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>

  );
};

export default Home;
