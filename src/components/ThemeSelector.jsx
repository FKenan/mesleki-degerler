import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeSelector() {
  const theme = useTheme();
  const { toggleColorMode } = useThemeContext();

  const isDarkMode = theme.palette.mode === "dark";
  const tooltipTitle = isDarkMode ? "Aydınlık moda geç" : "Karanlık moda geç";

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={tooltipTitle}>
        <IconButton
          sx={{ ml: 1 }}
          onClick={toggleColorMode}
          color="inherit"
          aria-label={tooltipTitle}
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
}
