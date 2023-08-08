import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UpdateStock } from "../../../Services/ProductServices";
import customToast from "../../../components/Toast/toastify";
import { getProductAction } from "./getProductSlice";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const updateStockSlice = createSlice({
  name: "updateStockSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(udpateStockAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(udpateStockAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(udpateStockAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const udpateStockAction = createAsyncThunk(
  "udpateStockAction",
  async ({ product_id, payload, dispatch, setUpdateStock }, thunkApi) => {
    return UpdateStock({ product_id, payload })
      .then((res) => {
        customToast(res.message ?? "Updated successully");
        setUpdateStock(false);
        dispatch(getProductAction(product_id));
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default updateStockSlice.reducer;
