import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import Appbar from "./Appbar";
import ResultPage from "./result/Result";
import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import { fetchValues, handleReset } from "./valueSlice";
import { useDispatch, useSelector } from "react-redux";

const steps = ["1.Adım", "2.Adım", "Sonuçlar"];

export default function ValuesExercisePage() {
  const { isLoaded, activeStep } = useSelector((state) => state.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) dispatch(fetchValues());
  }, []);

  return (
    <Container maxWidth="xl" sx={{ justifyContent: "center" }}>
      <Appbar
        handleReset={() => dispatch(handleReset())}
        activeStep={activeStep}
        steps={steps}
      />
      {activeStep === 0 && <Step1 />}
      {activeStep === 1 && <Step2 />}
      {activeStep === 2 && <ResultPage />}
    </Container>
  );
}
