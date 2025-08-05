import { Grid, Typography } from "@mui/material";
import ValuesPile from "./ValuesPile";
import ValuesPileWithPlaceholder from "./ValuesPileWithPlaceholder";

export default function PilesStep2({
  addToKeepPile,
  addtoFirst5Value,
  keepPile,
  first5Value,
}) {
  return (
    <>
      <Grid size="grow" px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Seçilen Değerler
        </Typography>
        <ValuesPile values={keepPile} action={addtoFirst5Value} />
      </Grid>
      <Grid size="grow" px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Öncelikli 5 değeriniz
        </Typography>
        <ValuesPileWithPlaceholder
          values={first5Value}
          action={addToKeepPile}
        />
      </Grid>
    </>
  );
}
