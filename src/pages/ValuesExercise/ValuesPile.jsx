import { Grid, Paper } from "@mui/material";
import Value from "./Value";
import { useDrop } from "react-dnd";

export default function ValuesPile({ values, action, onDrop, dropType }) {
  // Her kutu için ayrı drop alanı
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: "VALUE",
    drop: (item) => {
      // Aynı kutuya bırakılırsa ekleme!
      if (onDrop && !values.some((v) => v.id === item.value.id)) {
        onDrop(item.value, dropType);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  // Görsel efektler için stil
  const getBgColor = () => {
    if (isOver && canDrop) return "#e3f2fd";
    if (canDrop) return "#f5f5f5";
  };

  return (
    <Paper
      ref={dropRef}
      square={false}
      elevation={isOver ? 8 : 3}
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
        {values.map((value, ind) => (
          <Value key={value.id ?? ind} value={value} action={action} />
        ))}
      </Grid>
    </Paper>
  );
}
