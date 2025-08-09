import { Grid, Paper } from "@mui/material";
import Value from "./Value";
import { useDrop } from "react-dnd";

export default function ValuesPile({ values, action, onDrop, dropType }) {
  // Her kutu için ayrı drop alanı
  const [, dropRef] = useDrop({
    accept: "VALUE",
    drop: (item) => {
      if (onDrop) {
        onDrop(item.value, dropType);
      }
    },
  });

  return (
    <Paper
      ref={dropRef}
      square={false}
      elevation={3}
      sx={{
        borderRadius: 5,
        p: 2,
        height: "100%",
        minHeight: 300,
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
