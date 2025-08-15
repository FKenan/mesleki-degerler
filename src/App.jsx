import { createBrowserRouter, RouterProvider } from "react-router";
import { DeviceProvider } from "./context/DeviceContext";
import MainLayout from "./layouts/Main";
import HomePage from "./pages/home/Home";
import ValuesExercisePage from "./pages/ValuesExercise/ValuesExercise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/exercise", element: <ValuesExercisePage /> },
    ],
  },
]);

function App() {
  return (
    <DeviceProvider>
      <RouterProvider router={router} />
    </DeviceProvider>
  );
}

export default App;
