import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ValuesPile from "../components/ValuesPile";
import ValueStack from "../components/ValueStack";
import ExercisePageTypography from "../components/ExercisePageTypography";
import Appbar from "../components/Appbar";
import ResultPage from "../components/Result";

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
      <Appbar handleReset={handleReset} activeStep={activeStep} steps={steps} />
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
            <ExercisePageTypography
              title="Değerleriniz"
              subtitle1="Destedeki değerleri 2 kutuya ayırınız."
              subtitle2="Size uyanlar bir tarafa, uymayanları diğer tarafa ayırınnız!"
            />
            {/* Typography */}
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
            Atılacaklar Kutusu
          </Typography>
          <ValuesPile />
        </Grid>
        <Grid size={2} px={2}>
          <ValueStack />
        </Grid>
        <Grid size={5}>
          <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
            Tutulacaklar Kutusu
          </Typography>
          <ValuesPile />
        </Grid>
      </Grid>
      <ResultPage />
    </Box>
  );
}
