import { configureStore } from "@reduxjs/toolkit";
import { valueSlice } from "../pages/ValuesExercise/ValueSlice";
import { resultSlice } from "../pages/ValuesExercise/resultSlice";

export const store = configureStore({
  reducer: {
    value: valueSlice.reducer,
    result: resultSlice.reducer,
  },
});
