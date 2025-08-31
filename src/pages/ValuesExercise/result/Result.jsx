import { memo, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box } from "@mui/material";
import ResultTable from "./ResultTable";
import ResultFilter from "./filter";
import { selectFirst5Value } from "../valueSlice";
import { applyFilter } from "./resultSlice";
import ResultPageHeader from "./ResultPageHeader";
import { motion } from "framer-motion";

function ResultPage({ direction }) {
  const dispatch = useDispatch();
  const first5Value = useSelector(selectFirst5Value);

  useEffect(() => {
    dispatch(applyFilter({ first5Value }));
  }, [first5Value, dispatch]);

  const secilenDegerlerText = useMemo(
    () => first5Value.map((value) => value.ad).join(", "),
    [first5Value]
  );

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
      key="result-page" // Unique key for this page component
      initial="initial"
      animate="in" // Always animate in when mounted by AnimatePresence
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      style={{ width: "100%" }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <ResultPageHeader secilenDegerlerText={secilenDegerlerText} />

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <ResultFilter first5Value={first5Value} />
        </Box>

        <ResultTable />
      </Container>
    </motion.div>
  );
}

export default memo(ResultPage);
