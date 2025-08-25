import { Button, Grid, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "../ExercisePageTypography";
import { memo, useCallback } from "react";
import {
  handleBack,
  handleNext,
  selectFirst5Value,
  selectKeepPile,
} from "../valueSlice";
import { useDispatch, useSelector } from "react-redux";

function Step2Header() {
  const dispatch = useDispatch();
  const first5Value = useSelector(selectFirst5Value);
  const keepPile = useSelector(selectKeepPile);

  const handleBackClick = useCallback(() => {
    dispatch(handleBack());
  }, [dispatch]);

  const handleNextClick = useCallback(() => {
    dispatch(handleNext());
  }, [dispatch]);

  const nextButtonSx = {
    visibility:
      first5Value.length !== 5 && keepPile.length !== 0 ? "hidden" : "visible",
  };

  return (
    <Grid
      container
      size={12}
      alignItems="center"
      sx={{ my: 4, textAlign: "center" }}
    >
      <Grid size={3}>
        <Button
          startIcon={<ArrowBackIcon />}
          variant="contained"
          size="large"
          onClick={handleBackClick}
        >
          Geri
        </Button>
      </Grid>

      <Grid size={6}>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="column"
          spacing={1}
        >
          <ExercisePageTypography
            title="Önceliklerinizi Belirleyin"
            subtitle1="Şimdi 'Tutulacaklar' kutusundaki değerler arasından sizin için en önemli olan 5 tanesini seçin."
            subtitle2="Bu 5 değer, kariyer yolculuğunuzda size rehberlik edecek temel taşlarınız olacak."
          />
        </Stack>
      </Grid>

      <Grid size={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          endIcon={<ArrowForwardIcon />}
          variant="contained"
          size="large"
          onClick={handleNextClick}
          sx={nextButtonSx}
        >
          İleri
        </Button>
      </Grid>
    </Grid>
  );
}

export default memo(Step2Header);
