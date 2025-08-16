import { Button, Grid, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "../ExercisePageTypography";
import Piles from "./Piles";
import { useDispatch, useSelector } from "react-redux";
import { useDevice } from "../../../context/DeviceContext";
import { handleBack, handleNext } from "../valueSlice";

const steps = ["1.Adım", "2.Adım", "Sonuçlar"];

export default function Step1() {
  const { isMobile } = useDevice();
  const { activeStep, valueStack } = useSelector((state) => state.value);
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
              activeStep === steps.length - 1 || valueStack.length !== 0
            }
            onClick={() => dispatch(handleNext())}
          >
            İleri
          </Button>
        </Stack>
      </Grid>
      <Piles />
    </Grid>
  );
}
