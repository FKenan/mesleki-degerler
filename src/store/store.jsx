import { configureStore } from "@reduxjs/toolkit";
import { resultSlice } from "../pages/ValuesExercise/result/resultSlice";
import { valueSlice } from "../pages/ValuesExercise/valueSlice";

export const store = configureStore({
  reducer: {
    value: valueSlice.reducer,
    result: resultSlice.reducer,
  },
});
