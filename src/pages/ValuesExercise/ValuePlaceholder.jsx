import { Card, CardActionArea, Grid, Typography } from "@mui/material";

export default function ValuePlaceholder() {
  return (
    // Bu component placeholder olarak kullanılacak.
    <Grid size={{ sm: 4, md: 3 }}>
      <Card
        square={false}
        variant="outlined"
        sx={{
          borderRadius: 3,
          height: "100%",
          borderColor: "primary.light",
          minHeight: 40,
        }}
      >
        <CardActionArea sx={{ p: 2, height: "100%" }}></CardActionArea>
      </Card>
    </Grid>
  );
}
