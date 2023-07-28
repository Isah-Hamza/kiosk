import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customToast from "../../../components/Toast/toastify";
import { GetPartnerSubGroups } from "../../../Services/AppDataServices";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const PartnerSubGroupSlice = createSlice({
  name: "PartnerSubGroupSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(partnerSubGroupAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(partnerSubGroupAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(partnerSubGroupAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const partnerSubGroupAction = createAsyncThunk(
  "partnerSubGroupAction",
  async (id, thunkApi) => {
    return GetPartnerSubGroups(id)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default PartnerSubGroupSlice.reducer;
