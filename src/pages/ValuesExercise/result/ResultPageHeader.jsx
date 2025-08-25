import { memo } from "react";
import { Button, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { handleBack } from "../valueSlice";
import { useDispatch } from "react-redux";

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
        <Typography variant="h5" component="h1" gutterBottom>
          Bölüm Önerileri
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Seçtiğiniz değerlere göre size uygun bölümler aşağıdadır.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Öncelikli Değerleriniz:</strong> {secilenDegerlerText}
        </Typography>
      </Grid>

      <Grid size={3} />
    </Grid>
  );
}

export default memo(ResultPageHeader);
