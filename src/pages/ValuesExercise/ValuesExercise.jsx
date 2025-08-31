import { Box, Container } from "@mui/material";
import { useEffect, useMemo } from "react";
import Appbar from "./Appbar";
import ResultPage from "./result/Result";
import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchValues,
  selectActiveStep,
  selectIsLoaded,
  selectDirection,
} from "./valueSlice";
import { useDevice } from "../../context/DeviceContext";
import Step1Mobile from "./mobile/step1/Step1Mobile";
import ResultMobile from "./mobile/result/ResultMobile";
import Step2Mobile from "./mobile/step2/Step2Mobile";
import AppbarMobile from "./mobile/AppbarMobile";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function ValuesExercisePage() {
  const isLoaded = useSelector(selectIsLoaded);
  const activeStep = useSelector(selectActiveStep);
  const direction = useSelector(selectDirection);
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
    <Container maxWidth="xl" disableGutters sx={{ mb: 4 }}>
      {isMobile ? <AppbarMobile /> : <Appbar />}
      <AnimatePresence mode="wait">
        {/* Use mode="wait" to ensure exit animations complete before new components enter */}
        {/* React.cloneElement is used to pass the key prop to the dynamically rendered component */}
        {React.cloneElement(steps[activeStep], {
          key: activeStep,
          direction: direction,
        })}
      </AnimatePresence>
    </Container>
  );
}
