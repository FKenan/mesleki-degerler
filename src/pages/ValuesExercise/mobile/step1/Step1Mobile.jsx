import { Box, CircularProgress, Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import NextButtonMobile from "../NextButtonMobile";
import ValueStackMobile from "./ValueStackMobile";
import { selectIsLoaded, selectValueStack } from "../../valueSlice";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";
import ExercisePageTypography from "../../ExercisePageTypography";
import AnimatedDiv from "../../../../components/animations/AnimatedDiv";

function Step1Mobile({ direction }) {
  const valueStack = useSelector(selectValueStack);
  const isloaded = useSelector(selectIsLoaded);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedDiv direction={direction}>
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
          {!isloaded || !showCards ? (
            <CircularProgress />
          ) : (
            <AnimatePresence>
              {valueStack.length > 0 ? (
                valueStack.map((value, idx) => (
                  <ValueStackMobile key={value.id} value={value} idx={idx} />
                ))
              ) : (
                <Typography variant="h6" color="text.secondary">
                  Tüm değerleri grupladınız. <br /> Sonraki adıma
                  geçebilirsiniz.
                </Typography>
              )}
            </AnimatePresence>
          )}
        </Box>
        <NextButtonMobile />
      </Box>
    </AnimatedDiv>
  );
}

export default memo(Step1Mobile);
