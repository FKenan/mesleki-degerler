import { Box, Grid, Typography } from "@mui/material";
import ValuesPile from "./ValuesPile";
import ValueStack from "./ValueStack";

export default function Piles({
  haveValueStack,
  values,
  addToKeepPile,
  addToDiscardPile,
}) {
  return (
    <>
      <Grid size={haveValueStack ? 5 : 6} px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Atılacaklar Kutusu
        </Typography>
        <ValuesPile />
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
          <Typography variant="subtitle2" align="center">
            Kalan değer adeti
          </Typography>
        </Grid>
      )}
      <Grid size={haveValueStack ? 5 : 6} px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Tutulacaklar Kutusu
        </Typography>
        <ValuesPile />
      </Grid>
    </>
  );
}
