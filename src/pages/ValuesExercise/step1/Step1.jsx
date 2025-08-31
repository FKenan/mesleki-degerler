import { Container, Grid } from "@mui/material";
import Piles from "./Piles";
import React from "react";
import Step1Header from "./Step1Header";
import { motion } from "framer-motion";

function Step1({ direction }) {
  // Define animation variants for Framer Motion
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
    // The 'key' prop is crucial for AnimatePresence to detect when a component is removed/added.
    // 'initial', 'animate', and 'exit' define the animation states.
    <motion.div
      key="step1-page" // Unique key for this page component
      initial="initial"
      animate="in" // Always animate in when mounted by AnimatePresence
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      style={{ width: "100%" }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Step1Header />

          <Piles />
        </Grid>
      </Container>
    </motion.div>
  );
}

export default React.memo(Step1);
