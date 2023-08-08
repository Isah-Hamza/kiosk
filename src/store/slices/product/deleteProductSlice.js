import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DeleteProduct } from "../../../Services/ProductServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const deleteProductSlice = createSlice({
  name: "deleteProductSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(deleteProductAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProductAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteProductAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const deleteProductAction = createAsyncThunk(
  "deleteProductAction",
  async ({ product_id, navigate }, thunkApi) => {
    return DeleteProduct(product_id)
      .then((res) => {
        customToast(res?.message ?? " Product Deleted Successful");
        navigate("/inventory");
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default deleteProductSlice.reducer;
