import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetCustomers } from "../../../Services/ProductServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getCustomerSlice = createSlice({
  name: "getCustomerSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCustomerAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCustomerAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getCustomerAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const getCustomerAction = createAsyncThunk(
  "getCustomerAction",
  async (thunkApi) => {
    return GetCustomers()
      .then((res) => {
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default getCustomerSlice.reducer;
