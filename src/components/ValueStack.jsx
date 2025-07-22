import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Fab,
  Typography,
} from "@mui/material";

export default function ValueStack() {
  return (
    <Box maxWidth={200}>
      <Card
        sx={{
          minHeight: 250,
          borderRadius: 5,
          my: 2,
          textAlign: "center",
          position: "relative",
        }}
      >
        <CardActionArea
          sx={{
            borderRadius: 0,
            position: "absolute",
            width: 40,
            height: "100%",
            left: 0,
            ":hover": { bgcolor: "error.main", opacity: 0.6 },
          }}
        ></CardActionArea>
        <CardActionArea
          sx={{
            borderRadius: 0,
            position: "absolute",
            width: 40,
            height: "100%",
            right: 0,
            ":hover": { bgcolor: "success.main", opacity: 0.6 },
          }}
        ></CardActionArea>
        <Typography variant="h5" fontWeight="bold" marginTop={2}>
          Başlık
        </Typography>
        <CardContent>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            exercitationem facilis neque officia! Perspiciatis eaque nulla sequi
            ut, facilis doloribus?
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="body2" align="center">
        Kalan değer adeti
      </Typography>
    </Box>
  );
}
