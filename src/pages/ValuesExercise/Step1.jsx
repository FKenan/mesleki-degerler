import { Button, Grid, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "./ExercisePageTypography";
import Piles from "./Piles";
import { useDispatch, useSelector } from "react-redux";
import { handleBack, handleNext } from "./ValueSlice";

const steps = ["1.Adım", "2.Adım", "Sonuçlar"];

export default function Step1({
  addToKeepPile,
  addToDiscardPile,
  keepPile,
  discardPile,
}) {
  const { activeStep } = useSelector((state) => state.value);
  const dispatch = useDispatch();
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
            onClick={() => dispatch(handleBack())}
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
            onClick={() => dispatch(handleNext())}
          >
            İleri
          </Button>
        </Stack>
      </Grid>
      <Piles
        addToKeepPile={addToKeepPile}
        addToDiscardPile={addToDiscardPile}
        keepPile={keepPile}
        discardPile={discardPile}
      />
    </Grid>
  );
}
