import { Grid, Typography } from "@mui/material";
import ValuesPile from "./ValuesPile";
import ValuesPileWithPlaceholder from "./ValuesPileWithPlaceholder";
import { addToFirst5Value, addToKeepPile } from "./valueSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PilesStep2() {
  const { keepPile, first5Value } = useSelector((state) => state.value);

  const dispatch = useDispatch();

  const handleDropFirst5Value = (value) => {
    dispatch(addToFirst5Value(value));
  };

  const handleDropKeep = (value) => {
    dispatch(addToKeepPile(value));
  };
  return (
    <>
      <Grid size="grow" px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Seçilen Değerler
        </Typography>
        <ValuesPile
          values={keepPile}
          action={first5Value.length === 5 ? null : addToFirst5Value}
          onDrop={handleDropKeep}
        />
      </Grid>
      <Grid size="grow" px={1}>
        <Typography variant="subtitle2" gutterBottom sx={{ ml: 2 }}>
          Öncelikli 5 değeriniz
        </Typography>
        <ValuesPileWithPlaceholder
          values={first5Value}
          action={addToKeepPile}
          onDrop={handleDropFirst5Value}
        />
      </Grid>
    </>
  );
}
