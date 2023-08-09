import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UpdateProduct } from "../../../Services/ProductServices";
import customToast from "../../../components/Toast/toastify";
import { getProductAction } from "./getProductSlice";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const updateProductSlice = createSlice({
  name: "updateProductSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(udpateProductAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(udpateProductAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(udpateProductAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const udpateProductAction = createAsyncThunk(
  "udpateProductAction",
  async ({ product_id, payload, dispatch, setEditProduct }, thunkApi) => {
    return UpdateProduct({ product_id, payload })
      .then((res) => {
        customToast(res.message ?? "Updated successully");
        setEditProduct(false);
        dispatch(getProductAction(product_id));
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default updateProductSlice.reducer;
