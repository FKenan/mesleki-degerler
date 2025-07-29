import { Grid, Typography } from "@mui/material";
import ValuesPile from "./ValuesPile";

export default function PilesStep2({
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
          Seçilen Değerler
        </Typography>
        <ValuesPile values={keepPile} />
      </Grid>
      <Grid size="grow" px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Öncelikli 5 değeriniz
        </Typography>
        <ValuesPile values={discardPile} />
      </Grid>
    </>
  );
}
