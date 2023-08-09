import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetProductActivities } from "../../../Services/ProductServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getProductActivitySlice = createSlice({
  name: "getProductActivitySlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProductActivityAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductActivityAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getProductActivityAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const getProductActivityAction = createAsyncThunk(
  "getProductActivityAction",
  async (id, thunkApi) => {
    return GetProductActivities(id)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default getProductActivitySlice.reducer;
