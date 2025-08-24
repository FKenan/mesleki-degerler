import { Button, Grid, Slide, Stack } from "@mui/material";
import ResultTable from "./ResultTable";
import ResultFilter from "./filter";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "../ExercisePageTypography";
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect } from "react";
import {
  handleBack,
  handleNext,
  selectActiveStep,
  selectFirst5Value,
} from "../valueSlice";
import { applyFilter } from "./resultSlice";

function ResultPage() {
  const activeStep = useSelector(selectActiveStep);
  const first5Value = useSelector(selectFirst5Value);
  const { tableData } = useSelector((state) => state.result);

  const dispatch = useDispatch();

  useEffect(() => {
    if (tableData.length > 0) {
      dispatch(applyFilter({ first5Value }));
    }
  }, [tableData, first5Value, dispatch]);

  const handleBackClick = () => dispatch(handleBack());
  const handleNextClick = () => dispatch(handleNext());

  const secilenDegerlerText = first5Value.map((value) => value.ad).join(", ");

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
              title="Bölüm Önerileri"
              subtitle1="Seçtiğiniz değerlere göre size uygun bölümler aşağıdadır."
              subtitle2={`Öncelikli Değerleriniz: ${secilenDegerlerText}`}
            />
            <Button
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              onClick={handleNextClick}
              sx={{ visibility: "hidden" }}
            >
              İleri
            </Button>
          </Stack>
        </Grid>
        <Grid size={12} container justifyContent="center">
          <ResultFilter first5Value={first5Value} />
        </Grid>
        <Grid size={12}>
          <ResultTable />
        </Grid>
      </Grid>
    </Slide>
  );
}

export default memo(ResultPage);
