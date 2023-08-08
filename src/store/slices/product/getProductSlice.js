import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetProductById } from "../../../Services/ProductServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getProductSlice = createSlice({
  name: "getProductSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProductAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getProductAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const getProductAction = createAsyncThunk(
  "getProductAction",
  async (id, thunkApi) => {
    return GetProductById(id)
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

export default getProductSlice.reducer;
