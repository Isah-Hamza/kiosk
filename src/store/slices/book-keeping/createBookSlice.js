import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateBook } from "../../../Services/BookServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const createBookSlice = createSlice({
  name: "createBookSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createBookAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createBookAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(createBookAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const createBookAction = createAsyncThunk(
  "createBookAction",
  async ({ data, navigate }, thunkApi) => {
    return CreateBook(data)
      .then((res) => {
        customToast(res?.message ?? " Record Created Successful");
        navigate(data.bookType == 1 ? "/all-sales" : "/all-expenses");
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default createBookSlice.reducer;
