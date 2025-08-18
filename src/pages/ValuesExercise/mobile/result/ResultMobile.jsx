import { Grid, Stack } from "@mui/material";
import ExercisePageTypography from "../../ExercisePageTypography";
import { useSelector } from "react-redux";
import ResultTableMobile from "./ResultTableMobile";

export default function ResultMobile() {
  const { first5Value } = useSelector((state) => state.value);

  const secilenDegerlerText = first5Value.map((value) => value.ad).join(", ");

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid size={12} sx={{ my: 2 }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="column"
          spacing={2}
        >
          <ExercisePageTypography
            title="Değerlerinize Uygun Bölümler"
            subtitle1="Belirlediğiniz beş temel mesleki değere dayanarak, sizin için en uygun olabilecek üniversite bölümlerini aşağıda bulabilirsiniz."
            subtitle2={`Öncelikli Değerleriniz: ${secilenDegerlerText}`}
          />
        </Stack>
      </Grid>
      <Grid size={12}>
        <ResultTableMobile />
      </Grid>
    </Grid>
  );
}
