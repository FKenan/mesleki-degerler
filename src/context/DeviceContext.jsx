import { createContext, useContext } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const DeviceContext = createContext();

export function DeviceProvider({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDevice() {
  return useContext(DeviceContext);
}
