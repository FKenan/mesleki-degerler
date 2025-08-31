import { Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import ExercisePageTypography from "../../ExercisePageTypography";
import ResultTable from "../../result/ResultTable";
import { selectFirst5Value } from "../../valueSlice";
import ResultFilter from "../../result/filter";
import BackButtonMobile from "../BackButtonMobile";
import { motion } from "framer-motion";

export default function ResultMobile({ direction }) {
  const first5Value = useSelector(selectFirst5Value);
  const secilenDegerlerText = first5Value.map((value) => value.ad).join(", ");

  const pageVariants = {
    initial: {
      opacity: 0,
      x: direction === "forward" ? 100 : -100, // Start from right for forward, left for backward
    },
    in: {
      opacity: 1,
      x: 0, // Animate to center
    },
    out: {
      opacity: 0,
      x: direction === "forward" ? -100 : 100, // Animate to left for forward, right for backward
    },
  };

  return (
    <motion.div
      key="result-mobile-page" // Unique key for this page component
      initial="initial"
      animate="in" // Always animate in when mounted by AnimatePresence
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      style={{ width: "100%" }}
    >
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
    </motion.div>
  );
}
