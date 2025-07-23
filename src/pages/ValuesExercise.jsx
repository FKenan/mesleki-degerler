import {
  AppBar,
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";

const steps = ["1.Adım", "2.Adım", "Sonuçlar"];

export default function ValuesExercisePage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Box display="flex" alignItems="center">
              <HomeIcon
                color="primary"
                sx={{ display: { xs: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  color: "primary.main",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Mesleki Değerler
              </Typography>
            </Box>
            <Stepper activeStep={activeStep}>
              {steps.map((label) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={handleReset}
              sx={{ mr: 1 }}
            >
              Baştan başla
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          variant="contained"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Geri
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        {activeStep !== steps.length - 1 && (
          <Button
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            onClick={handleNext}
          >
            İleri
          </Button>
        )}
      </Box>
    </Box>
  );
}
