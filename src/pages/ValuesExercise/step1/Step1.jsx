import { Container, Grid } from "@mui/material";
import Piles from "./Piles";
import React from "react";
import Step1Header from "./Step1Header";
import AnimatedDiv from "../../../components/animations/AnimatedDiv";

function Step1({ direction }) {
  return (
    <AnimatedDiv direction={direction}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Step1Header />

          <Piles />
        </Grid>
      </Container>
    </AnimatedDiv>
  );
}

export default React.memo(Step1);
