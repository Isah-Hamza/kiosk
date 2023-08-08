import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UpdateCostPrice } from "../../../Services/ProductServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const updateCostPriceSlice = createSlice({
  name: "updateCostPriceSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(udpateCostPriceAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(udpateCostPriceAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(udpateCostPriceAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const udpateCostPriceAction = createAsyncThunk(
  "udpateCostPriceAction",
  async ({ product_id, payload }, thunkApi) => {
    return UpdateCostPrice({ product_id, payload })
      .then((res) => {
        customToast(res.message ?? "Updated successully");
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default updateCostPriceSlice.reducer;
