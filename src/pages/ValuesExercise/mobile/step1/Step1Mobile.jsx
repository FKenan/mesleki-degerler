import { Box, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ExercisePageTypography from "../../ExercisePageTypography";
import NextButtonMobile from "../NextButtonMobile";
import ValueStackMobile from "./ValueStackMobile";
import { selectIsLoaded, selectValueStack } from "../../valueSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react"; // Added useState and useEffect

export default function Step1Mobile({ direction }) {
  const valueStack = useSelector(selectValueStack);
  const isloaded = useSelector(selectIsLoaded);
  const [showCards, setShowCards] = useState(false); // New state for conditional rendering

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 400); // Delay matches page transition duration (0.4s)
    return () => clearTimeout(timer);
  }, []);

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
      key="step1-mobile-page" // Unique key for this page component
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
          minHeight: "90vh",
          p: 4,
          gap: 2,
        }}
      >
        <ExercisePageTypography
          title="Değerleri İki Gruba Ayırın"
          subtitle1="Size en uygun olan değerleri 'Tut' butonuna, diğerlerini ise 'At' butonuna basarak ayırın."
        />
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 360,
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {!isloaded ? (
            <CircularProgress />
          ) : (
            <AnimatePresence>
              {showCards ? ( // If showCards is true, then check valueStack.length
                valueStack.length > 0 ? (
                  valueStack.map((value, idx) => (
                    <ValueStackMobile key={value.id} value={value} idx={idx} />
                  ))
                ) : (
                  <Typography variant="h6" color="text.secondary">
                    Tüm değerleri grupladınız. <br /> Sonraki adıma
                    geçebilirsiniz.
                  </Typography>
                )
              ) : (
                <CircularProgress /> // Show loader during the delay
              )}
            </AnimatePresence>
          )}
        </Box>
        <NextButtonMobile />
      </Box>
    </motion.div>
  );
}
