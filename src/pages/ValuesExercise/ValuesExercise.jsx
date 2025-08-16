import { Container } from "@mui/material";
import { useEffect } from "react";
import Appbar from "./Appbar";
import ResultPage from "./result/Result";
import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import { useDispatch, useSelector } from "react-redux";
import { fetchValues } from "./valueSlice";

export default function ValuesExercisePage() {
  const { isLoaded, activeStep } = useSelector((state) => state.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) dispatch(fetchValues());
  }, []);

  return (
    <>
      <Appbar />
      <Container maxWidth="false" sx={{ justifyContent: "center" }}>
        {activeStep === 0 && <Step1 />}
        {activeStep === 1 && <Step2 />}
        {activeStep === 2 && <ResultPage />}
      </Container>
    </>
  );
}
