import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SwitchAccount } from "../../../Services/PartnerServices";
import customToast from "../../../components/Toast/toastify";
import { refreshAccessToken } from "../../../config/api";
import { GET_STORAGE_ITEM } from "../../../config/storage";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const switchAccountSlice = createSlice({
  name: "switchAccountSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(switchAccountAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(switchAccountAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(switchAccountAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const switchAccountAction = createAsyncThunk(
  "switchAccountAction",
  async ({ id, setPartner }, thunkApi) => {
    return SwitchAccount(id)
      .then((res) => {
        refreshAccessToken(GET_STORAGE_ITEM("refresh_token"), setPartner);
        customToast(res.message ?? "Account switched successfully");
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default switchAccountSlice.reducer;
