import { Card, CardActionArea, Grid, Typography } from "@mui/material";

export default function Value() {
  return (
    <Grid size={{ sm: 4, md: 3 }}>
      <Card
        square={false}
        variant="outlined"
        sx={{
          borderRadius: 3,
          height: "100%",
          borderColor: "primary.light",
        }}
      >
        <CardActionArea sx={{ p: 1, height: "100%" }}>
          <Typography
            variant="body2"
            fontWeight="bold"
            color="primary"
            align="center"
          >
            Başlık
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
