import { Grid, Paper } from "@mui/material";
import Value from "./Value";

const data = ["", "", "", "", "", "", ""];

export default function ValuesPile() {
  return (
    <Paper
      square={false}
      elevation={3}
      sx={{ borderRadius: 5, m: 5, p: 5, maxWidth: 500 }}
    >
      <Grid container spacing={3}>
        {/* Değerler burda listelenecek. */}
        {data.map((item, ind) => (
          <Value key={ind} />
        ))}
      </Grid>
    </Paper>
  );
}
