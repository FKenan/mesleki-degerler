import { Grid, Typography } from "@mui/material";
import ValuesPile from "./ValuesPile";
import ValueStack from "./ValueStack";

export default function Piles({ haveValuesStack }) {
  return (
    <>
      <Grid size={haveValuesStack ? 5 : 6} px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Atılacaklar Kutusu
        </Typography>
        <ValuesPile />
      </Grid>
      {haveValuesStack && (
        <Grid size={2}>
          <ValueStack />
        </Grid>
      )}
      <Grid size={haveValuesStack ? 5 : 6} px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Tutulacaklar Kutusu
        </Typography>
        <ValuesPile />
      </Grid>
    </>
  );
}
