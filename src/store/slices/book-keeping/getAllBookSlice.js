import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetBooks } from "../../../Services/BookServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getAllBookSlice = createSlice({
  name: "getAllBookSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllBookAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllBookAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllBookAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const getAllBookAction = createAsyncThunk(
  "getAllBookAction",
  async (bookType, thunkApi) => {
    return GetBooks(bookType)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default getAllBookSlice.reducer;
