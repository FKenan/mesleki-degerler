import { Button, Grid } from "@mui/material";

export default function Value() {
  return (
    <Grid size={{ sm: 4, md: 3 }}>
      <Button
        variant="outlined"
        size="small"
        sx={{ fontWeight: "bold", fontSize: 12, p: 1, height: "100%" }}
      >
        Lorem ipsum dolor.
        {/* Değer Adı */}
      </Button>
    </Grid>
  );
}
