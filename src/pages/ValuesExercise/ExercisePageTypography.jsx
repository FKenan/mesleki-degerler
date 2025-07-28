import { Box, Typography } from "@mui/material";

export default function ExercisePageTypography({
  title,
  subtitle1,
  subtitle2,
}) {
  return (
    <Box justifyItems="center" alignItems="center">
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle2">{subtitle1}</Typography>
      <Typography variant="body2">{subtitle2}</Typography>
    </Box>
  );
}
