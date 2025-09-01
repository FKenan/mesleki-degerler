import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { addToDiscardPile, addToKeepPile } from "../../valueSlice";
import { useDispatch } from "react-redux";
import { memo, useCallback, useMemo } from "react";

// SX props as constants for performance
const staticCardSx = {
  position: "absolute",
  width: "95%",
  height: "100%",
  borderRadius: 5,
  display: "flex",
  flexDirection: "column",
  minHeight: 320,
  maxHeight: 400,
};

const gridContainerSx = { p: 3 };

const discardButtonSx = {
  backgroundColor: "error.main",
  color: "white",
  fontWeight: "bold",
  borderRadius: 5,
  padding: "10px 0",
};

const keepButtonSx = {
  backgroundColor: "success.dark",
  color: "white",
  fontWeight: "bold",
  borderRadius: 5,
  padding: "10px 0",
};

const cardContentSx = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  textAlign: "center",
  p: 1,
};

const titleSx = { fontWeight: "bold", color: "primary.dark" };

const ValueStackMobile = ({ value, idx }) => {
  const dispatch = useDispatch();

  const handleAddToDiscardPile = useCallback(() => {
    dispatch(addToDiscardPile(value));
  }, [dispatch, value]);

  const handleAddToKeepPile = useCallback(() => {
    dispatch(addToKeepPile(value));
  }, [dispatch, value]);

  const cardSx = useMemo(
    () => ({
      ...staticCardSx,
      top: idx * -1,
      left: idx * 1,
    }),
    [idx]
  );

  return (
    <Card elevation={3} sx={cardSx}>
      <Grid container spacing={5} sx={gridContainerSx}>
        <Grid size={6}>
          <Button
            onClick={handleAddToDiscardPile}
            variant="contained"
            startIcon={<CloseIcon />}
            fullWidth
            sx={discardButtonSx}
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
            sx={keepButtonSx}
            aria-label="Bu değeri tut"
          >
            Tut
          </Button>
        </Grid>
      </Grid>
      <CardContent sx={cardContentSx}>
        <Typography variant="h6" component="h2" gutterBottom sx={titleSx}>
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
