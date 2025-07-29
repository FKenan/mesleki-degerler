import { Box, Grid, Typography } from "@mui/material";
import ValuesPile from "./ValuesPile";
import ValueStack from "./ValueStack";

export default function Piles({
  haveValueStack,
  values,
  addToKeepPile,
  addToDiscardPile,
  keepPile,
  discardPile,
}) {
  return (
    <>
      <Grid size="grow" px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Atılacaklar Kutusu
        </Typography>
        <ValuesPile values={discardPile} />
      </Grid>
      {haveValueStack && (
        <Grid size={2} position="relative">
          <Box position="relative">
            {values.map((value, ind) => (
              <ValueStack
                value={value}
                addToKeepPile={addToKeepPile}
                addToDiscardPile={addToDiscardPile}
                key={ind}
              />
            ))}
          </Box>
        </Grid>
      )}
      <Grid size="grow" px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Tutulacaklar Kutusu
        </Typography>
        <ValuesPile values={keepPile} />
      </Grid>
    </>
  );
}
