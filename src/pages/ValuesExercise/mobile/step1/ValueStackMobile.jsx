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
import { motion } from "framer-motion";

const ValueStackMobile = ({ value, idx }) => {
  const dispatch = useDispatch();

  const handleAddToDiscardPile = useCallback(() => {
    dispatch(addToDiscardPile(value));
  }, [dispatch, value]);

  const handleAddToKeepPile = useCallback(() => {
    dispatch(addToKeepPile(value));
  }, [dispatch, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -100, scale: 1 }}
      transition={{ duration: 0.3 }}
      key={value.id}
      style={{
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
      <Card
        elevation={3}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={5} sx={{ p: 3 }}>
          <Grid size={6}>
            <Button
              onClick={handleAddToDiscardPile}
              variant="contained"
              startIcon={<CloseIcon />}
              fullWidth
              sx={{
                backgroundColor: "error.main",
                color: "white",
                fontWeight: "bold",
                borderRadius: 5,
                padding: "10px 0",
              }}
              aria-label="Bu değeri at"
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
                backgroundColor: "success.dark",
                color: "white",
                fontWeight: "bold",
                borderRadius: 5,
                padding: "10px 0",
              }}
              aria-label="Bu değeri tut"
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
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold", color: "primary.dark" }}
          >
            {value.ad}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {value.aciklama}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default memo(ValueStackMobile);
