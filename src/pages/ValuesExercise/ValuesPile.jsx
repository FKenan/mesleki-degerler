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

  return (
    <Paper
      ref={dropRef}
      square={false}
      elevation={isOver ? 8 : 1}
      sx={(theme) => ({
        position: "relative",
        borderRadius: "16px",
        p: 3,
        height: "100%",
        width: "90%",
        minHeight: 300,
        backgroundColor:
          isOver && canDrop
            ? theme.custom.dropZone.isOver
            : canDrop
            ? theme.custom.dropZone.canDrop
            : theme.custom.dropZone.default,
        border:
          isOver && canDrop
            ? `2px dashed ${theme.palette.primary.main}`
            : "2px solid transparent",
        transition: "background-color 0.3s, border 0.3s, box-shadow 0.3s",
        boxShadow: isOver
          ? "0px 8px 24px rgba(0,0,0,0.15)"
          : "0px 1px 3px rgba(0,0,0,0.1)",
      })}
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
