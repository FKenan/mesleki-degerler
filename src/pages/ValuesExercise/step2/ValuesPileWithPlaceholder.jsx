import { Grid, Paper, Typography } from "@mui/material";
import ValuePlaceholder from "./ValuePlaceholder";
import { useDrop } from "react-dnd";
import Value from "../Value";

export default function ValuesPileWithPlaceholder({
  values,
  action,
  onDrop,
  title,
}) {
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
    return "#f8f8f8f8";
  };

  return (
    <Paper
      ref={dropRef}
      square={false}
      elevation={isOver ? 8 : 1}
      sx={{
        borderRadius: "16px",
        p: 3,
        height: "100%",
        width: "90%",
        minHeight: 300,
        backgroundColor: getBgColor(),
        border:
          isOver && canDrop ? "2px dashed #1976d2" : "2px solid transparent",
        transition: "background-color 0.3s, border 0.3s, box-shadow 0.3s",
        position: "relative",
        boxShadow: isOver
          ? "0px 8px 24px rgba(0,0,0,0.15)"
          : "0px 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        align="center"
        fontWeight="bold"
        color="text.secondary"
      >
        {title}
      </Typography>
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
