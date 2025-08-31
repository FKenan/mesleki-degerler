import { Box, CircularProgress, Slide, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ExercisePageTypography from "../../ExercisePageTypography";
import NextButtonMobile from "../NextButtonMobile";
import ValueStackMobile from "./ValueStackMobile";
import { selectIsLoaded, selectValueStack } from "../../valueSlice";
import { AnimatePresence } from "framer-motion";

export default function Step1Mobile() {
  const valueStack = useSelector(selectValueStack);
  const isloaded = useSelector(selectIsLoaded);

  return (
    <Slide direction="down" in={true} mountOnEnter>
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
    </Slide>
  );
}
