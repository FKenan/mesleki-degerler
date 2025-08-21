import { Container } from "@mui/material";
import { useEffect, useMemo } from "react";
import Appbar from "./Appbar";
import ResultPage from "./result/Result";
import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import { useDispatch, useSelector } from "react-redux";
import { fetchValues, selectActiveStep, selectIsLoaded } from "./valueSlice";
import { useDevice } from "../../context/DeviceContext";
import Step1Mobile from "./mobile/step1/Step1Mobile";
import ResultMobile from "./mobile/result/ResultMobile";
import Step2Mobile from "./mobile/step2/Step2Mobile";
import AppbarMobile from "./mobile/AppbarMobile";

export default function ValuesExercisePage() {
  const isLoaded = useSelector(selectIsLoaded);
  const activeStep = useSelector(selectActiveStep);
  const dispatch = useDispatch();
  const { isMobile } = useDevice();

  useEffect(() => {
    if (!isLoaded) dispatch(fetchValues());
  }, []);

  const steps = useMemo(
    () => ({
      0: isMobile ? <Step1Mobile /> : <Step1 />,
      1: isMobile ? <Step2Mobile /> : <Step2 />,
      2: isMobile ? <ResultMobile /> : <ResultPage />,
    }),
    [isMobile]
  );

  return (
    <>
      {isMobile ? <AppbarMobile /> : <Appbar />}
      <Container maxWidth="false" sx={{ justifyContent: "center" }}>
        {steps[activeStep]}
      </Container>
    </>
  );
}
