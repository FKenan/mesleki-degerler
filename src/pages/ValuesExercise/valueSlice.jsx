import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const valueSlice = createSlice({
  name: "value",
  initialState: {
    values: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchValues.fulfilled, (state, action) => {
      state.values = action.payload;
    });
  },
});

export const fetchValues = createAsyncThunk("Degerler", async (data) => {
  try {
    var res = await fetch("https://localhost:44316/api/Degerler");
    return res.json();
  } catch (e) {
    console.error("API gönderim hatası:", error);
  }
});
