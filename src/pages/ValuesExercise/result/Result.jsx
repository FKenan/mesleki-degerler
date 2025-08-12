import { Button, Grid, Stack } from "@mui/material";
import ResultTable from "./ResultTable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "../ExercisePageTypography";
import { useDispatch, useSelector } from "react-redux";
import { handleBack, handleNext } from "../valueSlice";

export default function ResultPage() {
  const { activeStep, first5Value } = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const secilenDegerlerText = first5Value.map((value) => value.ad).join(", ");

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
          >
            Geri
          </Button>
          <ExercisePageTypography
            title="Değerlerinize Uygun Bölümler"
            subtitle1="Belirlediğiniz beş temel mesleki değere dayanarak, sizin için en uygun olabilecek üniversite bölümlerini aşağıda bulabilirsiniz."
            subtitle2={`Öncelikli Değerleriniz: ${secilenDegerlerText}`}
          />
          <Button
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            onClick={() => dispatch(handleNext())}
            sx={{ visibility: "hidden" }}
          >
            İleri
          </Button>
        </Stack>
      </Grid>
      <ResultTable />
    </Grid>
  );
}
