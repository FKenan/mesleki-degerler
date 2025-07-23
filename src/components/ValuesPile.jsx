import { Grid, Paper } from "@mui/material";
import Value from "./Value";
import ValueWithDescription from "./ValueWithDescription";

const data = ["", "", "", "", "", "", ""];

export default function ValuesPile() {
  return (
    <Paper
      square={false}
      elevation={3}
      sx={{ borderRadius: 5, mx: 2, mt: 3, p: 5, height: "100%" }}
    >
      <Grid container spacing={3}>
        {/* Değerler burda listelenecek. */}
        {data.map((item, ind) => (
          <Value key={ind} />
        ))}
        <ValueWithDescription />
      </Grid>
    </Paper>
  );
}
