import { Card, CardActionArea, Grid, Typography } from "@mui/material";

export default function Value({ value }) {
  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Card
        elevation={0}
        sx={{
          borderRadius: 5,
          height: "100%",
        }}
      >
        <CardActionArea sx={{ height: "100%", p: 1 }}>
          <Typography variant="h6" color="primary.dark">
            {value.ad}
          </Typography>
          <Typography variant="subtitle2">{value.aciklama}</Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
