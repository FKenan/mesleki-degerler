import { Grid, Paper, Typography } from "@mui/material";
import ValuePlaceholder from "./ValuePlaceholder";
import { useDrop } from "react-dnd";
import { memo, useMemo } from "react";
import Value from "../Value";

function ValuesPileWithPlaceholder({ values, action, onDrop, title }) {
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

  const paperSx = useMemo(
    () => (theme) => ({
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
      position: "relative",
      boxShadow: isOver
        ? theme.custom.pileShadowHover
        : theme.custom.pileShadow,
    }),
    [isOver, canDrop]
  );

  return (
    <Paper ref={dropRef} square={false} elevation={isOver ? 8 : 1} sx={paperSx}>
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
            <ValuePlaceholder key={`placeholder-${idx}`} />
          )
        )}
      </Grid>
    </Paper>
  );
}

export default memo(ValuesPileWithPlaceholder);
