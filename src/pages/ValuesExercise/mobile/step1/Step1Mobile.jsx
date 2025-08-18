import { Card, CardContent, Button, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { useSelector, useDispatch } from "react-redux";
import { addToDiscardPile, addToKeepPile } from "../../valueSlice";
import NextButtonMobile from "../NextButtonMobile";

export default function Step1Mobile() {
  const { valueStack } = useSelector((state) => state.value);
  const dispatch = useDispatch();

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
          <Card
            elevation={3}
            key={value.id}
            sx={{
              position: "absolute",
              top: idx * -1,
              left: idx * 1,
              width: "100%",
              height: "90%",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.18)",
              display: "flex",
              flexDirection: "column",
              pointerEvents: idx === valueStack.length - 1 ? "auto" : "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 2,
                gap: 4,
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <Button
                onClick={() => dispatch(addToDiscardPile(value))}
                variant="contained"
                startIcon={<CloseIcon />}
                sx={{
                  backgroundColor: "#e53935",
                  "&:hover": {
                    backgroundColor: "#d32f2f",
                  },
                  color: "white",
                  flexGrow: 1,
                  fontWeight: "bold",
                  borderRadius: "20px",
                  padding: "10px 0",
                }}
              >
                At
              </Button>
              <Button
                onClick={() => dispatch(addToKeepPile(value))}
                variant="contained"
                startIcon={<CheckIcon />}
                sx={{
                  backgroundColor: "#43a047",
                  "&:hover": {
                    backgroundColor: "#388e3c",
                  },
                  color: "white",
                  flexGrow: 1,
                  fontWeight: "bold",
                  borderRadius: "20px",
                  padding: "10px 0",
                }}
              >
                Tut
              </Button>
            </Box>
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                p: 2,
              }}
            >
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#1a237e" }}
              >
                {value.ad}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {value.aciklama}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <NextButtonMobile />
    </Box>
  );
}
