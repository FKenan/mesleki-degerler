import { Container, Grid, Slide } from "@mui/material";
import Piles from "./Piles";
import { useSelector } from "react-redux";
import { selectActiveStep, selectValueStack } from "../valueSlice";
import React, { useState, useRef, useEffect } from "react";
import Step1Header from "./Step1Header";

const useStepDirection = (activeStep) => {
  const prevStepRef = useRef(activeStep);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    if (prevStepRef.current < activeStep) {
      setDirection("left");
    } else if (prevStepRef.current > activeStep) {
      setDirection("right");
    }
    prevStepRef.current = activeStep;
  }, [activeStep]);

  return direction;
};

function Step1() {
  const activeStep = useSelector(selectActiveStep);
  const direction = useStepDirection(activeStep);

  return (
    <Slide
      direction={direction}
      in={activeStep === 0}
      mountOnEnter
      unmountOnExit
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Step1Header />

          <Piles />
        </Grid>
      </Container>
    </Slide>
  );
}

export default React.memo(Step1);
