import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customToast from "../../../components/Toast/toastify";
import { GetAccountBalance } from "../../../Services/ReportServices";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const AccountBalanceSlice = createSlice({
  name: "AccountBalanceSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(accountBalanceAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(accountBalanceAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(accountBalanceAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const accountBalanceAction = createAsyncThunk(
  "accountBalanceAction",
  async (thunkApi) => {
    return GetAccountBalance()
      .then((res) => {
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default AccountBalanceSlice.reducer;
