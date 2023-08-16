import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetBookById } from "../../../Services/BookServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getBookByIdSlice = createSlice({
  name: "getBookByIdSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getBookByIdAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBookByIdAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getBookByIdAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const getBookByIdAction = createAsyncThunk(
  "getBookByIdAction",
  async (bookType, thunkApi) => {
    return GetBookById(bookType)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default getBookByIdSlice.reducer;
