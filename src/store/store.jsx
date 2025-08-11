import { configureStore } from "@reduxjs/toolkit";
import { valueSlice } from "../pages/ValuesExercise/valueSlice";
import { resultSlice } from "../pages/ValuesExercise/result/resultSlice";

export const store = configureStore({
  reducer: {
    value: valueSlice.reducer,
    result: resultSlice.reducer,
  },
});
