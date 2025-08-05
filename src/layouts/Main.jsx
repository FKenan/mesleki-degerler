import { Outlet } from "react-router";
import HomePage from "../pages/home/Home";
import ValuesExercisePage from "../pages/ValuesExercise/ValuesExercise";

export default function MainLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
