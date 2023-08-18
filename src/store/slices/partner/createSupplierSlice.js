import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateAccount,
  CreateSupplier,
} from "../../../Services/PartnerServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const createSupplierSlice = createSlice({
  name: "createSupplierSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createSupplierAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createSupplierAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(createSupplierAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const createSupplierAction = createAsyncThunk(
  "createSupplierAction",
  async ({ data, navigate }, thunkApi) => {
    return CreateSupplier(data)
      .then((res) => {
        customToast(res?.message ?? "Supplier  Created Successful");
        navigate("/customers");
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default createSupplierSlice.reducer;
