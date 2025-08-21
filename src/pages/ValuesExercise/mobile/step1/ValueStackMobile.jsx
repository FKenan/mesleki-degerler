import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { addToDiscardPile, addToKeepPile } from "../../valueSlice";
import { useDispatch } from "react-redux";

export default function ValueStackMobile({ value, idx }) {
  const dispatch = useDispatch();

  return (
    <Card
      elevation={3}
      key={value.id}
      sx={{
        position: "absolute",
        top: idx * -1,
        left: idx * 1,
        width: "100%",
        height: "100%",
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        minHeight: 320,
        maxHeight: 400,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 3,
          py: 2,
          pb: 1,
          gap: 5,
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
            borderRadius: 5,
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
            borderRadius: 5,
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
          justifyContent: "start",
          alignItems: "center",
          textAlign: "center",
          p: 1,
        }}
      >
        <Typography
          variant="h4"
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
  );
}
