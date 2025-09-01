import { memo, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  handleNext,
  selectActiveStep,
  selectFirst5Value,
  selectKeepPile,
  selectValueStack,
} from "../valueSlice";

// Constants for performance optimization
const boxSx = {
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  maxWidth: 500,
};

const buttonSx = {
  borderRadius: "20px",
  padding: "15px 30px",
  fontWeight: "bold",
};

const nextIcon = <ArrowForwardIcon />;

function NextButtonMobile() {
  const dispatch = useDispatch();
  const activeStep = useSelector(selectActiveStep);
  const valueStack = useSelector(selectValueStack);
  const keepPile = useSelector(selectKeepPile);
  const first5Value = useSelector(selectFirst5Value);

  const handleNextClick = useCallback(() => {
    dispatch(handleNext());
  }, [dispatch]);

  const isDisabled = useMemo(() => {
    if (activeStep === 0) {
      return valueStack.length !== 0;
    }
    return first5Value.length !== 5 && keepPile.length !== 0;
  }, [activeStep, valueStack.length, first5Value.length, keepPile.length]);

  return (
    <Box sx={boxSx}>
      <Button
        variant="contained"
        size="large"
        onClick={handleNextClick}
        endIcon={nextIcon}
        sx={buttonSx}
        disabled={isDisabled}
      >
        İleri
      </Button>
    </Box>
  );
}

export default memo(NextButtonMobile);
