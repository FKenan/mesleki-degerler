import { Grid, Paper } from "@mui/material";
import Value from "./Value";

export default function ValuesPile({ values }) {
  return (
    <Paper
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
          <Value key={ind} value={value} />
        ))}
      </Grid>
    </Paper>
  );
}
