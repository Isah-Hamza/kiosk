import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUserAccounts } from "../../../Services/PartnerServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getUserAccountSlice = createSlice({
  name: "getUserAccountSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUserAccountAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserAccountAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getUserAccountAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const getUserAccountAction = createAsyncThunk(
  "getUserAccountAction",
  async (thunkApi) => {
    return GetUserAccounts()
      .then((res) => {
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default getUserAccountSlice.reducer;
