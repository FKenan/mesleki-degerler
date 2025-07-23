import {
  AppBar,
  Box,
  Button,
  Grid,
  Stack,
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
import ValuesPile from "../components/ValuesPile";
import ValueStack from "../components/ValueStack";

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
    <Box height="100%" sx={{ mx: 2 }}>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Box display="flex" alignItems="center">
            <HomeIcon color="primary" sx={{ display: { xs: "flex" }, mr: 1 }} />
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
          <Stepper activeStep={activeStep} sx={{ p: 2 }}>
            {steps.map((label) => {
              return (
                <Step key={label} sx={{ px: 3 }}>
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
      </AppBar>
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid size={12} sx={{ my: 2 }}>
          <Stack
            alignItems="center"
            justifyContent="center"
            direction="row"
            spacing={5}
          >
            <Button
              startIcon={<ArrowBackIcon />}
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Geri
            </Button>
            <Box justifyItems="center" alignItems="center">
              <Typography variant="h5">Değerleriniz</Typography>
              <Typography variant="subtitle2">
                Destedeki değerleri 2 kutuya ayırınız.
              </Typography>
              <Typography variant="body2">
                Size uyanlar bir tarafa, uymayanlar diğer tarafa
              </Typography>
            </Box>
            <Button
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              İleri
            </Button>
          </Stack>
        </Grid>
        <Grid size={5}>
          <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
            Tutulacaklar Kutusu
          </Typography>
          <ValuesPile />
        </Grid>
        <Grid size={2} px={2}>
          <ValueStack />
        </Grid>
        <Grid size={5}>
          <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
            Atılacaklar Kutusu
          </Typography>
          <ValuesPile />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
      </Box>
    </Box>
  );
}
