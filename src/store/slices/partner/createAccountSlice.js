import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateAccount } from "../../../Services/PartnerServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const createAccountSlice = createSlice({
  name: "createAccountSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createAccountAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createAccountAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(createAccountAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const createAccountAction = createAsyncThunk(
  "createAccountAction",
  async ({ data, navigate }, thunkApi) => {
    return CreateAccount(data)
      .then((res) => {
        customToast(res?.message ?? " Account Created Successful");
        navigate("/sub-accounts");
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default createAccountSlice.reducer;
