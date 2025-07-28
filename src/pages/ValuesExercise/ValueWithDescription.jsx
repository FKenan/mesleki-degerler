import { Card, CardActionArea, Grid, Typography } from "@mui/material";

export default function ValueWithDescription() {
  return (
    <Grid size={{ sm: 4, md: 3 }}>
      <Card
        square={false}
        variant="outlined"
        sx={{ borderRadius: 3, height: "100%", borderColor: "primary.light" }}
      >
        <CardActionArea sx={{ p: 2, height: "100%" }}>
          <Typography variant="h6" fontWeight="bold" color="primary">
            Başlık
          </Typography>
          <Typography variant="body2" color="primary">
            Title - Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cupiditate, amet?
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
