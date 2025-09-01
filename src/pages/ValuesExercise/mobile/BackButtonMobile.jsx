import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { handleBack } from "../valueSlice";

// Constants for performance optimization
const boxSx = {
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  maxWidth: 500,
};

const buttonSx = {
  borderRadius: "20px",
  padding: "15px 30px",
  fontWeight: "bold",
};

const backIcon = <ArrowBackIcon />;

function BackButtonMobile() {
  const dispatch = useDispatch();

  const handleBackClick = useCallback(() => {
    dispatch(handleBack());
  }, [dispatch]);

  return (
    <Box sx={boxSx}>
      <Button
        variant="contained"
        size="large"
        onClick={handleBackClick}
        endIcon={backIcon}
        sx={buttonSx}
      >
        Geri
      </Button>
    </Box>
  );
}

export default memo(BackButtonMobile);
