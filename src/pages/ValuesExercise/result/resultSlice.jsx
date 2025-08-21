import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTableData = createAsyncThunk(
  "result/fetchTableData",
  async (values) => {
    const ids = values.map((item) => item.id).join(",");
    const url = `${import.meta.env.VITE_API_BASEURL}/Bolumler?ids=${ids}`;
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.error("API gönderim hatası:", error);
      return [];
    }
  }
);

export const resultSlice = createSlice({
  name: "result",
  initialState: {
    tableData: [],
    isLoading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTableData.pending, (state) => {
      state.tableData = [];
      state.isLoading = true;
    });

    builder.addCase(fetchTableData.fulfilled, (state, action) => {
      state.tableData = action.payload;
      state.isLoading = false;
    });
  },
});
