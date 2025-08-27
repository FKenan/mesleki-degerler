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
    } finally {
    }
  }
);

export const resultSlice = createSlice({
  name: "result",
  initialState: {
    tableData: [],
    filteredTableData: [],
    matchFilter: 1,
    isLoading: false,
  },
  reducers: {
    setMatchFilter: (state, action) => {
      state.matchFilter = action.payload;
    },
    applyFilter: (state, action) => {
      const { first5Value } = action.payload;
      if (state.matchFilter === 1) {
        state.filteredTableData = state.tableData;
        return;
      }

      const first5ValueIds = new Set(first5Value.map((v) => v.id));

      state.filteredTableData = state.tableData.filter((bolum) => {
        if (!bolum.degerler || bolum.degerler.length === 0) {
          return false;
        }

        let matchCount = 0;
        for (const value of bolum.degerler) {
          if (first5ValueIds.has(value.id)) {
            matchCount += 1;
          }
        }

        return matchCount >= state.matchFilter;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTableData.pending, (state) => {
      state.tableData = [];
      state.filteredTableData = [];
      state.isLoading = true;
      state.matchFilter = 1;
    });

    builder.addCase(fetchTableData.fulfilled, (state, action) => {
      state.tableData = action.payload;
      state.filteredTableData = action.payload;
      state.isLoading = false;
    });
  },
});

export const { setMatchFilter, applyFilter } = resultSlice.actions;
