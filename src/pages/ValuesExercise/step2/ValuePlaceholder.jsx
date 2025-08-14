import { Card, Grid } from "@mui/material";

export default function ValuePlaceholder() {
  return (
    <Grid size={{ sm: 12, md: 6, lg: 4, xl: 3 }}>
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
