import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAccounts } from "../../../Services/PartnerServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getAllAccountSlice = createSlice({
  name: "getAllAccountSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllAccountAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllAccountAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllAccountAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const getAllAccountAction = createAsyncThunk(
  "getAllAccountAction",
  async (thunkApi) => {
    return GetAccounts()
      .then((res) => {
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default getAllAccountSlice.reducer;
