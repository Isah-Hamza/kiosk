import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreatePartner } from "../../../Services/PartnerServices";
import customToast from "../../../components/Toast/toastify";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const createPartnerSlice = createSlice({
  name: "createPartnerSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createPartnerAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPartnerAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(createPartnerAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const createPartnerAction = createAsyncThunk(
  "createPartnerAction",
  async ({ data, navigate }, thunkApi) => {
    return CreatePartner(data)
      .then((res) => {
        navigate("/home");
        customToast(res.message ?? "Partner Account Created Successful");
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default createPartnerSlice.reducer;
