import { Box, Button, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "./ExercisePageTypography";
import Appbar from "./Appbar";
import Piles from "./Piles";
import ResultPage from "./Result";

const steps = ["1.Adım", "2.Adım", "Sonuçlar"];

export default function ValuesExercisePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [first5Value, setFirst5Value] = useState([]);

  useEffect(() => {
    async function getValues() {
      var res = await fetch("https://localhost:44316/api/Degerler/getall");
      var data = await res.json();
      setValues(data);
    }

    getValues();
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box height="100%" sx={{ mx: 2 }}>
      <Appbar handleReset={handleReset} activeStep={activeStep} steps={steps} />
      <Grid container spacing={1} alignItems="center" justifyContent="center">
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
            {activeStep === 0 && (
              <ExercisePageTypography
                title="Değerleriniz"
                subtitle1="Destedeki değerleri 2 kutuya ayırınız."
                subtitle2="Size uyanlar bir tarafa, uymayanları diğer tarafa ayırınız!"
              />
            )}
            {activeStep === 1 && (
              <ExercisePageTypography
                title="Değerleriniz"
                subtitle1="Size uyan ilk 5 değerinizi seçiniz."
                subtitle2="Seçtiğiniz değerlerden öncelikli olan 5 tanesini seçiniz!"
              />
            )}
            {activeStep === 2 && (
              <ExercisePageTypography
                title="Uygun Bölümler"
                subtitle1="Seçimlerinize uygun bölümler aşağıda listelendi."
                subtitle2={`Seçimleriniz: ${null}`}
              />
            )}
            <Button
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              İleri
            </Button>
          </Stack>
        </Grid>
        {activeStep === 0 && <Piles haveValueStack={true} values={values} />}
        {activeStep === 1 && (
          <Piles haveValueStack={false} values={selectedValues} />
        )}
        {activeStep === 2 && <ResultPage />}
      </Grid>
    </Box>
  );
}
