import { Card, CardActionArea, Grid, Typography } from "@mui/material";

export default function Value({ value, action }) {
  return (
    <Grid size={{ md: 3, l: 4 }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 3,
          minHeight: 40,
          height: "100%",
          borderColor: "primary.light",
        }}
      >
        <CardActionArea
          disabled={action === null}
          sx={{ height: "100%" }}
          onClick={() => action(value)}
        >
          <Typography
            p={0.5}
            variant="body2"
            fontSize={12}
            fontWeight="bold"
            color="primary"
            align="center"
          >
            {value.ad}
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
