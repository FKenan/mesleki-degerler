import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
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
        minHeight: "85vh",
        px: 2,
        gap: 2,
      }}
    >
      <Box sx={{ textAlign: "center", width: "100%", maxWidth: 500, mb: 2 }}>
        <Typography variant="h5" gutterBottom>
          Değerleri İki Gruba Ayırın
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Size en uygun olan değerleri 'Tut' butonuna, diğerlerini ise 'At'
          butonuna basarak ayırın.
        </Typography>
      </Box>
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
