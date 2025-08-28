import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { addToDiscardPile, addToKeepPile } from "../../valueSlice";
import { useDispatch } from "react-redux";
import { memo, useCallback } from "react";

const ValueStackMobile = ({ value, idx }) => {
  const dispatch = useDispatch();

  const handleAddToDiscardPile = useCallback(() => {
    dispatch(addToDiscardPile(value));
  }, [dispatch, value]);

  const handleAddToKeepPile = useCallback(() => {
    dispatch(addToKeepPile(value));
  }, [dispatch, value]);

  return (
    <Card
      elevation={3}
      key={value.id}
      sx={{
        position: "absolute",
        top: idx * -1,
        left: idx * 1,
        width: "95%",
        height: "100%",
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        minHeight: 320,
        maxHeight: 400,
      }}
    >
      <Grid container spacing={5} sx={{ p: 2 }}>
        <Grid size={6}>
          <Button
            onClick={handleAddToDiscardPile}
            variant="contained"
            startIcon={<CloseIcon />}
            fullWidth
            sx={{
              backgroundColor: "#e53935",
              "&:hover": {
                backgroundColor: "#d32f2f",
              },
              color: "white",
              fontWeight: "bold",
              borderRadius: 5,
              padding: "10px 0",
            }}
          >
            At
          </Button>
        </Grid>
        <Grid size={6}>
          <Button
            onClick={handleAddToKeepPile}
            variant="contained"
            startIcon={<CheckIcon />}
            fullWidth
            sx={{
              backgroundColor: "#43a047",
              "&:hover": {
                backgroundColor: "#388e3c",
              },
              color: "white",
              fontWeight: "bold",
              borderRadius: 5,
              padding: "10px 0",
            }}
          >
            Tut
          </Button>
        </Grid>
      </Grid>
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
};

export default memo(ValueStackMobile);
