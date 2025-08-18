import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import ExercisePageTypography from "../../ExercisePageTypography";
import NextButtonMobile from "../NextButtonMobile";
import ValueStackMobile from "./ValueStackMobile";

export default function Step1Mobile() {
  const { valueStack } = useSelector((state) => state.value);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "90vh",
        px: 2,
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
        }}
      >
        {valueStack.map((value, idx) => (
          <ValueStackMobile key={value.id} value={value} idx={idx} />
        ))}
      </Box>
      <NextButtonMobile />
    </Box>
  );
}
