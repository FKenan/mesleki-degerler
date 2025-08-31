import { Container, Grid } from "@mui/material";
import PilesStep2 from "./PilesStep2";
import { memo } from "react";
import Step2Header from "./Step2Header";
import { motion } from "framer-motion";

function Step2({ direction }) {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: direction === "forward" ? 100 : -100,
    },
    in: {
      opacity: 1,
      x: 0, // Animate to center
    },
    out: {
      opacity: 0,
      x: direction === "forward" ? -100 : 100,
    },
  };

  return (
    <motion.div
      key="step2-page" // Unique key for this page component
      initial="initial"
      animate="in" // Always animate in when mounted by AnimatePresence
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      style={{ width: "100%" }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <Grid container spacing={2} alignItems="center">
          <Step2Header />

          <PilesStep2 />
        </Grid>
      </Container>
    </motion.div>
  );
}

export default memo(Step2);
