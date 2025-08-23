import { handleBack } from "../valueSlice";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButtonMobile() {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        maxWidth: 500,
        mb: 1,
      }}
    >
      <Button
        variant="contained"
        size="large"
        onClick={() => dispatch(handleBack())}
        endIcon={<ArrowBackIcon />}
        sx={{
          borderRadius: "20px",
          padding: "15px 30px",
          fontWeight: "bold",
        }}
      >
        Geri
      </Button>
    </Box>
  );
}
