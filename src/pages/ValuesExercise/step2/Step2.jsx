import { Container, Grid } from "@mui/material";
import PilesStep2 from "./PilesStep2";
import { memo } from "react";
import Step2Header from "./Step2Header";
import AnimatedDiv from "../../../components/animations/AnimatedDiv";

function Step2({ direction }) {
  return (
    <AnimatedDiv direction={direction}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <Grid container spacing={2} alignItems="center">
          <Step2Header />

          <PilesStep2 />
        </Grid>
      </Container>
    </AnimatedDiv>
  );
}

export default memo(Step2);
