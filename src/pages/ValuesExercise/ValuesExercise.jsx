import { Box, Container, CircularProgress } from "@mui/material";
import { useEffect, useMemo, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchValues,
  selectActiveStep,
  selectIsLoaded,
  selectDirection,
} from "./valueSlice";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { useDevice } from "../../context/DeviceContext";

const Appbar = lazy(() => import("./Appbar"));
const AppbarMobile = lazy(() => import("./mobile/AppbarMobile"));
const Step1 = lazy(() => import("./step1/Step1"));
const Step2 = lazy(() => import("./step2/Step2"));
const ResultPage = lazy(() => import("./result/Result"));
const Step1Mobile = lazy(() => import("./mobile/step1/Step1Mobile"));
const Step2Mobile = lazy(() => import("./mobile/step2/Step2Mobile"));
const ResultMobile = lazy(() => import("./mobile/result/ResultMobile"));

const LoadingFallback = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    }}
  >
    <CircularProgress />
  </Box>
);

export default function ValuesExercisePage() {
  const isLoaded = useSelector(selectIsLoaded);
  const activeStep = useSelector(selectActiveStep);
  const direction = useSelector(selectDirection);
  const dispatch = useDispatch();
  const { isMobile } = useDevice();

  useEffect(() => {
    if (!isLoaded) dispatch(fetchValues());
  }, [dispatch, isLoaded]);

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
      <Suspense fallback={<LoadingFallback />}>
        {isMobile ? <AppbarMobile /> : <Appbar />}
        <AnimatePresence mode="wait">
          {React.cloneElement(steps[activeStep], {
            key: activeStep,
            direction: direction,
          })}
        </AnimatePresence>
      </Suspense>
    </Container>
  );
}
