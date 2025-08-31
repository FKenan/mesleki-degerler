import { Box, Grid, Paper, Typography } from "@mui/material";
import Value from "./Value";
import { useDrop } from "react-dnd";
import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ValuesPile({ values, action, onDrop, title }) {
  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: "VALUE",
      drop: (item) => onDrop?.(item.value),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [onDrop]
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
          <AnimatePresence>
            {values.map((value) => (
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3 }}
                key={value.id}
                component={motion.div}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Value value={value} action={action} />
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Box>
    </Paper>
  );
}

export default React.memo(ValuesPile);
