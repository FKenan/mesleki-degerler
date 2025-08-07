import { Box, Grid, Typography } from "@mui/material";
import ValuesPile from "./ValuesPile";
import ValueStack from "./ValueStack";
import { useDispatch, useSelector } from "react-redux";
import { addToDiscardPile, addToKeepPile } from "./ValueSlice";

export default function Piles() {
  const { valueStack, keepPile, discardPile } = useSelector(
    (state) => state.value
  );
  const dispatch = useDispatch();

  return (
    <Grid size={12} container spacing={2} alignItems="stretch">
      <Grid size="grow" px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Atılacaklar Kutusu
        </Typography>
        <ValuesPile values={discardPile} action={addToKeepPile} />
      </Grid>
      <Grid size={2} minWidth={215}>
        <Box position="relative" display="flex" height="100%">
          {valueStack.map((value, ind) => (
            <ValueStack value={value} key={ind} />
          ))}
        </Box>
        <Typography variant="subtitle2" align="center">
          {`Kalan Değerler: ${valueStack.length}`}
        </Typography>
      </Grid>
      <Grid size="grow" px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Tutulacaklar Kutusu
        </Typography>
        <ValuesPile values={keepPile} action={addToDiscardPile} />
      </Grid>
    </Grid>
  );
}
