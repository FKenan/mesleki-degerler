import { Button, Grid, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "../ExercisePageTypography";
import PilesStep2 from "./PilesStep2";
import { useDispatch, useSelector } from "react-redux";
import { handleBack, handleNext } from "../valueSlice";
import { useDevice } from "../../../context/DeviceContext";

const steps = ["1.Adım", "2.Adım", "Sonuçlar"];

export default function Step2() {
  const { isMobile } = useDevice();
  const { activeStep, first5Value } = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
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
            onClick={() => dispatch(handleBack())}
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
            onClick={() => dispatch(handleNext())}
            sx={{
              visibility:
                activeStep === steps.length - 1 || first5Value.length !== 5
                  ? "hidden"
                  : "visible",
            }}
          >
            İleri
          </Button>
        </Stack>
      </Grid>
      <PilesStep2 />
    </Grid>
  );
}
