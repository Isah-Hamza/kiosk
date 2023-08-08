import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetSuppliers } from "../../../Services/ProductServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getSupplierSlice = createSlice({
  name: "getSupplierSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getSupplierAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSupplierAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getSupplierAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const getSupplierAction = createAsyncThunk(
  "getSupplierAction",
  async (thunkApi) => {
    return GetSuppliers()
      .then((res) => {
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default getSupplierSlice.reducer;
