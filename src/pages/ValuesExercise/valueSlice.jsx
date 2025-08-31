import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

export const VALUE_EXERCISE_STEPS = [
  "Değerleri Ayır",
  "Önceliklendir",
  "Sonuç",
];

const API_URL = `${import.meta.env.VITE_API_BASEURL}/Degerler`;

export const fetchValues = createAsyncThunk("values/fetchValues", async () => {
  try {
    const res = await fetch(API_URL);
    return await res.json();
  } catch (e) {
    console.error("API gönderim hatası:", e);
    throw e;
  }
});

const removeItemById = (array, id) => {
  const index = array.findIndex((item) => item.id === id);
  if (index !== -1) {
    array.splice(index, 1);
  }
};

export const valueSlice = createSlice({
  name: "value",
  initialState: {
    values: [],
    valueStack: [],
    isLoaded: false,
    activeStep: 0,
    keepPile: [],
    discardPile: [],
    first5Value: [],
  },
  reducers: {
    handleNext: (state) => {
      state.activeStep += 1;
    },
    handleBack: (state) => {
      state.activeStep -= 1;
    },
    addToFirst5Value: (state, action) => {
      const { id } = action.payload;
      if (state.first5Value.some((v) => v.id === id)) return;

      state.first5Value.push(action.payload);

      removeItemById(state.keepPile, id);
      removeItemById(state.discardPile, id);
      removeItemById(state.valueStack, id);
    },
    addToDiscardPile: (state, action) => {
      const { id } = action.payload;
      if (state.discardPile.some((v) => v.id === id)) return;

      state.discardPile.push(action.payload);

      removeItemById(state.valueStack, id);
      removeItemById(state.keepPile, id);
      removeItemById(state.first5Value, id);
    },
    addToKeepPile: (state, action) => {
      const { id } = action.payload;
      if (state.keepPile.some((v) => v.id === id)) return;

      state.keepPile.push(action.payload);

      removeItemById(state.valueStack, id);
      removeItemById(state.discardPile, id);
      removeItemById(state.first5Value, id);
    },
    handleReset: (state) => {
      state.activeStep = 0;
      state.keepPile = [];
      state.discardPile = [];
      state.first5Value = [];
      state.valueStack = state.values;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchValues.fulfilled, (state, action) => {
      state.values = action.payload;
      state.valueStack = action.payload;
      state.isLoaded = true;
    });

    builder.addCase(fetchValues.pending, (state) => {
      state.isLoaded = false;
      state.values = [];
      state.valueStack = [];
    });
  },
});

export const {
  handleNext,
  handleBack,
  addToKeepPile,
  addToFirst5Value,
  addToDiscardPile,
  handleReset,
} = valueSlice.actions;

const selectValueState = (state) => state.value;

export const selectValues = createSelector(
  [selectValueState],
  (value) => value.values
);
export const selectValueStack = createSelector(
  [selectValueState],
  (value) => value.valueStack
);
export const selectKeepPile = createSelector(
  [selectValueState],
  (value) => value.keepPile
);
export const selectDiscardPile = createSelector(
  [selectValueState],
  (value) => value.discardPile
);
export const selectFirst5Value = createSelector(
  [selectValueState],
  (value) => value.first5Value
);
export const selectActiveStep = createSelector(
  [selectValueState],
  (value) => value.activeStep
);
export const selectIsLoaded = createSelector(
  [selectValueState],
  (value) => value.isLoaded
);
