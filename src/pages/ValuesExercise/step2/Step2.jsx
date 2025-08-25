import { Container, Grid, Slide } from "@mui/material";
import PilesStep2 from "./PilesStep2";
import { memo } from "react";
import Step2Header from "./step2Header";

function Step2() {
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <Grid container spacing={2} alignItems="center">
          <Step2Header />

          <PilesStep2 />
        </Grid>
      </Container>
    </Slide>
  );
}

export default memo(Step2);
