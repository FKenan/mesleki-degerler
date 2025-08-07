import { Card, Grid } from "@mui/material";

export default function ValuePlaceholder() {
  return (
    <Grid size={{ sm: 4, md: 3 }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 3,
          height: "100%",
          borderColor: "",
          minHeight: 40,
          bgcolor: "#eceff1",
        }}
      ></Card>
    </Grid>
  );
}
