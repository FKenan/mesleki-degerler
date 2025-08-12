import { Grid } from "@mui/material";
import ValuesPile from "../ValuesPile";
import { addToFirst5Value, addToKeepPile } from "../valueSlice";
import { useDispatch, useSelector } from "react-redux";
import ValuesPileWithPlaceholder from "./ValuesPileWithPlaceholder";

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
    <Grid size={12} container spacing={6} alignItems="stretch">
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
