import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ConfirmAccount } from "../../../Services/UserServices";
import customToast from "../../../components/Toast/toastify";
import { SET_STORAGE_ITEM } from "../../../config/storage";
import { setAuthorizationHeader } from "../../../config/api";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const confirmAccountSlice = createSlice({
  name: "confirmAccountSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(confirmAccountAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(confirmAccountAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(confirmAccountAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const confirmAccountAction = createAsyncThunk(
  "confirmAccountAction",
  async ({ data, navigate }, thunkApi) => {
    return ConfirmAccount(data)
      .then((res) => {
        customToast(res.message ?? "Account Confirmed Successful");
        setAuthorizationHeader(res.token);

        SET_STORAGE_ITEM("token", res.token);
        SET_STORAGE_ITEM("refresh_token", res.refreshToken);
        SET_STORAGE_ITEM("user", res.user);
        navigate('/create-business');
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default confirmAccountSlice.reducer;
