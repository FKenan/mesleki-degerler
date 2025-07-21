import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";

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
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Geri
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        {activeStep !== steps.length - 1 && (
          <Button onClick={handleNext}>İleri</Button>
        )}
      </Box>
    </Box>
  );
}
