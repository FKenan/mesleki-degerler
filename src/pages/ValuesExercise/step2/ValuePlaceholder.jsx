import { Card } from "@mui/material";
import { memo } from "react";

const cardSx = (theme) => ({
  borderRadius: 3,
  height: "100%",
  borderColor: "transparent",
  minHeight: 40,
  bgcolor: theme.custom.placeholder.background,
});

function ValuePlaceholder() {
  return (
    <Card variant="outlined" sx={cardSx}></Card>
  );
}

export default memo(ValuePlaceholder);
