import { Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import ExercisePageTypography from "../../ExercisePageTypography";
import ResultTable from "../../result/ResultTable";
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
        <ResultFilter first5Value={first5Value} />
        <Divider />
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: 1,
          overflowY: "auto",
          height: "calc(100vh - 250px)",
        }}
      >
        <ResultTable />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BackButtonMobile />
      </Box>
    </Box>
  );
}
