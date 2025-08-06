import { Button, Grid, Stack } from "@mui/material";
import ResultTable from "./ResultTable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "./ExercisePageTypography";

export default function ResultPage({
  selectedValues,
  activeStep,
  handleBack,
  handleNext,
}) {
  const toText = () => {
    var text = "";
    selectedValues.forEach((element) => {
      text += element.ad + ", ";
    });
    return text.trim().slice(0, -1);
  };

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
            title="Uygun Bölümler"
            subtitle1="Seçimlerinize uygun bölümler aşağıda listelendi."
            subtitle2={`Seçimleriniz: ${toText()}`}
          />
          <Button
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            onClick={handleNext}
            sx={{ visibility: "hidden" }}
          >
            İleri
          </Button>
        </Stack>
      </Grid>
      <ResultTable selectedValues={selectedValues} />
    </Grid>
  );
}
