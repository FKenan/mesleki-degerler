import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { addToFirst5Value, addToKeepPile } from "../../valueSlice";
import NextButtonMobile from "../NextButtonMobile";
import ValueCardMobile from "./ValueCardMobile";

export default function Step2Mobile() {
  const dispatch = useDispatch();
  const { keepPile, first5Value } = useSelector((state) => state.value);

  const handleToggle = (value, isSelected) => {
    if (isSelected) {
      dispatch(addToKeepPile(value));
    } else {
      if (first5Value.length < 5) {
        dispatch(addToFirst5Value(value));
      }
    }
  };

  const allValues = [...keepPile, ...first5Value].sort((a, b) => a.id - b.id);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "65vh",
        padding: 2,
        gap: 2,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 2, width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" gutterBottom>
          En Önemli 5 Değeri Seçin
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
          Sizin için en anlamlı 5 değeri seçerek devam edin.
        </Typography>
        <Typography variant="h6" color="primary">
          {first5Value.length} / 5 Değer Seçildi
        </Typography>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 500, flexGrow: 1 }}>
        {allValues.map((value) => {
          const isSelected = first5Value.some((v) => v.id === value.id);
          return (
            <ValueCardMobile
              key={value.id}
              value={value}
              isSelected={isSelected}
              handleToggle={handleToggle}
              first5Value={first5Value}
            />
          );
        })}
      </Box>
      <NextButtonMobile />
    </Box>
  );
}
