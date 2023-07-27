import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customToast from "../../../components/Toast/toastify";
import { GetPartnerGroups } from "../../../Services/AppDataServices";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const PartnerGroupSlice = createSlice({
  name: "PartnerGroupSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(partnerGroupAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(partnerGroupAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(partnerGroupAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const partnerGroupAction = createAsyncThunk(
  "partnerGroupAction",
  async (thunkApi) => {
    return GetPartnerGroups()
      .then((res) => {
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default PartnerGroupSlice.reducer;
