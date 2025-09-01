import { memo } from "react";
import { useSelector } from "react-redux";
import { Box, Divider } from "@mui/material";
import ExercisePageTypography from "../../ExercisePageTypography";
import ResultTable from "../../result/ResultTable";
import { selectFirst5Value } from "../../valueSlice";
import ResultFilter from "../../result/filter";
import BackButtonMobile from "../BackButtonMobile";
import AnimatedDiv from "../../../../components/animations/AnimatedDiv";

// SX props as constants for performance
const mainBoxSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 2,
  gap: 2,
};
const headerBoxSx = { width: "100%" };
const tableContainerBoxSx = {
  width: "100%",
  mt: 1,
  overflowY: "auto",
  height: "calc(100vh - 250px)",
};
const footerBoxSx = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

function ResultMobile({ direction }) {
  const first5Value = useSelector(selectFirst5Value);

  const secilenDegerlerText = first5Value.map((value) => value.ad).join(", ");

  return (
    <AnimatedDiv direction={direction}>
      <Box sx={mainBoxSx}>
        <Box sx={headerBoxSx}>
          <ExercisePageTypography
            title="Bölüm Önerileri"
            subtitle1="Seçtiğiniz değerlere göre size uygun bölümler aşağıdadır."
            subtitle2={`Öncelikli Değerleriniz: ${secilenDegerlerText}`}
          />
          <ResultFilter first5Value={first5Value} />
          <Divider />
        </Box>
        <Box sx={tableContainerBoxSx}>
          <ResultTable />
        </Box>
        <Box sx={footerBoxSx}>
          <BackButtonMobile />
        </Box>
      </Box>
    </AnimatedDiv>
  );
}

export default memo(ResultMobile);
