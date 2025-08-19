import { Card, Grid } from "@mui/material";

export default function ValuePlaceholder() {
  return (
    <Grid size={{ sm: 12, md: 6, lg: 4, xl: 3 }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          borderRadius: 3,
          height: "100%",
          borderColor: "transparent",
          minHeight: 40,
          bgcolor: theme.custom.placeholder.background,
        })}
      ></Card>
    </Grid>
  );
}
