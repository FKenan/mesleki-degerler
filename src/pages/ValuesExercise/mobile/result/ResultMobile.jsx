import { Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import ExercisePageTypography from "../../ExercisePageTypography";
import ResultTableMobile from "./ResultTableMobile";
import { selectFirst5Value } from "../../valueSlice";

export default function ResultMobile() {
  const first5Value = useSelector(selectFirst5Value);
  const secilenDegerlerText = first5Value.map((value) => value.ad).join(", ");

  return (
    <Grid container alignItems="center">
      <Grid size={12}>
        <ExercisePageTypography
          title="Bölüm Önerileri"
          subtitle1="Seçtiğiniz değerlere göre size uygun bölümler aşağıdadır."
          subtitle2={`Öncelikli Değerleriniz: ${secilenDegerlerText}`}
        />
      </Grid>
      <Grid size={12}>
        <ResultTableMobile />
      </Grid>
    </Grid>
  );
}
