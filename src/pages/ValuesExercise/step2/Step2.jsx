import { Button, Grid, Slide, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "../ExercisePageTypography";
import PilesStep2 from "./PilesStep2";
import { useDispatch, useSelector } from "react-redux";
import {
  handleBack,
  handleNext,
  selectActiveStep,
  selectFirst5Value,
  VALUE_EXERCISE_STEPS,
} from "../valueSlice";
import { memo, useCallback, useMemo } from "react";

function Step2() {
  const first5Value = useSelector(selectFirst5Value);
  const activeStep = useSelector(selectActiveStep);

  const dispatch = useDispatch();

  const handleBackClick = useCallback(() => {
    dispatch(handleBack());
  }, [dispatch]);

  const handleNextClick = useCallback(() => {
    dispatch(handleNext());
  }, [dispatch]);

  const nextButtonSx = useMemo(
    () => ({
      visibility:
        activeStep === VALUE_EXERCISE_STEPS.length - 1 ||
        first5Value.length !== 5
          ? "hidden"
          : "visible",
    }),
    [activeStep, first5Value.length]
  );

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
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
            >
              Geri
            </Button>
            <ExercisePageTypography
              title="Önceliklerinizi Belirleyin"
              subtitle1="Şimdi 'Tutulacaklar' kutusundaki değerler arasından sizin için en önemli olan 5 tanesini seçin."
              subtitle2="Bu 5 değer, kariyer yolculuğunuzda size rehberlik edecek temel taşlarınız olacak."
            />
            <Button
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              onClick={handleNextClick}
              sx={nextButtonSx}
            >
              İleri
            </Button>
          </Stack>
        </Grid>
        <PilesStep2 />
      </Grid>
    </Slide>
  );
}

export default memo(Step2);
