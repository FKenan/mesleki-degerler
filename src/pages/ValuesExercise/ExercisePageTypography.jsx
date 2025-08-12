import { Box, Typography } from "@mui/material";

export default function ExercisePageTypography({
  title,
  subtitle1,
  subtitle2,
}) {
  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        gutterBottom
        sx={{ maxWidth: "75ch", mx: "auto" }}
      >
        {subtitle1}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: "75ch", mx: "auto" }}
      >
        {subtitle2}
      </Typography>
    </Box>
  );
}
