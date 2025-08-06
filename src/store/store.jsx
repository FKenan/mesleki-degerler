import { configureStore } from "@reduxjs/toolkit";
import { valueSlice } from "../pages/ValuesExercise/ValueSlice";

export const store = configureStore({
  reducer: {
    value: valueSlice.reducer,
  },
});
