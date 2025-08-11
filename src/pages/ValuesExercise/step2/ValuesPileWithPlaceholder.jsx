import { Grid, Paper } from "@mui/material";
import ValuePlaceholder from "./ValuePlaceholder";
import { useDrop } from "react-dnd";
import Value from "../Value";

export default function ValuesPileWithPlaceholder({ values, action, onDrop }) {
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: "VALUE",
    drop: (item) => {
      if (onDrop && !values.some((v) => v.id === item.value.id)) {
        onDrop(item.value);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const getBgColor = () => {
    if (isOver && canDrop) return "#e3f2fd";
    if (canDrop) return "#f5f5f5";
  };

  return (
    <Paper
      ref={dropRef}
      square={false}
      elevation={10}
      sx={{
        borderRadius: 5,
        p: 2,
        height: "100%",
        minHeight: 300,
        backgroundColor: getBgColor(),
        border:
          isOver && canDrop ? "2px dashed #1976d2" : "2px solid transparent",
        transition: "background-color 0.2s, border 0.2s",
        position: "relative",
      }}
    >
      <Grid container spacing={2}>
        {Array.from({ length: 5 }).map((_, idx) =>
          values[idx] ? (
            <Value value={values[idx]} action={action} key={values[idx].id} />
          ) : (
            <ValuePlaceholder key={idx + 20} />
          )
        )}
      </Grid>
    </Paper>
  );
}
