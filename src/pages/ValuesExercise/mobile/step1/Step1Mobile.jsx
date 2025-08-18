import { Box } from "@mui/material";
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
        justifyContent: "center",
        minHeight: "65vh",
        padding: 2,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 360,
          height: "60vh",
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
