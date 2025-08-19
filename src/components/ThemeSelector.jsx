import { Box, IconButton, useTheme } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeSelector() {
  const theme = useTheme();
  const { toggleColorMode } = useThemeContext();

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Box>
  );
}
