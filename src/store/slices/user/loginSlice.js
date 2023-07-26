import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthenticateUser } from "../../../Services/UserServices";
import {
  GET_STORAGE_ITEM,
  REMOVE_STORAGE_ITEM,
  SET_STORAGE_ITEM,
} from "../../../config/storage";
import customToast from "../../../component/Toast/toastify";
import { dApis } from "../../../config/api";

const initialState = {
  loading: false,
  error: null,
  token: GET_STORAGE_ITEM("token") || null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    logout: (state, action) => {
      REMOVE_STORAGE_ITEM("token");
      REMOVE_STORAGE_ITEM("refresh_token");
      REMOVE_STORAGE_ITEM("user");
      window.location.href = "/login";
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.loading = false;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const loginAction = createAsyncThunk(
  "login",
  async ({ data, history }, thunkApi) => {
    // thunkApi.dispatch(changeProgress(60));
    return AuthenticateUser(data)
      .then((res) => {
        console.log("from login page", res);
        history.replace("/home");
        customToast("Login successful");
        SET_STORAGE_ITEM("token", res.token);
        SET_STORAGE_ITEM("refresh_token", res.refreshToken);
        SET_STORAGE_ITEM("user", res.user);

        dApis.defaults.headers.Authorization = `Bearer ${res.token}`;
        // thunkApi.dispatch(changeProgress(100));
        return res;
      })
      .catch((e) => {
        // thunkApi.dispatch(changeProgress(100));
        customToast(e.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default loginSlice.reducer;

export const { logout } = loginSlice.actions;
