import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customToast from "../../../components/Toast/toastify";
import { GetDashboardReport } from "../../../Services/ReportServices";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const DashboardReportSlice = createSlice({
  name: "DashboardReportSlice",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(dashboardReportAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(dashboardReportAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(dashboardReportAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const dashboardReportAction = createAsyncThunk(
  "dashboardReportAction",
  async (thunkApi) => {
    return GetDashboardReport()
      .then((res) => {
        return res;
      })
      .catch((e) => {
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default DashboardReportSlice.reducer;
