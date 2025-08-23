import { Button, Grid, Slide, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "../ExercisePageTypography";
import Piles from "./Piles";
import { useDispatch, useSelector } from "react-redux";
import {
  handleBack,
  handleNext,
  selectActiveStep,
  selectValueStack,
  VALUE_EXERCISE_STEPS,
} from "../valueSlice";
import React, { useCallback, useState, useRef, useEffect } from "react";

function Step1() {
  const activeStep = useSelector(selectActiveStep);
  const valueStack = useSelector(selectValueStack);

  const dispatch = useDispatch();

  const prevStepRef = useRef(activeStep);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    // Sonraki adıma geçerken (activeStep artarken) sola,
    // önceki adıma dönerken (activeStep azalırken) sağa kaydır.
    if (prevStepRef.current < activeStep) {
      setDirection("left");
    } else if (prevStepRef.current > activeStep) {
      setDirection("right");
    }
    prevStepRef.current = activeStep;
  }, [activeStep]);

  const handleBackClick = useCallback(() => {
    dispatch(handleBack());
  }, [dispatch]);

  const handleNextClick = useCallback(() => {
    dispatch(handleNext());
  }, [dispatch]);

  return (
    <Slide
      direction={direction}
      in={activeStep === 0}
      mountOnEnter
      unmountOnExit
    >
      <Grid container spacing={2} alignItems="center">
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
              onClick={handleBackClick}
              sx={{
                visibility: "hidden",
              }}
            >
              Geri
            </Button>
            <ExercisePageTypography
              title="Değerlerinizi Keşfedin"
              subtitle1="Aşağıdaki değer kartlarını size en uygun olanları 'Tutulacaklar', diğerlerini ise 'Atılacaklar' kutusuna sürükleyin."
              subtitle2="Bu adımda istediğiniz kadar değeri 'Tutulacaklar' kutusuna ekleyebilirsiniz."
            />
            <Button
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              disabled={
                activeStep === VALUE_EXERCISE_STEPS.length - 1 ||
                valueStack.length !== 0
              }
              onClick={handleNextClick}
            >
              İleri
            </Button>
          </Stack>
        </Grid>
        <Piles />
      </Grid>
    </Slide>
  );
}

export default React.memo(Step1);
