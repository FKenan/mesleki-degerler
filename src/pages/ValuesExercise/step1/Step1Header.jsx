import { Button, Grid, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExercisePageTypography from "../ExercisePageTypography";
import { memo, useCallback } from "react";
import { handleNext, selectValueStack } from "../valueSlice";
import { useDispatch, useSelector } from "react-redux";

function Step1Header() {
  const valueStack = useSelector(selectValueStack);
  const dispatch = useDispatch();
  const isNextDisabled = valueStack.length !== 0;

  const handleNextClick = useCallback(() => {
    dispatch(handleNext());
  }, [dispatch]);

  return (
    <Grid
      container
      size={12}
      sx={{ my: 4 }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid size={3}></Grid>

      <Grid size={6}>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="column"
          spacing={1}
        >
          <ExercisePageTypography
            title="Değerlerinizi Keşfedin"
            subtitle1="Aşağıdaki değer kartlarını size en uygun olanları 'Tutulacaklar', diğerlerini ise 'Atılacaklar' kutusuna sürükleyin."
            subtitle2="Bu adımda istediğiniz kadar değeri 'Tutulacaklar' kutusuna ekleyebilirsiniz."
          />
        </Stack>
      </Grid>

      <Grid size={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          endIcon={<ArrowForwardIcon />}
          variant="contained"
          size="large"
          disabled={isNextDisabled}
          onClick={handleNextClick}
        >
          İleri
        </Button>
      </Grid>
    </Grid>
  );
}

export default memo(Step1Header);
