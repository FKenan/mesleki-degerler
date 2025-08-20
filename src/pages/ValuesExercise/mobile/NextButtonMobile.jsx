import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  handleNext,
  selectActiveStep,
  selectFirst5Value,
  selectValueStack,
} from "../valueSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";

export default function NextButtonMobile() {
  const dispatch = useDispatch();
  const first5Value = useSelector(selectFirst5Value);
  const activeStep = useSelector(selectActiveStep);
  const valueStack = useSelector(selectValueStack);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        maxWidth: 500,
        mb: 1,
      }}
    >
      <Button
        variant="contained"
        size="large"
        onClick={() => dispatch(handleNext())}
        endIcon={<ArrowForwardIcon />}
        sx={{
          borderRadius: "20px",
          padding: "15px 30px",
          fontWeight: "bold",
        }}
        {...(activeStep === 0
          ? { disabled: valueStack.length !== 0 }
          : { disabled: first5Value.length !== 5 })}
      >
        İleri
      </Button>
    </Box>
  );
}
