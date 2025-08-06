import { Button, Grid, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "./ExercisePageTypography";
import Piles from "./Piles";

const steps = ["1.Adım", "2.Adım", "Sonuçlar"];

export default function Step1({
  addToKeepPile,
  addToDiscardPile,
  handleNext,
  handleBack,
  activeStep,
  values,
  keepPile,
  discardPile,
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
            sx={{
              visibility: "hidden",
            }}
          >
            Geri
          </Button>
          <ExercisePageTypography
            title="Değerleriniz"
            subtitle1="Destedeki değerleri 2 kutuya ayırınız."
            subtitle2="Size uyanlar bir tarafa, uymayanları diğer tarafa ayırınız!"
          />
          <Button
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1 || values.length !== 0}
          >
            İleri
          </Button>
        </Stack>
      </Grid>
      <Piles
        values={values}
        addToKeepPile={addToKeepPile}
        addToDiscardPile={addToDiscardPile}
        keepPile={keepPile}
        discardPile={discardPile}
      />
    </Grid>
  );
}
