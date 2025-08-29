import { memo } from "react";
import { Button, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { handleBack } from "../valueSlice";
import { useDispatch } from "react-redux";
import ExercisePageTypography from "../ExercisePageTypography";

function ResultPageHeader({ secilenDegerlerText }) {
  const dispatch = useDispatch();
  const handleBackClick = () => dispatch(handleBack());

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ my: 4, textAlign: "center" }}
    >
      <Grid size={3}>
        <Button
          startIcon={<ArrowBackIcon />}
          variant="contained"
          size="large"
          onClick={handleBackClick}
        >
          Geri
        </Button>
      </Grid>

      <Grid size={6}>
        <ExercisePageTypography
          title="Bölüm Önerileri"
          subtitle1="Seçtiğiniz değerlere göre size uygun bölümler aşağıdadır."
          subtitle2={`Öncelikli Değerleriniz: ${secilenDegerlerText}`}
        />
      </Grid>

      <Grid size={3} />
    </Grid>
  );
}

export default memo(ResultPageHeader);
