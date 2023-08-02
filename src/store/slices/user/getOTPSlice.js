import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetOTP } from "../../../Services/UserServices";
import customToast from "../../../components/Toast/toastify";
import { SET_STORAGE_ITEM } from "../../../config/storage";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getOTPSlice = createSlice({
  name: "getOTPSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getOTPAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOTPAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(getOTPAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const getOTPAction = createAsyncThunk(
  "getOTPAction",
  async ({ data, navigate }, thunkApi) => {
    return GetOTP(data)
      .then((res) => {
        navigate("/reset-password");
        customToast(res.message ?? "OTP Code Sent Successful");
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default getOTPSlice.reducer;
