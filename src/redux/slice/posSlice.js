import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getProductByName } from "../../api/services/purchaseService";

export const fetchFilteredProductList = createAsyncThunk(
  "pos/fetchFilteredProductList",
  async () => {
    const response = await getProductByName();
    return response?.data;
  }
);

const posSlice = createSlice({
  name: "pos",
  initialState: {
    searchByProductName: [],
    filteredProductList: [],
    isEdit: false,
    status: "idle",
    error: null,
  },
  reducers: {
    resetInitialValues: (state) => {
      state.supplierDataById = {};
    },
    setEdit: (state, action) => {
      state.isEdit = action?.payload;
    },
    setFilteredProductList: () => {
      // Need Image and category
      // const { filteredProductList = [] } = current(state);
      // const newData = newFilteredProductList?.filter((data) => data?.)
      //   state.filteredProductList = action?.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilteredProductList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilteredProductList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchByProductName = action?.payload;
        state.filteredProductList = action?.payload;
      })
      .addCase(fetchFilteredProductList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.error?.message;
      });
  },
});

export const { setFilteredProductList, resetInitialValues, setEdit } =
  posSlice.actions;
export default posSlice.reducer;
