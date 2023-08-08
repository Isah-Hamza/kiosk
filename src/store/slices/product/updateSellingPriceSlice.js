import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UpdateSellingPrice } from "../../../Services/ProductServices";
import customToast from "../../../components/Toast/toastify";
import { getProductAction } from "./getProductSlice";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const updateSellingPriceSlice = createSlice({
  name: "updateSellingPriceSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(udpateSellingPriceAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(udpateSellingPriceAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(udpateSellingPriceAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const udpateSellingPriceAction = createAsyncThunk(
  "udpateSellingPriceAction",
  async ({ product_id, payload, dispatch }, thunkApi) => {
    return UpdateSellingPrice({ product_id, payload })
      .then((res) => {
        customToast(res.message ?? "Updated successully");
        dispatch(getProductAction(product_id));
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default updateSellingPriceSlice.reducer;
