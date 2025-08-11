import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchValues = createAsyncThunk("api/Degerler", async () => {
  try {
    const res = await fetch("https://localhost:44316/api/Degerler");
    return await res.json();
  } catch (e) {
    console.error("API gönderim hatası:", e);
    throw e;
  }
});

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
      state.first5Value = [...state.first5Value, action.payload];
      removeValueFromKeepPile(state, action);
    },
    addToDiscardPile: (state, action) => {
      state.discardPile = [...state.discardPile, action.payload];
      removeValue(state, action);
      removeValueFromKeepPile(state, action);
    },
    addToKeepPile: (state, action) => {
      state.keepPile = [...state.keepPile, action.payload];
      removeValue(state, action);
      removeValueFromDiscardPile(state, action);
      removeValueFromFirst5Value(state, action);
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
      state.values = [];
      state.valueStack = [];
    });
  },
});

const removeValue = (state, action) => {
  state.valueStack = state.valueStack.filter((x) => action.payload.id !== x.id);
};

const removeValueFromKeepPile = (state, action) => {
  state.keepPile = state.keepPile.filter((x) => action.payload.id !== x.id);
};

const removeValueFromDiscardPile = (state, action) => {
  state.discardPile = state.discardPile.filter(
    (x) => action.payload.id !== x.id
  );
};

const removeValueFromFirst5Value = (state, action) => {
  state.first5Value = state.first5Value.filter(
    (x) => action.payload.id !== x.id
  );
};

export const {
  handleNext,
  handleBack,
  addToKeepPile,
  addToFirst5Value,
  addToDiscardPile,
  handleReset,
} = valueSlice.actions;
