import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          2025 Mesleki Değerler.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 1 }}
        >
          Kariyer yolculuğunuzda değerlerinizi keşfetmenize yardımcı olur.
        </Typography>
      </Container>
    </Box>
  );
}
