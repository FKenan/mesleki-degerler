import { createBrowserRouter, RouterProvider } from "react-router";
import { memo } from "react";
import MainLayout from "./layouts/Main";
import { DeviceProvider } from "./context/DeviceContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Box, CircularProgress } from "@mui/material";

const LoadingFallback = memo(() => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <CircularProgress />
  </Box>
));
LoadingFallback.displayName = "LoadingFallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        async lazy() {
          const { default: HomePage } = await import("./pages/home/Home");
          return { Component: HomePage };
        },
      },
      {
        path: "/exercise",
        async lazy() {
          const { default: ValuesExercisePage } = await import(
            "./pages/ValuesExercise/ValuesExercise"
          );
          return { Component: ValuesExercisePage };
        },
      },
      {
        path: "*",
        async lazy() {
          const { default: NotFoundPage } = await import(
            "./pages/notFound/NotFound"
          );
          return { Component: NotFoundPage };
        },
      },
    ],
  },
]);

function App() {
  return (
    <DeviceProvider>
      <ThemeProvider>
        <RouterProvider router={router} fallbackElement={<LoadingFallback />} />
      </ThemeProvider>
    </DeviceProvider>
  );
}

export default memo(App);
