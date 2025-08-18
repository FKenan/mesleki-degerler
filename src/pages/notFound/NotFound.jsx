import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        textAlign: "center",
        p: 2,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        color="primary.main"
        fontWeight="bold"
      >
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Sayfa Bulunamadı
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, maxWidth: "400px" }}
      >
        Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen adresi
        kontrol edin veya ana sayfaya dönün.
      </Typography>
      <Button component={Link} to="/" variant="contained" size="large">
        Ana Sayfaya Dön
      </Button>
    </Box>
  );
}
