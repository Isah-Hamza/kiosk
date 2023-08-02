import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ResetPassword } from "../../../Services/UserServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const resetPasswordSlice = createSlice({
  name: "resetPasswordSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(resetPasswordAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(resetPasswordAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(resetPasswordAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const resetPasswordAction = createAsyncThunk(
  "resetPasswordAction",
  async ({ data, navigate }, thunkApi) => {
    return ResetPassword(data)
      .then((res) => {
        navigate("/login");
        customToast(res.message ?? "Password Reset Successful");
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default resetPasswordSlice.reducer;
