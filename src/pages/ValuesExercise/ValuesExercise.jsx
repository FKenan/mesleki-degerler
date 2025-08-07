import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Appbar from "./Appbar";
import ResultPage from "./Result";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { fetchValues, handleReset } from "./ValueSlice";
import { useDispatch, useSelector } from "react-redux";

const steps = ["1.Adım", "2.Adım", "Sonuçlar"];

export default function ValuesExercisePage() {
  const { isLoaded, activeStep } = useSelector((state) => state.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) dispatch(fetchValues());
  }, []);

  return (
    <Box height="100%" sx={{ mx: 2 }}>
      <Appbar
        handleReset={() => dispatch(handleReset())}
        activeStep={activeStep}
        steps={steps}
      />
      {activeStep === 0 && <Step1 />}
      {activeStep === 1 && <Step2 />}
      {activeStep === 2 && <ResultPage />}
    </Box>
  );
}
