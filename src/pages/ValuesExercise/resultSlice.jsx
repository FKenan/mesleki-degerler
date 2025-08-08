import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTableData = createAsyncThunk(
  "api/Bolumler",
  async (values) => {
    const ids = values.map((item) => item.id).join(",");
    const url = `https://localhost:44316/api/Bolumler?ids=${ids}`;
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.error("API gönderim hatası:", error);
    }
  }
);

export const resultSlice = createSlice({
  name: "result",
  initialState: {
    tableData: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTableData.fulfilled, (state, action) => {
      state.tableData = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchTableData.pending, (state) => {
      state.tableData = [];
      state.loading = true;
    });
  },
});
