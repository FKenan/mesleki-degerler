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
          borderRadius: 5,
          p: 1,
          my: 2,
          textAlign: "center",
          position: "relative",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Başlık
        </Typography>
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            aperiam quasi voluptatem a iste minima nam perspiciatis illo
            pariatur minus?
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="body2" align="center">
        Kalan değer adeti
      </Typography>
    </Box>
  );
}
