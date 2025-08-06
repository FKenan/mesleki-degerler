import { Button, Grid, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "./ExercisePageTypography";
import PilesStep2 from "./PilesStep2";

const steps = ["1.Adım", "2.Adım", "Sonuçlar"];

export default function Step2({
  addToKeepPile,
  addtoFirst5Value,
  handleNext,
  handleBack,
  activeStep,
  keepPile,
  first5Value,
}) {
  return (
    <Grid container spacing={1} alignItems="center">
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
            onClick={handleBack}
          >
            Geri
          </Button>
          <ExercisePageTypography
            title="Değerleriniz"
            subtitle1="Size uyan ilk 5 değerinizi seçiniz."
            subtitle2="Seçtiğiniz değerlerden öncelikli olan 5 tanesini seçiniz!"
          />
          <Button
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            onClick={handleNext}
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
      <PilesStep2
        addToKeepPile={addToKeepPile}
        addtoFirst5Value={addtoFirst5Value}
        keepPile={keepPile}
        first5Value={first5Value}
      />
    </Grid>
  );
}
