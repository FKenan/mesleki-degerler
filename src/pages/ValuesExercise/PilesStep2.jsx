import { Grid, Typography } from "@mui/material";
import ValuesPile from "./ValuesPile";
import ValuesPileWithPlaceholder from "./ValuesPileWithPlaceholder";
import { addtoFirst5Value, addToKeepPile } from "./valueSlice";
import { useSelector } from "react-redux";

export default function PilesStep2() {
  const { keepPile, first5Value } = useSelector((state) => state.value);
  return (
    <>
      <Grid size="grow" px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Seçilen Değerler
        </Typography>
        <ValuesPile
          values={keepPile}
          action={first5Value.length === 5 ? null : addtoFirst5Value}
        />
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
