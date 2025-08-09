import { Box, Grid, Typography } from "@mui/material";
import ValuesPile from "./ValuesPile";
import ValueStack from "./ValueStack";
import { useDispatch, useSelector } from "react-redux";
import { addToDiscardPile, addToKeepPile } from "./valueSlice";

export default function Piles() {
  const { valueStack, keepPile, discardPile } = useSelector(
    (state) => state.value
  );
  const dispatch = useDispatch();

  // Atılacaklar kutusuna bırakınca
  const handleDropDiscard = (value) => {
    dispatch(addToDiscardPile(value));
  };

  // Tutulacaklar kutusuna bırakınca
  const handleDropKeep = (value) => {
    dispatch(addToKeepPile(value));
  };

  return (
    <Grid size={12} container spacing={2} alignItems="stretch">
      <Grid size="grow" px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Atılacaklar Kutusu
        </Typography>
        <ValuesPile
          values={discardPile}
          action={addToKeepPile}
          onDrop={handleDropDiscard}
          dropType="discard"
        />
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
        <ValuesPile
          values={keepPile}
          action={addToDiscardPile}
          onDrop={handleDropKeep}
          dropType="keep"
        />
      </Grid>
    </Grid>
  );
}
