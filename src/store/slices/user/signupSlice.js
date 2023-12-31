import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Signup } from "../../../Services/UserServices";
import customToast from "../../../components/Toast/toastify";
import { SET_STORAGE_ITEM } from "../../../config/storage";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const signupSlice = createSlice({
  name: "signupSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(signupAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signupAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(signupAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const signupAction = createAsyncThunk(
  "signupAction",
  async ({ data, navigate }, thunkApi) => {
    return Signup(data)
      .then((res) => {
        navigate('/verify-account');
        customToast(res.message ?? "Account Created Successful");
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default signupSlice.reducer;
