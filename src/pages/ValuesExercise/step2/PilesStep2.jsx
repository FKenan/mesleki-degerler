import { Grid } from "@mui/material";
import ValuesPile from "../ValuesPile";
import { useDispatch, useSelector } from "react-redux";
import ValuesPileWithPlaceholder from "./ValuesPileWithPlaceholder";
import {
  addToFirst5Value,
  addToKeepPile,
  selectFirst5Value,
  selectKeepPile,
} from "../valueSlice";
import { useCallback } from "react";

export default function PilesStep2() {
  const keepPile = useSelector(selectKeepPile);
  const first5Value = useSelector(selectFirst5Value);

  const dispatch = useDispatch();

  const handleDropFirst5Value = useCallback(
    (value) => {
      dispatch(addToFirst5Value(value));
    },
    [dispatch]
  );

  const handleDropKeep = useCallback(
    (value) => {
      dispatch(addToKeepPile(value));
    },
    [dispatch]
  );
  return (
    <Grid
      size={12}
      container
      spacing={6}
      alignItems="stretch"
      justifyContent="center"
    >
      <Grid size="grow" px={2}>
        <ValuesPile
          title="Seçilen Değerler"
          values={keepPile}
          action={first5Value.length === 5 ? null : addToFirst5Value}
          onDrop={handleDropKeep}
        />
      </Grid>
      <Grid size="grow" px={2}>
        <ValuesPileWithPlaceholder
          title="Öncelikli 5 değeriniz"
          values={first5Value}
          action={addToKeepPile}
          onDrop={handleDropFirst5Value}
        />
      </Grid>
    </Grid>
  );
}
