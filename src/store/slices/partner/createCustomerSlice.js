import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateAccount,
  CreateCustomer,
} from "../../../Services/PartnerServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const createCustomerSlice = createSlice({
  name: "createCustomerSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createCustomerAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCustomerAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(createCustomerAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const createCustomerAction = createAsyncThunk(
  "createCustomerAction",
  async ({ data, navigate }, thunkApi) => {
    return CreateCustomer(data)
      .then((res) => {
        customToast(res?.message ?? "Customer Created Successful");
        navigate("/customers");
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default createCustomerSlice.reducer;
