import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customToast from "../../../components/Toast/toastify";
import { SET_STORAGE_ITEM } from "../../../config/storage";
import { GetAllStates } from "../../../Services/AppDataServices";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const AllStateSlice = createSlice({
  name: "AllStateSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(allStateAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(allStateAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(allStateAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const allStateAction = createAsyncThunk(
  "allStateAction",
  async (thunkApi) => {
    return GetAllStates()
      .then((res) => {
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default AllStateSlice.reducer;
