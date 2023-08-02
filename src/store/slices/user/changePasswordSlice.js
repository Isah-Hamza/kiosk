import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ChangePassword } from "../../../Services/UserServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const changePasswordSlice = createSlice({
  name: "changePasswordSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(changePasswordAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changePasswordAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(changePasswordAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const changePasswordAction = createAsyncThunk(
  "changePasswordAction",
  async ({data, formik}, thunkApi) => {
    return ChangePassword(data)
      .then((res) => {
        customToast(res.message ?? "Password Changed Successful");
        formik.resetForm()
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default changePasswordSlice.reducer;
