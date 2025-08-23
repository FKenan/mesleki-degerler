import { Stack, Typography } from "@mui/material";
import { memo } from "react";

const stackSx = {
  textAlign: "center",
  mb: 4,
  maxWidth: 600,
  mx: "auto",
};

function ExercisePageTypography({ title, subtitle1, subtitle2 }) {
  return (
    <Stack spacing={1.5} sx={stackSx}>
      <Typography
        color="primary.main"
        variant="h4"
        component="h1"
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Typography variant="h6" component="p" color="text.secondary">
        {subtitle1}
      </Typography>
      {subtitle2 && (
        <Typography variant="body1" color="text.secondary">
          {subtitle2}
        </Typography>
      )}
    </Stack>
  );
}

export default memo(ExercisePageTypography);
