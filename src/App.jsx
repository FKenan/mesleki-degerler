import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/Main";
import HomePage from "./pages/home/Home";
import ValuesExercisePage from "./pages/ValuesExercise/ValuesExercise";
import { DeviceProvider } from "./context/DeviceContext";
import { ThemeProvider } from "./context/ThemeContext";
import NotFoundPage from "./pages/notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/exercise", element: <ValuesExercisePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return (
    <DeviceProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </DeviceProvider>
  );
}

export default App;
