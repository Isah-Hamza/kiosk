import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateProduct } from "../../../Services/ProductServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const createProductSlice = createSlice({
  name: "createProductSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createProductAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProductAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(createProductAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const createProductAction = createAsyncThunk(
  "createProductAction",
  async ({ data, navigate }, thunkApi) => {
    return CreateProduct(data)
      .then((res) => {
        customToast(res?.message ?? " Product Created Successful");
        navigate("/products");
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default createProductSlice.reducer;
