import { Box, Grid, Typography } from "@mui/material";
import ValuesPile from "./ValuesPile";
import ValueStack from "./ValueStack";
import { useSelector } from "react-redux";

export default function Piles({
  addToKeepPile,
  addToDiscardPile,
  keepPile,
  discardPile,
}) {
  const { valueStack } = useSelector((state) => state.value);

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
            <ValueStack
              value={value}
              addToKeepPile={addToKeepPile}
              addToDiscardPile={addToDiscardPile}
              key={ind}
            />
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
