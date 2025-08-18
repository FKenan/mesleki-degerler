import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { addToFirst5Value, addToKeepPile } from "../../valueSlice";
import NextButtonMobile from "../NextButtonMobile";

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
        <Typography variant="h5" component="h1" gutterBottom>
          En Önemli 5 Değeri Seçin
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
          Sizin için en anlamlı 5 değeri seçerek devam edin.
        </Typography>
        <Typography variant="h6" component="p" color="primary">
          {first5Value.length} / 5 Değer Seçildi
        </Typography>
      </Box>

      <Box sx={{ width: "100%", maxWidth: 500, flexGrow: 1 }}>
        {allValues.length > 0 ? (
          allValues.map((value) => {
            const isSelected = first5Value.some((v) => v.id === value.id);
            return (
              <Card
                key={value.id}
                elevation={isSelected ? 8 : 4}
                sx={{
                  mb: 2,
                  borderRadius: "16px",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  border: "2px solid",
                  borderColor: isSelected ? "primary.main" : "transparent",
                  backgroundColor: isSelected
                    ? "rgba(33, 150, 243, 0.08)"
                    : "background.paper",
                }}
              >
                <CardActionArea
                  onClick={() => handleToggle(value, isSelected)}
                  disabled={!isSelected && first5Value.length >= 5}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    <Typography variant="h6" component="span">
                      {value.ad}
                    </Typography>
                    <Checkbox
                      edge="end"
                      checked={isSelected}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      disabled={!isSelected && first5Value.length >= 5}
                      sx={{ color: isSelected ? "primary.main" : "inherit" }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })
        ) : (
          <Typography sx={{ textAlign: "center", mt: 4 }}>
            Değerler yükleniyor veya gösterilecek değer bulunamadı.
          </Typography>
        )}
      </Box>
      <NextButtonMobile />
    </Box>
  );
}
