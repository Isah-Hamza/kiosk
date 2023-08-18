import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetOTP } from '../../../Services/UserServices';
import customToast from '../../../components/Toast/toastify';
import { SET_STORAGE_ITEM } from '../../../config/storage';
import { CreateDeliveryService } from '../../../Services/DeliveryServices';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const createDeliverySlice = createSlice({
  name: 'createDeliverySlice',
  initialState,

  reducers: {
    createDeliveryDefault: () => initialState,
  },

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

export const createDeliveryAction = createAsyncThunk('createDeliveryAction', async ({ data, navigate }, thunkApi) => {
  return CreateDeliveryService(data)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      customToast(e.message, true);
      return thunkApi.rejectWithValue(e);
    });
});

export default createDeliverySlice.reducer;
export const { createDeliveryDefault } = createDeliverySlice.actions;
