import { createContext, useState, useMemo, useContext } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext();

const getThemeConfig = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? { primary: { main: "#1976d2" } }
      : { primary: { main: "#64b5f6" } }),
  },
  custom: {
    backgroundGradient:
      mode === "light"
        ? "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)"
        : `linear-gradient(135deg, #1e1e1e 0%, #121212 100%)`,
    dropZone: {
      default: mode === "light" ? "#f8f8f8" : "rgba(255, 255, 255, 0.05)",
      canDrop: mode === "light" ? "#f5f5f5" : "rgba(255, 255, 255, 0.08)",
      isOver: mode === "light" ? "#e3f2fd" : "rgba(255, 255, 255, 0.12)",
    },
    placeholder: {
      background: mode === "light" ? "#eceff1" : "rgba(255, 255, 255, 0.08)",
    },
    cardHoverShadow:
      mode === "light"
        ? "0 4px 20px 0 rgba(0,0,0,0.12)"
        : "0 4px 20px 0 rgba(255,255,255,0.12)",
    pileShadow:
      mode === "light"
        ? "0px 1px 3px rgba(0,0,0,0.1)"
        : "0px 1px 3px rgba(255,255,255,0.1)",
    pileShadowHover:
      mode === "light"
        ? "0px 8px 24px rgba(0,0,0,0.15)"
        : "0px 8px 24px rgba(255,255,255,0.15)",
    highlight: {
      background:
        mode === "light"
          ? "rgba(25, 118, 210, 0.08)"
          : "rgba(100, 181, 246, 0.08)",
    },
    interactiveCard: {
      borderColor:
        mode === "light" ? "rgba(0, 0, 0, 0.12)" : "rgba(100, 181, 246, 0.3)",
      borderColorHover:
        mode === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(100, 181, 246, 0.5)",
    },
    valueStack: {
      borderHover:
        mode === "light"
          ? "1px solid rgba(0, 0, 0, 0.5)"
          : "1px solid rgba(255, 255, 255, 0.5)",
    },
  },
});

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const themeController = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getThemeConfig(mode)), [mode]);

  return (
    <ThemeContext.Provider value={themeController}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
