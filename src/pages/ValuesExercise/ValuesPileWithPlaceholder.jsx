import { Grid, Paper } from "@mui/material";
import Value from "./Value";
import ValuePlaceholder from "./ValuePlaceholder";

export default function ValuesPileWithPlaceholder({ values, action }) {
  return (
    <Paper
      square={false}
      elevation={10}
      sx={{
        borderRadius: 5,
        p: 2,
        height: "100%",
        minHeight: 300,
      }}
    >
      <Grid container spacing={2}>
        {Array.from({ length: 5 }).map((_, idx) =>
          values[idx] ? (
            <Value value={values[idx]} action={action} />
          ) : (
            <ValuePlaceholder />
          )
        )}
      </Grid>
    </Paper>
  );
}
