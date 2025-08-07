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
  },
  reducers: {
    handleNext: (state) => {
      if (state.activeStep === 0) {
        state.activeStep += 1;
      }
    },
    handleBack: (state) => {
      state.activeStep -= 1;
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

export const { handleNext, handleBack } = valueSlice.actions;
