import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SwipeableViews from "react-swipeable-views";

const items = [
  {
    label: "Slide 1",
    description: "This is the first slide.",
  },
  {
    label: "Slide 2",
    description: "Welcome to the second slide.",
  },
  {
    label: "Slide 3",
    description: "Explore the content of the third slide.",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);

  const handleStepChange = (step) => {
    setIndex(step);
  };
  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <SwipeableViews index={index} onChangeIndex={handleStepChange}>
        {items.map((item, i) => (
          <Paper key={i} elevation={3} style={{ padding: 20 }}>
            <Typography variant="h5" gutterBottom>
              {item.label}
            </Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Paper>
        ))}
      </SwipeableViews>

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Button
          disabled={index === 0}
          onClick={() => handleStepChange(index - 1)}>
          Back
        </Button>
        <Button
          disabled={index === items.length - 1}
          onClick={() => handleStepChange(index + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Projects;
