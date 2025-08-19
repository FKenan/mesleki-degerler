import { createContext, useState, useMemo, useContext } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: {
                  main: "#1976d2",
                },
              }
            : {
                primary: {
                  main: "#64b5f6",
                },
              }),
        },
        custom: {
          homeBackgroundGradient:
            mode === "light"
              ? "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)"
              : `linear-gradient(135deg, #1e1e1e 0%, #121212 100%)`,
          dropZone: {
            default: mode === "light" ? "#f8f8f8" : "rgba(255, 255, 255, 0.05)",
            canDrop: mode === "light" ? "#f5f5f5" : "rgba(255, 255, 255, 0.08)",
            isOver: mode === "light" ? "#e3f2fd" : "rgba(255, 255, 255, 0.12)",
          },
          placeholder: {
            background:
              mode === "light" ? "#eceff1" : "rgba(255, 255, 255, 0.08)",
          },
          cardHoverShadow:
            mode === "light"
              ? "0 4px 20px 0 rgba(0,0,0,0.12)"
              : "0 4px 20px 0 rgba(255,255,255,0.12)",
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
