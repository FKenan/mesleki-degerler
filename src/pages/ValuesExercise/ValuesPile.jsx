import { Grid, Paper, Typography } from "@mui/material";
import Value from "./Value";
import { useDrop } from "react-dnd";

export default function ValuesPile({ values, action, onDrop, title }) {
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
    return "#f0f0f0f0";
  };

  return (
    <Paper
      ref={dropRef}
      square={false}
      elevation={isOver ? 8 : 1}
      sx={{
        borderRadius: "16px",
        p: 2,
        height: "100%",
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
        {values.map((value) => (
          <Value key={value.id} value={value} action={action} />
        ))}
      </Grid>
    </Paper>
  );
}
