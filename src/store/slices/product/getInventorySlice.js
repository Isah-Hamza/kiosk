import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetInventory } from "../../../Services/ProductServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getInventorySlice = createSlice({
  name: " getInventorySlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getInventoryAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getInventoryAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getInventoryAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const getInventoryAction = createAsyncThunk(
  "getInventoryAction",
  async (thunkApi) => {
    return GetInventory()
      .then((res) => {
        // customToast(res?.message ?? " Product Created Successful");
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default getInventorySlice.reducer;
