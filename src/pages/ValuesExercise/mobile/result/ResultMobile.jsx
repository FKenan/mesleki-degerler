import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import ExercisePageTypography from "../../ExercisePageTypography";
import ResultTableMobile from "./ResultTableMobile";
import { selectFirst5Value } from "../../valueSlice";
import ResultFilter from "../../result/filter";
import BackButtonMobile from "../BackButtonMobile";

export default function ResultMobile() {
  const first5Value = useSelector(selectFirst5Value);
  const secilenDegerlerText = first5Value.map((value) => value.ad).join(", ");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "65vh",
        padding: 2,
        gap: 2,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <ExercisePageTypography
          title="Bölüm Önerileri"
          subtitle1="Seçtiğiniz değerlere göre size uygun bölümler aşağıdadır."
          subtitle2={`Öncelikli Değerleriniz: ${secilenDegerlerText}`}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <ResultFilter first5Value={first5Value} />
      </Box>
      <Box sx={{ width: "100%", flexGrow: 1, mt: 2 }}>
        <ResultTableMobile />
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <BackButtonMobile />
      </Box>
    </Box>
  );
}
