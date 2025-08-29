import { Box, Grid, Paper, Typography } from "@mui/material";
import Value from "./Value";
import { useDrop } from "react-dnd";
import React, { useMemo } from "react";

function ValuesPile({ values, action, onDrop, title }) {
  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
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
    }),
    [onDrop, values]
  );

  const paperSx = useMemo(
    () => (theme) => ({
      position: "relative",
      borderRadius: "16px",
      height: "100%",
      width: "100%",
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
      <Box sx={{ maxHeight: 350, overflowY: "auto", p: 3 }}>
        <Grid container spacing={2}>
          {values.map((value) => (
            <Value key={value.id} value={value} action={action} />
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default React.memo(ValuesPile);
